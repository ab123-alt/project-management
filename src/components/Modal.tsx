import Button from "./Button";
import {PropsWithChildren, Ref, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

export type ModalRef = {
  open: () => void;
};

type ModalInputType = PropsWithChildren<{
  buttonText: string
  ref: Ref<ModalRef>
}>

export default function Modal({children, buttonText, ref}: ModalInputType) {

  const dialogRef = useRef<HTMLDialogElement>(null)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current!.showModal()
      }
    }
  })

  return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button label={buttonText} />
      </form>
    </dialog>,
    document.getElementById('modal-root')!)
}