export default function FilterMenu() {
    return(
        <div className="flex gap-4">
            {menuList.map((value, ind)=>(
                <button className="hover:bg-accent-hover" key={ind}>{value}</button>
            ))}
        </div>
    )
}

const menuList = [
  "Все",
  "Сохранено",
  "Откликнулся",
  "Собеседование",
  "Оффер",
  "Отказ",
];
