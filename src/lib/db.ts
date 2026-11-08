import { PrismaClient } from "@prisma/client"
import { PrismaLibSql } from "@prisma/adapter-libsql"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"

/**
 * The demo runs on one SQLite file, prisma/demo.db, built from
 * prisma/seed-demo.ts and shipped with the app. There is no database server,
 * so there is nothing to pause or wake: the portal is up whenever the site is.
 *
 * Every visitor is read-only (see lib/demo.ts), so the file is only read.
 * On a host whose app folder is read-only, the file is copied once to the
 * temp folder, because SQLite may still want to touch it when opening.
 */
function demoDatabaseUrl(): string {
  // An old Postgres DATABASE_URL may still be set on the host; only a
  // SQLite/libSQL address is meant for this client.
  const fromEnv = process.env.DATABASE_URL || ""
  if (/^(file|libsql):/.test(fromEnv)) return fromEnv
  const bundled = path.join(process.cwd(), "prisma", "demo.db")
  if (process.env.NODE_ENV !== "production") return `file:${bundled}`
  const copy = path.join(os.tmpdir(), "sias-demo.db")
  if (!fs.existsSync(copy)) fs.copyFileSync(bundled, copy)
  return `file:${copy}`
}

const prismaClientSingleton = () => {
  const adapter = new PrismaLibSql({ url: demoDatabaseUrl() })
  return new PrismaClient({ adapter })
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

export const db = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = db
