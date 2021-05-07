import { useCallback, useState } from 'react'

const useDragOver = () => {
  const [dragOver, setDragOver] = useState(false)

  const over = useCallback((e) => {
    setDragOver(true)
  }, [])

  const end = useCallback((e) => {
    setDragOver(false)
  }, [])

  return {
    dragOver,
    onDragEnter: over,
    onDragLeave: end,
    onDrop: end,
  }
}

export default useDragOver
