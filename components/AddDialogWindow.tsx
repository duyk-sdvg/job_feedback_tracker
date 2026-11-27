import { RefObject } from "react";
import Input from "./Input";
import Select from "./Select";

export default function AddDialogWindow({
  dialogRef,
}: {
  dialogRef: RefObject<HTMLDialogElement | null>;
}) {
  return (
    <dialog className="bg-foreground " ref={dialogRef}>
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
      <Input
        textLabel="Компания"
        isRequired={true}
        placeholder="Название компании"
      />
      <Input
        textLabel="Должность"
        isRequired={true}
        placeholder="Название должности"
      />
      <Input textLabel="Ссылка на вакансию" placeholder="https://" />
      <Select textLabel="Статус" selectList={["Сохранено", "Откликнулся", "Собеседование", "Оффер", "Отказ"]} />

        <div className="flex">
            <Input textLabel="Зарплата от"/>
            <Select textLabel="Формат работы" selectList={["Не указан", "Офис", "Удаленно", "Гибрид"]} />
        </div>

        <Input textLabel="Следующий шаг" placeholder="Что сделать дальше" />

        <div>
          <Input textLabel="Дата следующего шага" placeholder="ДД.ММ"/>
          <Input textLabel="Время" placeholder="ЧЧ.ММ"/>
        </div>

        <label>
            Заметка
            <textarea placeholder="Что важно знать о вакансии" />
        </label>

        * Обязательные поля

        <div>
          <button className="hover:bg-accent-hover">Отмена</button>
          <button className="hover:bg-accent-hover">Создать отклик</button>
        </div>

    </dialog>
  );
}

