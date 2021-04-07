import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './i18n'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback={<div>Loding ~~~~</div>}>
        <App />
      </Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
