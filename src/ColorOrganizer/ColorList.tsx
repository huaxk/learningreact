import { useContext } from "react"
import Color from "./Color"
import {ColorDataType} from './colordata'
import { UseColors } from "./ColorProvider"

export default function ColorList() {
  const {colors} = UseColors()
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>
  return (
    <>
      {colors.map(color => (
        <Color key={color.id} {...color}
        />
      ))}
    </>
  )
}
