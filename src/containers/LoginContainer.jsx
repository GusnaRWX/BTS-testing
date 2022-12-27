import PropTypes from 'prop-types'
import React, { Component } from 'react'
import LoginComponent from '../components/LoginComponent'
import { connect } from 'react-redux'
import { mapActions, mapStateToProps } from '../store'

export default connect(
  mapStateToProps('authReducer'),
  mapActions('authentication', 'register')
)(class LoginContainer extends Component {
  static propTypes = {
    authentication: PropTypes.func,
    register: PropTypes.func,
    authReducer: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <LoginComponent
        {...this.state}
        {...this.props}
      />
    )
  }
}
)
