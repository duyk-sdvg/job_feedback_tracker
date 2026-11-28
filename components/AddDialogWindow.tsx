import { RefObject } from "react";
import Input from "./Input";
import Select from "./Select";
import { addApplications } from "@/app/lib/applications";

export default function AddDialogWindow({
  dialogRef,
}: {
  dialogRef: RefObject<HTMLDialogElement | null>;
}) {
  return (
    <dialog className="bg-foreground m-auto" ref={dialogRef}>
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2>Новый отклик</h2>
          <p>Добавь вакансию чтобы вернуться к ней позже.</p>
        </div>
        <button
          className="bg-amber-700 size-5"
          onClick={() => dialogRef.current?.close()}
        ></button>
      </div>

      <form action={addApplications}>
        <Input
          name="company_name"
          textLabel="Компания"
          isRequired={true}
          placeholder="Название компании"
        />
        <Input
          name="job_title"
          textLabel="Должность"
          isRequired={true}
          placeholder="Название должности"
        />
        <Input
          name="vacancy_url"
          textLabel="Ссылка на вакансию"
          placeholder="https://"
        />
        <Select
          name="status"
          textLabel="Статус"
          selectList={[
            "Сохранено",
            "Откликнулся",
            "Собеседование",
            "Оффер",
            "Отказ",
          ]}
        />
        <div className="flex">
          <Input name="salary_from" textLabel="Зарплата от" />
          <Select
            name="work_format"
            textLabel="Формат работы"
            selectList={["Не указан", "Офис", "Удаленно", "Гибрид"]}
          />
        </div>
        <Input
          name="next_step"
          textLabel="Следующий шаг"
          placeholder="Что сделать дальше"
        />
        <div>
          <Input
            name="next_step_date"
            textLabel="Дата следующего шага"
            placeholder="ДД.ММ"
          />
          <Input name="next_step_time" textLabel="Время" placeholder="ЧЧ.ММ" />
        </div>
        <label>
          Заметка
          <textarea name="note" placeholder="Что важно знать о вакансии" />
        </label>
        * Обязательные поля
        <div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="hover:bg-accent-hover"
          >
            Отмена
          </button>
          <button type="submit" className="hover:bg-accent-hover">
            Создать отклик
          </button>
        </div>
      </form>
    </dialog>
  );
}
