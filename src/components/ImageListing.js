import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const ImageListing = ({ children, dragEndHandler }) => {
  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Droppable droppableId="imageListing" type="a" direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="relative flex  items-start overflow-auto mx-5"
          >
            {children} {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ImageListing
