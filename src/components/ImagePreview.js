const ImagePreview = ({ img, format, orientation, removeHandler }) => {
  // for a4
  let pageWidth = 100
  let pageHeight = 140

  if (format === 'custom') {
    const ratio = img.height / img.width
    pageHeight = pageWidth * ratio
  }

  const page =
    orientation === 'l' && format === 'a4'
      ? [pageHeight, pageWidth]
      : [pageWidth, pageHeight]

  return (
    <div className="relative flex-none shadow-xl m-5">
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
  )
}

export default ImagePreview
