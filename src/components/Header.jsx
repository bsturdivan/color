import React from 'react'
import { createUseStyles } from 'react-jss'
import Logo from '../assets/Logo'
import Camera from '../assets/Camera'
import { colors } from '../styles/colors'
import { openFileManager } from '../utils/functions/fileUpload'

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 15,
    borderBottom: `8px solid ${colors.lavender}`,
  },
  h1: {
    display: 'block',
    width: 177.5,
  },
  camera: {
    width: 54.3,
  },
})

function Header({ fileInput }) {
  const classes = useStyles()
  const handleCameraClick = () => {
    openFileManager(fileInput)
  }

  return (
    <header className={classes.header}>
      <div>
        <h1 className={classes.h1}>
          <Logo />
        </h1>
      </div>

      <div className={classes.camera}>
        <Camera onClick={handleCameraClick} />
      </div>
    </header>
  )
}

export default Header
