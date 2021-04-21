import { useState } from 'react'
import { jsPDF } from 'jspdf'
import ImagePreview from './ImagePreview'
import ImageListing from './ImageListing'

const UploadForm = ({ children }) => {
  const [imgs, setImgs] = useState([])
  const [format, setFormat] = useState('custom')
  const [orientation, setOrientation] = useState('portrait')

  const fileChangeHandler = (e) => {
    for (let file of e.target.files) {
      const url = URL.createObjectURL(file)
      const image = document.createElement('img')
      image.src = url
      image.onload = (e) => {
        const objectImage = {
          url,
          width: image.width,
          height: image.height,
        }

        setImgs((state) => [...state, objectImage])
      }
    }
  }

  const createPdf = () => {
    const doc = new jsPDF({
      unit: 'px',
    })

    doc.deletePage(1)

    imgs.forEach(({ url, width, height }) => {
      const page = format === 'a4' ? [595, 842] : [width, height]

      const pageOrientation =
        format === 'a4' ? orientation : page[0] > page[1] ? 'l' : 'p'

      doc.addPage(page, pageOrientation)

      const pageWidth =
        pageOrientation === 'l' && format === 'a4' ? page[1] : page[0]
      const pageHeight =
        pageOrientation === 'l' && format === 'a4' ? page[0] : page[1]

      if (width > pageWidth) {
        const diff = ((width - pageWidth) * 100) / width
        width = pageWidth
        height -= (diff * height) / 100
      }

      if (height > pageHeight) {
        const diff = ((height - pageHeight) * 100) / height
        height = pageHeight
        width -= (diff * width) / 100
      }

      const x = pageWidth * 0.5 - width * 0.5
      const y = pageHeight * 0.5 - height * 0.5

      doc.addImage(url, 'JPEG', x, y, width, height)
    })

    doc.save('two-by-four.pdf')
  }

  const removeHandler = (index) => {
    const url = imgs[index]
    URL.revokeObjectURL(url)
    const imgsList = [...imgs]
    imgsList.splice(index, 1)
    setImgs(imgsList)
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const images = [...imgs]
    const sourceItem = images[oldIndex]
    images.splice(oldIndex, 1)
    images.splice(newIndex, 0, sourceItem)
    setImgs(images)
  }

  return (
    <>
      <div className="relative flex flex-wrap w-full p-10 bg-gray-100 items-start">
        <input
          multiple
          accept="image/*"
          type="file"
          onChange={fileChangeHandler}
          className="absolute w-full h-full opacity-0 top-0 left-0"
        />
      </div>
      <div>
        <ImageListing onSortEnd={onSortEnd} axis="xy" helperClass="opacity-90">
          {imgs.map((image, index) => (
            <ImagePreview
              key={image.url}
              img={image}
              index={index}
              indexPage={index}
              removeHandler={() => removeHandler(index)}
              format={format}
              orientation={orientation}
            />
          ))}
        </ImageListing>
      </div>
      <div className="flex justify-center">
        <select onChange={(e) => setFormat(e.target.value)}>
          <option value="custom" selected>
            Fit Image size
          </option>
          <option value="a4">A4</option>
        </select>
        {format === 'a4' && (
          <select onChange={(e) => setOrientation(e.target.value)}>
            <option value="p" selected>
              Portrait
            </option>
            <option value="l">Landscape</option>
          </select>
        )}

        <button
          className="outline-none mx-2 my-5 shadow-xl bg-gray-700 w-40 h-10 flex justify-center items-center text-xl text-white rounded"
          onClick={() => setImgs([])}
        >
          Clear All
        </button>
        <button
          disabled={!imgs.length}
          className="outline-none mx-2 my-5 shadow-xl bg-red-700 w-40 h-10 flex justify-center items-center text-xl text-white rounded"
          onClick={() => createPdf()}
        >
          Create PDF
        </button>
      </div>
    </>
  )
}

export default UploadForm
