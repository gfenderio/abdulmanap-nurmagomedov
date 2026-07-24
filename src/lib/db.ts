import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"

const prismaClientSingleton = () => {
  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10, // batasi max koneksi per instance serverless
    idleTimeoutMillis: 30000, // tutup koneksi idle dalam 30 detik
    connectionTimeoutMillis: 5000, // fail-fast jika DB tidak merespons dalam 5 detik
    ssl: {
      rejectUnauthorized: false
    }
  })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

export const db = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = db
