import useFileHandler from '../utilities/useFileHandler'

const UploadArea = () => {
  const { fileHandler } = useFileHandler()

  return (
    <div className="relative flex flex-wrap w-full p-10 bg-gray-100 items-start">
      <input
        multiple
        accept="image/*"
        type="file"
        {...fileHandler}
        className="absolute w-full h-full opacity-0 top-0 left-0"
      />
    </div>
  )
}

export default UploadArea
