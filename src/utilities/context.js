import { createContext } from 'react'

const context = createContext({
  images: [],
  format: '',
  orientation: '',

  clearImages: () => {},
  addImage: () => {},
  removeImage: () => {},
  updateImagesOrder: () => {},
  updateFormat: () => {},
  updateOrientation: () => {},
})

export default context
