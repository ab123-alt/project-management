import Input from "./Input";
import {ChangeEvent, useState} from "react";
import {Project} from "../App";

type NewProjectViewInputs = {
  onSave: (p: Project) => void,
  onCancel: () => void
}
export default function NewProjectView({onSave, onCancel}: NewProjectViewInputs) {

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState<Date>(new Date())

  function handleSaveClick() {
    const project: Project = {
      title: title,
      description: description,
      dueDate: date
    }
    onSave(project)
  }

  return (
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
        <Input type="text" label="Title" onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value)
        }}/>
        <Input label="Description" textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setDescription(e.target.value)
        }}/>
        <Input type="date" label="Due Date" onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setDate(new Date(e.target.value))
        }}/>
      </div>
    </div>
  );
}