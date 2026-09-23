import {Ref, TextareaHTMLAttributes} from "react";

type InputType = {
  label: string
  ref: Ref<HTMLTextAreaElement>
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export default function TextareaInput({label, ref, ...rest}: InputType) {
  const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
  return <p className="flex flex-col gap-1 my-4">
    <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
      <textarea className={classes} ref={ref} {...rest}></textarea>
  </p>
}