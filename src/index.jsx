import React from 'react'
import ReactDOM from 'react-dom'
import jss from 'jss'
import preset from 'jss-preset-default'
import { JssProvider, SheetsRegistry } from 'react-jss'
import { reset } from 'jss-reset'
import App from './App'
import './styles/globals.css'

const setupJss = () => {
  jss.setup(preset())

  const sheetsRegistry = new SheetsRegistry()
  const globalStyleSheet = jss.createStyleSheet(reset).attach()

  sheetsRegistry.add(globalStyleSheet)

  return sheetsRegistry
}

const sheets = setupJss()

ReactDOM.render(
  <React.StrictMode>
    <JssProvider registry={sheets}>
      <App />
    </JssProvider>
  </React.StrictMode>,
  document.getElementById('color'),
)
