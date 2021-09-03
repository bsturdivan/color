import React from 'react'
import { createUseStyles } from 'react-jss'

const DEACTIVE = '#E5E1E6'
const ACTIVE = '#F2C6CF'

const useStyles = createUseStyles({
  button: {
    border: 'none',
    cursor: 'pointer',
    background: 'none',
    padding: 0,
    margin: 0,
    '&:hover $camera': {
      fill: ACTIVE,
    },
  },
  camera: {
    transition: 'fill',
    transitionDuration: 400,
    transitionTimingFunction: 'ease-out',
    fill: DEACTIVE,
  },
})

function Camera({ onClick }) {
  const classes = useStyles()

  return (
    <button onClick={onClick} type="button" className={classes.button}>
      <svg
        width="54.3"
        height="40"
        viewBox="0 0 76 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.9311 44.3178C44.4474 44.3178 49.7299 39.0353 49.7299 32.519C49.7299 26.0028 44.4474 20.7203 37.9311 20.7203C31.4149 20.7203 26.1324 26.0028 26.1324 32.519C26.1324 39.0353 31.4149 44.3178 37.9311 44.3178Z"
          className={classes.camera}
        />
        <path
          d="M72.6275 9.2549H53.1322L52.549 4.70588C52.549 2.10698 50.442 0 47.8431 0H27.7647C25.1658 0 23.0588 2.10698 23.0588 4.70588L22.4756 9.2549H3.13726C1.40455 9.2549 0 10.581 0 12.3137V52.7843C0 54.517 1.40455 56 3.13726 56H72.6275C74.3602 56 75.7647 54.517 75.7647 52.7843V12.3137C75.7647 10.581 74.3602 9.2549 72.6275 9.2549ZM37.8973 51.8529C27.2419 51.8529 18.6041 43.2151 18.6041 32.5598C18.6041 21.9045 27.2419 13.2667 37.8973 13.2667C48.5526 13.2667 57.1904 21.9045 57.1904 32.5598C57.1904 43.2149 48.5526 51.8529 37.8973 51.8529ZM72.1569 17.5686H55.6863V12.7059H72.1569V17.5686Z"
          className={classes.camera}
        />
      </svg>
    </button>
  )
}

export default Camera
