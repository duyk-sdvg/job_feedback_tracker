import AddButton from "./AddButton";

export default function Header(){
    return(
        <div className="flex justify-between">
            <div className="flex flex-col">
                <h2 className="text-3xl">Мои отклики</h2>
                <p>Вакансии, ответы и следующие шаги.</p>
            </div>
            <AddButton />
        </div>
    )
}