import Color from "./Color"
import {ColorDataType} from './colordata'

interface props {
  colors: ColorDataType[];
}

const ColorList = ({ colors = [] }: props) => {
  return (
    <>
      {colors.map(color => <Color key={color.id} {...color} />)}
    </>
  )
}

export default ColorList