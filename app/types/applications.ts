export interface ApplicationResponse {
  id: number;
  user_id: number | null;
  job_title: string;
  company_name: string;
  vacancy_url: string | null;
  work_format: WorkFormat;
  salary_from: number | null;
  status: StatusFormat;
  next_step: string | null;
  next_step_date: Date | null;
  next_step_time: string | null;
  note: string | null;
  created_at: Date ;
  updated_at: Date ;
}

type WorkFormat = "Не указан" | "Офис" | "Удаленно" | "Гибрид";
type StatusFormat =
  | "Сохранено"
  | "Откликнулся"
  | "Собеседование"
  | "Оффер"
  | "Отказ";
