/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { drizzle } from "drizzle-orm/postgres-js";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

export const db = drizzle(sql as any, { schema });
