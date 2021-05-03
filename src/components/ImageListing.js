import { useContext } from 'react'
import context from '../utilities/context'
import ImagePreview from './ImagePreview'

export const ImageListing = () => {
  const { images } = useContext(context)

  return (
    <div
      className="relative grid items-start"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr)',
        gap: 20,
        padding: 20,
      }}
    >
      {images.map((image, index) => (
        <ImagePreview
          key={image.url}
          image={image}
          index={index}
          removeHandler={() => {}}
        />
      ))}
    </div>
  )
}
