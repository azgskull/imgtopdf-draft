import jsPDF from 'jspdf'
import { useContext } from 'react'
import { PDF_PAGE_SIZE } from './constants'
import context from './context'

/**
 * @func usePDF
 * @desc hook that return a create function to create pdf using passed config
 * @returns {function} create
 */
const usePDF = () => {
  const { images, orientation } = useContext(context)

  /**
   * create PDF from array of image and configuration
   */
  const create = () => {
    // Initialize the pdp document
    const doc = new jsPDF({
      unit: 'px',
    })

    const pageSize = PDF_PAGE_SIZE.DPI_72

    // delete the first empty page created automatically
    doc.deletePage(1)

    // loop through images
    // and for each one add a page and place image inside it using (height width orientation etc)
    images.forEach(({ url, width, height, rotation }) => {
      doc.addPage([pageSize.width, pageSize.height], orientation)

      doc.addImage(url, 'JPEG', 0, 0, width, height, null, null, rotation)
    })

    // saving the doc
    doc.save(`imageToPDF_${+new Date()}`)
  }

  return {
    create,
  }
}

export default usePDF
