import ConfigurePDF from '../../components/ConfigurePDF'
import { ImageListing } from '../../components/ImageListing'
import UploadArea from '../../components/UploadArea'

const PDFCreator = () => {
  return (
    <div className="relative flex flex-col h-screen w-screen">
      <UploadArea />
      <ImageListing />
      <ConfigurePDF />
    </div>
  )
}

export default PDFCreator
