import { useCallback, useContext } from 'react'
import context from './context'

/**
 * @func useFileHandler
 * @returns {function} create
 */
const useFileHandler = () => {
  const { addImage } = useContext(context)

  /**
   * fileChangeHandler callback for onchange event
   * load all files, and trigger updateImage context for each image loaded
   */
  const fileChangeHandler = useCallback(
    (e) => {
      // loop through fileList
      for (let file of e.target.files) {
        // creating an URL from file
        const url = URL.createObjectURL(file)

        // creating a shadow image to load it and get image width and height
        const image = document.createElement('img')
        image.src = url
        image.onload = (e) => {
          // once loaded we set the object defining the image
          const objectImage = {
            url,
            width: image.width,
            height: image.height,
            rotation: 0,
            key: url,
          }

          // callback the handler of image loaded
          addImage(objectImage)
        }
      }

      // clear input
      e.target.value = ''
    },
    [addImage]
  )

  // revokeFileUrl
  // revoke the url created from the file
  const revokeFileUrl = useCallback((url) => {
    URL.revokeObjectURL(url)
  }, [])

  return {
    revokeFileUrl,
    fileHandler: {
      onChange: fileChangeHandler,
    },
  }
}

export default useFileHandler
