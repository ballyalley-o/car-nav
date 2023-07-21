import React from 'react'
import PropTypes from 'prop-types'
// styles
import {
  StyledInputDiv,
  StyledFieldGroup,
  StyledField,
} from '../../assets/styles/car-form-styles'

const FormField = ({ value, label, onChange }) => {
  return (
    <div className={StyledFieldGroup}>
      <div className={StyledField}>
        <label htmlFor='' className='label'>
          {label}
        </label>
        <input
          type='text'
          className={StyledInputDiv}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

FormField.propTypes = {
  value: PropTypes.number || PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}

export default FormField
