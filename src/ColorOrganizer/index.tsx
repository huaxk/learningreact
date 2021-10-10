import { createContext, useState } from 'react'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import ColorProvider from './ColorProvider';

export default function ColorOrganizer() {
  return (
    <ColorProvider>
      <AddColorForm />
      <ColorList />    
    </ColorProvider>
  )
} 