import React from 'react'
import { PiCarProfileDuotone } from 'react-icons/pi'
import { TITLES } from '../../constants/form'
import {
  StyledBrandText,
  StyledLogoDivContainer,
  StyledSpanText,
  StyledSpanLogo,
} from '../../assets/styles/car-form-styles'

const Branding = () => {
  return (
    <div className={StyledLogoDivContainer}>
      <span className={StyledSpanLogo}>
        <PiCarProfileDuotone />
      </span>
      <span className={StyledSpanText}>
        <h1 className={StyledBrandText}>&nbsp;{TITLES.BRAND}</h1>
      </span>
    </div>
  )
}

export default Branding
