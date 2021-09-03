import React, { useState } from 'react'
import { BreakpointProvider } from 'react-socks'
import Header from './components/Header'
import Content from './components/Content'
// import Dropzone from '../utils/components/Dropzone'

function App() {
  const [fileInput, setFileInput] = useState({})

  return (
    <BreakpointProvider>
      <Header fileInput={fileInput} />
      <Content setFileInput={setFileInput} />
    </BreakpointProvider>
  )
}

export default App
