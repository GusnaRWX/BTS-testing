import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import actions from './actions'
import reducers from './reducers'
import rootSaga from './sagas'

// * Create Sagas Middleware
const sagasMiddleware = createSagaMiddleware()
/**
 *
 * Snippet to call State Redux
 *
 * @param  {...any} keys
 * @returns
 */
export function mapStateToProps (...keys) {
  return (state) => keys.reduce((res, key) => {
    res[key] = state[key]
    return res
  }, {})
}

/**
 *
 * Snippet to call state redux
 *
 * @param  {...any} keys
 * @returns
 */
export function mapActions (...keys) {
  return (dispatch) => keys.reduce((res, key) => {
    res[key] = (...args) => dispatch(actions[key](...args))
    return res
  }, {})
}

/**
 *
 * Bind Middleware
 *
 * @param  {...any} middleware
 * @returns
 */
const bindMiddleware = (...middleware) => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(...middleware)
  }

  return applyMiddleware(...middleware)
}

const reducer = combineReducers({ ...reducers })

const store = createStore(
  reducer,
  bindMiddleware(sagasMiddleware)
)

sagasMiddleware.run(rootSaga)

export default store