import { Ref, RefObject } from "react";

export default function AddButton({dialogRef}:{dialogRef: RefObject<HTMLDialogElement | null>}) {


  return (
    <button className="bg-accent" onClick={()=>dialogRef.current?.showModal()}>
      Добавить отклик
    </button>
  );
}


