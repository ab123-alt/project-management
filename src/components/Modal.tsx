import Button from "./Button";
import {PropsWithChildren, useEffect, useRef} from "react";
import {createPortal} from "react-dom";

type ModalInputType = PropsWithChildren<{
  buttonText: string
  open: boolean
  onClose: () => void
}>

export default function Modal({children, buttonText, open, onClose}: ModalInputType) {

  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (open) {
      dialogRef.current!.showModal()
    } else {
      dialogRef.current!.close()
    }
  }, [open])

  return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <div className="mt-4 text-right">
        <Button label={buttonText} onClick={onClose}/>
      </div>
    </dialog>,
    document.getElementById('modal-root')!)
}