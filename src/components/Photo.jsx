import React from 'react'
import { createUseStyles } from 'react-jss'
import Loading from '../utils/components/Loading'
import Dropzone from '../utils/components/Dropzone'

function Photo({ url, loading, setFileInput }) {
  const styles = createUseStyles({
    image: (bg) => ({
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: 'calc(100vh - 93px)',
    }),
    dropzone: {
      width: '100%',
      height: 'calc(100vh - 93px)',
      position: 'relative',
    },
  })
  const classes = styles(url)

  if (loading) return <Loading />

  return (
    <Dropzone setFileInput={setFileInput} className={classes.dropzone}>
      <section className={classes.image} />
    </Dropzone>
  )
}

export default Photo
