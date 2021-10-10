import { FormEvent, useEffect, useState } from "react";
import { UseColors } from "./ColorProvider";
import { useInput } from "./hooks";

export default function () {
  const [titleProps, resetTitle] = useInput("")
  const [colorProps, resetColor] = useInput("#000000")
  const { addColor } = UseColors()

  useEffect(() => {
    alert(`title: ${titleProps.value} - ${colorProps.value}`)
  }, [])

  return (
    <form onSubmit={e => {
      e.preventDefault()
      addColor(titleProps.value, colorProps.value)
      resetTitle()
      resetColor()
    }}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  )
}