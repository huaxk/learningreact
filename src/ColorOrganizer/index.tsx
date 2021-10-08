import { useState } from 'react'
import colorData from './colordata'
import ColorList from './ColorList'

const ColorOrganizer = () => {
  const [colors] = useState(colorData)
  return <ColorList colors={colors} />
}

export default ColorOrganizer