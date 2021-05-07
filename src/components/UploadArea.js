import { useContext } from 'react'
import context from '../utilities/context'
import useDragOver from '../utilities/useDragOver'
import useFileHandler from '../utilities/useFileHandler'

const UploadArea = () => {
  const { dragOver, ...dragHandler } = useDragOver()
  const { fileHandler } = useFileHandler()
  const { images } = useContext(context)
  let classes = ''
  let classesDragDrop = [
    'flex justify-center items-center',
    'h-full w-full  py-4',
    'transition duration-250',
  ]

  if (!images.length) {
    classes = 'relative h-full'
  } else {
    classes = 'flex-none h-52 sticky top-0'
  }

  if (dragOver) {
    classesDragDrop.push('bg-gray-100')
  }

  return (
    <div className={`flex w-full bg-white z-10 ${classes}`} {...dragHandler}>
      <div className={classesDragDrop.join(' ')}>
        <div className="space-y-1 text-center text-gray-500">
          <svg
            className="mx-auto h-24 w-24"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-xl">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer font-medium"
            >
              <span>Upload a file</span>
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-md">PNG, JPG, GIF</p>
        </div>
        <input
          multiple
          accept="image/*"
          type="file"
          {...fileHandler}
          className="absolute w-full h-full opacity-0 top-0 left-0 cursor-pointer "
        />
      </div>
    </div>
  )
}

export default UploadArea
