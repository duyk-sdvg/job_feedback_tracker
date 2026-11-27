import { pool } from "@/app/lib/db";

export async function GET() {
  const result = await pool.query("SELECT * FROM applications");
  return Response.json(result.rows);
}
