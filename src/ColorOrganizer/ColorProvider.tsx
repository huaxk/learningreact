import { createContext, useContext, useState } from "react"
import { v4 } from "uuid";
import colorData, { ColorDataType } from "./colordata";

type ColorContextType = {
  colors: ColorDataType[]
  addColor: (title: string, color: string) => void
  rateColor: (id: string, rating: number) => void
  removeColor: (id: string) => void
}

const ColorContext = createContext<ColorContextType>(undefined as any)

export const UseColors = () => useContext(ColorContext)

export default function ColorProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [colors, setColors] = useState(colorData)

  const addColor = (title: string, color: string) =>
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color
      }
    ])

  const rateColor = (id: string, rating: number) =>
    setColors(
      colors.map(color => (color.id === id ? { ...color, rating } : color))
    )

  const removeColor = (id: string) =>
    setColors(colors.filter(color => color.id !== id))

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      { children }
    </ColorContext.Provider>
  )
}


