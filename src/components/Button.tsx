import {ButtonHTMLAttributes} from "react";

type ButtonInputs = {
  label: string
} & ButtonHTMLAttributes<HTMLButtonElement>
export default function Button({label, ...rest}: ButtonInputs) {
  return <>
    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
            {...rest}
    >
      {label}
    </button>
  </>
}