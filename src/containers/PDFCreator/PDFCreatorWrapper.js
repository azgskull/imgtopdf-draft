import PDFCreator from './PDFCreator'
import Provider from './Provider'

const PDFCreatorWrapper = () => {
  return (
    <Provider>
      <PDFCreator />
    </Provider>
  )
}

export default PDFCreatorWrapper
