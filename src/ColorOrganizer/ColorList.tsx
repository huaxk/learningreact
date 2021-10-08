import Color from "./Color"
import {ColorDataType} from './colordata'

interface props {
  colors?: ColorDataType[]
  onRemoveColor?: (id: string) => void
  onRateColor?: (id: string, rating: number) => void
}

export default function ColorList({
  colors = [],
  onRemoveColor = id => {},
  onRateColor = (id,  rating) => {}
}: props) {
  return (
    <>
      {colors.map(color => (
        <Color
          key={color.id}
          {...color}
          onRemove = {onRemoveColor}
          onRate = {onRateColor}
        />
      ))}
    </>
  )
}
