import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Test from '@components/Test'
ReactDOM.render(
  <Test/>,
     document.getElementById('root') as HTMLElement
   )

declare var module: any
if (module.hot) {
  module.hot.accept()
}