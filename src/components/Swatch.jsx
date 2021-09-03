import React from 'react'
import { createUseStyles } from 'react-jss'
import { type } from '../styles/type'
import { colors } from '../styles/colors'

const styles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
  },
  div: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: '100%',
  },
  p: {
    fontFamily: type.regular,
    fontSize: 16,
    lineHeight: '1.24em',
    color: colors.lavender,
    margin: 0,
  },
})

function Swatch({ color, height }) {
  const backgroundColor = color.getHex()
  const rgb = color
    .getRgb()
    .map((c) => Math.round(c))
    .toString()
  const { container, div, p } = styles()

  return (
    <div
      className={container}
      style={{ backgroundColor, height: `${height}%` }}
    >
      <div className={div}>
        <p className={p}>{color.getHex().toUpperCase()}</p>
        <p className={p}>{rgb}</p>
      </div>
    </div>
  )
}

export default Swatch
