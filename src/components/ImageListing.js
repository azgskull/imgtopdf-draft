import { useCallback, useContext } from 'react'
import context from '../utilities/context'
import ImagePreview from './ImagePreview'
import { ReactSortable } from 'react-sortablejs'

export const ImageListing = () => {
  const { images, updateImagesOrder } = useContext(context)
  const setList = useCallback(
    (newImagesOrder) => {
      updateImagesOrder(newImagesOrder)
    },
    [updateImagesOrder]
  )

  if (!images.length) {
    return null
  }

  return (
    <div className="relative flex-1 overflow-auto bg-gray-200 p-10">
      <ReactSortable
        className="relative grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 20,
        }}
        list={images}
        setList={setList}
        animation="150"
        ghostClass="opacity-0"
      >
        {images.map((image, index) => (
          <ImagePreview key={image.key} image={image} index={index} />
        ))}
      </ReactSortable>
    </div>
  )
}
