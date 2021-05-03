import { useCallback, useState } from 'react'
import { PAGE_FORMAT, PAGE_ORIENTATION } from '../../utilities/constants'
import context from '../../utilities/context'
import useFileHandler from '../../utilities/useFileHandler'

const Provider = ({ children }) => {
  const [images, setImages] = useState([])
  const [format, setFormat] = useState(PAGE_FORMAT.CUSTOM)
  const [orientation, setOrientation] = useState(PAGE_ORIENTATION.PORTRAIT)

  const { revokeFileUrl } = useFileHandler()

  // CleaImages Action
  const clearImages = useCallback(() => {
    setImages([])
  }, [])

  // AddImage Action
  const addImage = useCallback((image) => {
    setImages((state) => [...state, image])
  }, [])

  // removeImage Action
  // remove image from Images and revokeUrl
  const removeImage = useCallback(
    (index) => {
      setImages((state) => {
        const newState = [...state]
        revokeFileUrl(state[index].url)
        newState.splice(index, 1)
        return newState
      })
    },
    [revokeFileUrl]
  )

  // update format
  const updateFormat = useCallback((newFormat) => {
    setFormat(newFormat)
  }, [])

  // update orientation
  const updateOrientation = useCallback((newOrientation) => {
    setOrientation(newOrientation)
  }, [])

  return (
    <context.Provider
      value={{
        images,
        format,
        orientation,
        clearImages,
        addImage,
        removeImage,
        updateFormat,
        updateOrientation,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default Provider
