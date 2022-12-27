import React from 'react'
import PropTypes from 'prop-types'
import { useAuth } from 'hooks/index'
import {
  Navigate,
  useLocation
} from 'react-router-dom'

function RequireAuth ({ children }) {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.token) {
    return <Navigate to='/auth/login' state={{ from: location }} replace />
  }
  return children
}

RequireAuth.propTypes = {
  children: PropTypes.node
}

export default RequireAuth