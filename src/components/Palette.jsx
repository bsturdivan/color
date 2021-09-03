import React from 'react'
import { createUseStyles } from 'react-jss'
import Swatch from './Swatch'

const width = 16.18
const styles = createUseStyles({
  aside: {
    width: `${width}%`,
    height: 'calc(100vh - 93px)',
    position: 'relative',
  },
})

function Palette({ colors }) {
  const { aside } = styles()
  const height = 100 / colors.length
  const minWidth = (height / width) * 100

  if (Object.values(colors).length === 0) {
    return null
  }

  return (
    <aside className={aside} style={{ minWidth }}>
      {Object.values(colors).map((color) => (
        <Swatch color={color} height={height} key={color.getHex()} />
      ))}
    </aside>
  )
}

export default Palette
