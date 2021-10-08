import React from 'react'
import {FaStar} from 'react-icons/fa'

const fn: React.MouseEventHandler = (e) => e

const Star = ({selected = false, onSelect = fn}) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
)

export default Star