import { ApplicationResponse } from "@/app/types/applications";

export default function JobGrid({
  applicationData,
}: {
  applicationData: ApplicationResponse[];
}) {
  return (
    <div className="flex flex-col gap-4 bg-accent">
      <div className="grid grid-cols-4">
        <p>Вакансия</p>
        <p>Статус</p>
        <p>Следующий шаг</p>
        <p>Обновленло</p>
      </div>
      {applicationData.map((job) => (
        <button className="grid grid-cols-4 border border-border text-left" key={job.id}>

          <div>
            <p>{job.job_title}</p>
            <div className="flex gap-5">
              <p>{job.company_name}</p>
              <p>{job.work_format}</p>
            </div>
            <p>От {job.salary_from} ₽</p>
          </div>

          <p>{job.status}</p>

          <div>
            <p>{job.next_step}</p>
            <div className="flex gap-5">
              <p>{job.next_step_date && job.next_step_date.toLocaleDateString()}</p>
              <p>{job.next_step_time && job.next_step_time.toString()}</p>
            </div>
          </div>
          <p>{job.updated_at.toLocaleDateString()}</p>
        </button>
      ))}
    </div>
  );
}
