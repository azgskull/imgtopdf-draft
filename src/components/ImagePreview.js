import { Draggable } from 'react-beautiful-dnd'

const ImagePreview = ({ img, index, format, orientation, removeHandler }) => {
  // for a4
  let pageWidth = 100
  let pageHeight = 140

  if (format === 'custom') {
    const ratio = img.height / img.width
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
    <Draggable draggableId={index + ''} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="relative flex-none shadow-xl m-5"
        >
          <div className="mb-2 flex justify-end">
            <div
              className="bg-gray-900 text-white text-sm px-2 rounded cursor-pointer"
              onClick={removeHandler}
            >
              X
            </div>
          </div>
          <img
            src={img.url}
            className=" bg-white object-contain "
            alt=""
            style={{
              width: page[0],
              height: page[1],
            }}
          />
        </div>
      )}
    </Draggable>
  )
}

export default ImagePreview
