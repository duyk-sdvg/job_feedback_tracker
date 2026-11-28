"use server";

import { cacheLife } from "next/cache";
import { ApplicationResponse } from "../types/applications";
import { pool } from "@/app/lib/db";

export async function getApplications() {
  "use cache";
  cacheLife("minutes");
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

export async function addApplications(formData: FormData) {
  const result = await pool.query(
    "INSERT INTO applications (job_title, company_name, work_format,\
    salary_from,\
    next_step,\
    next_step_date,\
    next_step_time,\
    note, status, vacancy_url\
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    [
      formData.get("job_title"),
      formData.get("company_name"),
      formData.get("work_format"),
      formData.get("salary_from"),
      formData.get("next_step"),
      formData.get("next_step_date"),
      formData.get("next_step_time"),
      formData.get("note"),
      formData.get("status"),
      formData.get("vacancy_url"),
    ],
  );
}
