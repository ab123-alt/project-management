import Button from "./Button";

type ModalInputType = {
  onModalClick: () => void
}

export default function Modal({onModalClick}: ModalInputType) {

  return <>
      <div className="mt-24 w-2/3">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
        <div className="mt-4 text-right">
          <Button label="OK" onClick={onModalClick}/>
        </div>
      </div>
  </>
}