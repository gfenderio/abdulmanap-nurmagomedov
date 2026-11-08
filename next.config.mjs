/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // The demo database is a SQLite file read at runtime (src/lib/db.ts). Ship
  // it with every server function, and load libSQL (a native module) from
  // node_modules instead of bundling it, with its Linux build alongside.
  serverExternalPackages: ["@prisma/adapter-libsql", "@libsql/client", "libsql"],
  outputFileTracingIncludes: {
    "/**/*": ["./prisma/demo.db", "./node_modules/@libsql/linux-x64-gnu/**"],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' blob: data: https://ui-avatars.com https://images.unsplash.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
