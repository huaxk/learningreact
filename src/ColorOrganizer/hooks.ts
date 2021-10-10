import { ChangeEvent, useState } from "react"

export function useInput(initalValue: string): [
  {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  },
  () => void
] {
  const [value, setValue] = useState(initalValue)

  return [
    {
      value,
      onChange: e => setValue(e.target.value)
    },
    () => setValue(initalValue)
  ]
}