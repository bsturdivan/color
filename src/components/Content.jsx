import React, { useLayoutEffect, useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Flickr from 'flickr-sdk'
import Vibrant from 'node-vibrant'
import { flickrKey } from '../utils/keys'
import Palette from './Palette'
import Photo from './Photo'

const styles = createUseStyles({
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flexStart',
  },
})

const flickr = new Flickr(flickrKey)
function Content({ setFileInput }) {
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState('')
  const [swatches, setSwatches] = useState([])

  useLayoutEffect(() => {
    async function loadImage() {
      try {
        setLoading(true)
        const flikrMeta = await flickr.photos.search({
          tags: 'colors',
          content_type: 1,
          extras: 'url_h',
        })

        const imageMeta = flikrMeta.body.photos
        const randomIndex = Math.floor(Math.random() * imageMeta.perpage + 1)
        const image = imageMeta.photo[randomIndex].url_h
        setUrl(image)
      } catch (err) {
        setUrl('')
      } finally {
        setLoading(false)
      }
    }

    loadImage()
  }, [])

  useEffect(() => {
    if (url) {
      Vibrant.from(url).getPalette((err, palette) =>
        setSwatches(Object.values(palette).slice(0, 5)),
      )
    }
  }, [url])

  const { section } = styles()
  return (
    <section className={section}>
      <Palette colors={swatches} loading={loading} />
      <Photo url={url} loading={loading} setFileInput={setFileInput} />
    </section>
  )
}

export default Content
