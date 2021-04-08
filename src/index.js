import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import thunk from 'redux-thunk'
import App from './App'
import reportWebVitals from './reportWebVitals'
import AllReducers from './redux/reducers/AllReducers'
import './i18n'

const store = createStore(AllReducers, applyMiddleware(thunk))

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
