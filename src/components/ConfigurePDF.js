import { useContext } from 'react'
import { PAGE_FORMAT, PAGE_ORIENTATION } from '../utilities/constants'
import context from '../utilities/context'
import usePDF from '../utilities/usePDF'

const ConfigurePDF = () => {
  const {
    images,
    format,
    orientation,
    clearImages,
    updateFormat,
    updateOrientation,
  } = useContext(context)

  const { create } = usePDF()

  return (
    <div className="flex justify-center">
      <select onChange={(e) => updateFormat(e.target.value)} value={format}>
        <option value={PAGE_FORMAT.CUSTOM}>Fit Image size</option>
        <option value={PAGE_FORMAT.A4}>A4</option>
      </select>
      {format === PAGE_FORMAT.A4 && (
        <select
          onChange={(e) => updateOrientation(e.target.value)}
          value={orientation}
        >
          <option value={PAGE_ORIENTATION.PORTRAIT}>Portrait</option>
          <option value={PAGE_ORIENTATION.LANDSCAPE}>Landscape</option>
        </select>
      )}

      <button
        className="outline-none mx-2 my-5 shadow-xl bg-gray-700 w-40 h-10 flex justify-center items-center text-xl text-white rounded"
        onClick={clearImages}
      >
        Clear All
      </button>
      <button
        disabled={!images.length}
        className="outline-none mx-2 my-5 shadow-xl bg-red-700 w-40 h-10 flex justify-center items-center text-xl text-white rounded"
        onClick={create}
      >
        Create PDF
      </button>
    </div>
  )
}

export default ConfigurePDF
