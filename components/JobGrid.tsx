export default function JobGrid() {
  return( 
  <div className="grid grid-cols-4 bg-accent">
    <p>Вакансия</p><p>Статус</p><p>Следующий шаг</p><p>Обновленло</p>
    {jobList.map((job, ind)=>(
        <div key={ind}>{job.vacancies_info.vacancies_name}</div>
    ))}
  </div>);
}

const jobList = [
  {
    vacancies_info: {
      vacancies_name: "Frontend-разраб",
      company_name: "Компания Ы",
      work_format: "Удаленно",
      salary: "от 100000",
    },

    status: "собез",

    next_step: {
      description: "Подготовиться к встрече",
      date: {
        date_of_month: "24 ноября",
        time: "11:00",
      },
    },
    update_time: "Сегодня",
  },
  {
    vacancies_info: {
      vacancies_name: "React-разраб",
      company_name: "Компания Z",
      work_format: "Офис",
      salary: "от 300000",
    },

    status: "Откликнуться",

    next_step: {
      description: "Уточнить статус отклика",
      date: {
        date_of_month: "25 ноября",
        time: null,
      },
    },
    update_time: "Вчера",
  },
];
