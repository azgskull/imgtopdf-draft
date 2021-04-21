import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'

const ImageListing = SortableContainer(({ children }) => {
  return (
    <div
      className="relative grid items-start"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr)',
        gap: 20,
        padding: 20,
      }}
    >
      {children}
    </div>
  )
})

export default ImageListing
