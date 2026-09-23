import Input from "./Input";
import {useRef, useState} from "react";
import {Project} from "../App";
import Modal from "./Modal";
import TextareaInput from "./TextareaInput";

type NewProjectViewInputs = {
  onSave: (p: Project) => void,
  onCancel: () => void
}
export default function NewProjectView({onSave, onCancel}: NewProjectViewInputs) {
  const [error, setError] = useState<boolean>(false)

  // We don't want to listen to every keystroke and use the onChange method, but rather only collect the value
  // intrinsic to the html input element when the save button is clicked
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)

  function handleSaveClick() {
    let title = titleRef.current!.value;
    let description = titleRef.current!.value;
    let date = dateRef.current!.value;
    if (title.trim() === '' || description.trim() === '' || date.trim() === '') {
      setError(true)
      return
    }
    setError(false)
    const project: Project = {
      id: self.crypto.randomUUID(),
      title: title,
      description: description,
      dueDate: new Date(date),
      tasks: []
    }
    onSave(project)
  }

  function handleModalClick() {
    setError(false)
  }

  return (
    <>
      {error && <Modal onModalClick={handleModalClick}/>}
      {!error &&
          <div className="mt-24 w-2/3">
              <menu className="flex items-center justify-end gap-4 my-4">
                  <li>
                      <button
                          className="text-stone-800 hover:text-stone-950"
                          onClick={onCancel}
                      >
                          Cancel
                      </button>
                  </li>
                  <li>
                      <button
                          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                          onClick={handleSaveClick}
                      >
                          Save
                      </button>
                  </li>
              </menu>
              <div>
                  <Input
                      ref = {titleRef}
                      type="text"
                      label="Title"
                  />
                  <TextareaInput
                      ref ={descriptionRef}
                      label="Description"
                  />
                  <Input
                      ref = {dateRef}
                      type="date"
                      label="Due Date"
                  />
              </div>
          </div>
      }
    </>
  );
}