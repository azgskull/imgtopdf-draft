import ConfigurePDF from '../../components/ConfigurePDF'
import { ImageListing } from '../../components/ImageListing'
import UploadArea from '../../components/UploadArea'

const PDFCreator = () => {
  return (
    <>
      <UploadArea />
      <ImageListing />
      <ConfigurePDF />
    </>
  )
}

export default PDFCreator
