import React from 'react'
import { createUseStyles } from 'react-jss'
import { colors } from '../../styles/colors'
import '../../styles/keyframes.css'

const useStyles = createUseStyles({
  loading: {
    animation: 'loadingSpinner 1000ms infinite linear',
    transform: 'translateZ(0)',
    borderRadius: '50%',
    width: 36,
    height: 36,
    margin: '6px auto',
    position: 'relative',
    border: '1px solid transparent',
    borderLeft: `1px solid ${colors.lavender}`,
  },
})

export default function Loading({ styles }) {
  const classes = useStyles()
  return <div stylee={styles} className={classes.loading} />
}
