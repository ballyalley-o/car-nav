import { REGEX } from '../../constants/form'

export const formatPrice = (price) => {
  return price.toString().replace(REGEX.COMMA_PRICE, ',')
}

export const removeComma = (number) => {
  return number.toString().replace(REGEX.COMMA_PRICE, '')
}

//  totalCost.toLocaleString('en-US')
