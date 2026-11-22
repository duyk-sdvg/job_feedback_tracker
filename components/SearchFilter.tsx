export default function SearchFilter(){
    return(
        <div className="flex gap-2">
            <label className="flex flex-col bg-muted">
                Поиск
                <input />
            </label>
            <label className="flex flex-col bg-muted">
                Сортировка
                <input />
            </label>
        </div>
    )
}