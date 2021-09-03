import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { colors } from '../../styles/colors'

const useStyles = createUseStyles({
  container: (op) => ({
    transition: 'opacity',
    transitionDuration: 400,
    transitionTimingFunction: 'ease-out',
    opacity: op ? 1 : 0,
    boxShadow: `inset 0 0 50px 25px ${colors.pink}`,
    backgroundImage: 'url(/camera.svg)',
    backgroundSize: '12%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  }),
})

// onImageDrop
function Dropzone({ children, setFileInput, className }) {
  const [entered, setEntered] = useState(false)
  // const [dropped, setDropped] = useState(false)

  const preventDocumentDrag = () => {
    setEntered(true)
  }

  const onDragOver = (event) => {
    event.preventDefault()
    event.stopPropagation()

    setEntered(true)
  }

  const onDragLeave = () => {
    setEntered(false)
  }

  const onDrop = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const fileList = event.dataTransfer
      ? event.dataTransfer.files
      : event.target.files
    const files = Array.from(fileList)

    if (files.length !== 0) {
      setEntered(false)
      // setDropped(true)

      // onImageDrop(files)
    }

    // setEntered(false)
    // setDropped(true)

    // onImageDrop(files)
  }

  useEffect(() => {
    document.addEventListener('dragenter', preventDocumentDrag)
    document.addEventListener('dragover', preventDocumentDrag)
    document.addEventListener('drop', preventDocumentDrag)
  }, [entered])

  const classes = useStyles(entered)

  return (
    <div className={className}>
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={classes.container}
      />
      {children}
      <input
        type="file"
        style={{ display: 'none' }}
        multiple
        onChange={onDrop}
        ref={(input) => setFileInput(input)}
      />
    </div>
  )
}

export default Dropzone
