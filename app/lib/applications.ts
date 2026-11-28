import { cacheLife } from "next/cache";
import { ApplicationResponse } from "../types/applications";
import { pool } from "@/app/lib/db";

export default async function getApplications() {
  "use cache";
  cacheLife("minutes")
  const result = await pool.query("SELECT * FROM applications");
  const data: ApplicationResponse[] = result.rows;
  return data;
  // const url = '/api/applications'
  // const response = await fetch(url)
  // if(response.ok){
  //     const data: ApplicationResponse = await response.json()
  //     return data
  // }
  // throw new Error('не прошел response')
}
