import { useCallback, useContext } from 'react'
import context from '../utilities/context'

const ImagePreview = ({ image, index }) => {
  const { format, orientation, removeImage } = useContext(context)

  const removeHandler = useCallback(() => {
    removeImage(index)
  }, [index, removeImage])

  // TODO : update this

  // for a4
  let pageWidth = 100
  let pageHeight = 140

  if (format === 'custom') {
    const ratio = image.height / image.width
    pageHeight = pageWidth * ratio

    if (pageHeight > 140) {
      const diff = ((pageHeight - 140) * 100) / pageHeight
      pageHeight = 140
      pageWidth -= (pageWidth * diff) / 100
    }
  }

  const page =
    orientation === 'l' && format === 'a4'
      ? [pageHeight, pageWidth]
      : [pageWidth, pageHeight]

  return (
    <div
      className="relative flex flex-col items-center flex-none bg-gray-100 border shadow-xl w-full"
      style={{ height: 180 }}
    >
      <div className="flex items-center w-full bg-gray-900 mb-2">
        <div className="text-white text-xs px-2">Page: {index + 1}</div>

        <div
          className="text-white text-sm px-2 cursor-pointer ml-auto"
          onClick={removeHandler}
        >
          X
        </div>
      </div>
      <img
        src={image.url}
        className="bg-white object-contain "
        alt=""
        style={{
          width: page[0],
          height: page[1],
        }}
      />
    </div>
  )
}

export default ImagePreview
