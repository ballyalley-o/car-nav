import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer } from '../../assets/styles/car-form-styles'

const Container = ({ children }) => {
  return <div className={StyledContainer}>{children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
