import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { getStorage } from 'utils/storage'

export const AuthContext = createContext({
  token: null
})

function AuthProvider ({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(JSON.parse(getStorage('')) || null)

  const value = { token }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node
}

export default AuthProvider