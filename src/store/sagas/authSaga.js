import { call, put, takeEvery } from '@redux-saga/core/effects'
import { setStorages } from '../../utils/storage'
import { AUTHENTICATION_REQUESTED, AUTHENTICATION_RESPONSE, REGISTER_REQUESTED, REGISTER_RESPONSE } from '../constants'
import { authentication, register } from './saga-actions/authActions'
import { delay } from './sagaUtils'

function* fetchAuthentication (action) {
  try {
    const res = yield call(authentication, action?.payload)

    if (res) {
      const payload = res?.data

      yield put({ type: AUTHENTICATION_RESPONSE })
      setStorages([{
        name: 'token', value: payload
      }])
      yield delay(3000)
      window.location.href = '/'
    }
  } catch (err) {
    yield put({ type: AUTHENTICATION_RESPONSE })
  }
}

function* fetchRegister (action) {
  try {
    const res = yield call(register, action?.payload)

    if (res) {
      const payload = res?.data

      yield put({
        type: REGISTER_RESPONSE, payload: {
          code: payload.statusCode,
          message: payload?.message
        }
      })
      yield delay(3000)
      window.location.href = '/auth/login'
    }
  } catch (err) {
    const res = err?.data
    yield put({
      type: REGISTER_RESPONSE, payload: {
        code: res.statusCode,
        message: res?.message
      }
    })
  }
}

function* authSaga () {
  yield takeEvery(AUTHENTICATION_REQUESTED, fetchAuthentication)
  yield takeEvery(REGISTER_REQUESTED, fetchRegister)
}

export default authSaga