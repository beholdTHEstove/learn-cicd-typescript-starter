import { defineConfig } from "drizzle-kit";

import { config } from "./src/config";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: config.db.url || "libsql://notely-db-beholdthestove.aws-us-east-1.turso.io",
  },
});
