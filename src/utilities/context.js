import { createContext } from 'react'

const context = createContext({
  images: [],
  format: '',
  orientation: '',

  clearImages: () => {},
  addImage: () => {},
  removeImage: () => {},
  updateFormat: () => {},
  updateOrientation: () => {},
})

export default context
