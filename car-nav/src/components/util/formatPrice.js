import { REGEX } from '../../constants/form'

export const formatPrice = (price) => {
  return price.toString().replace(REGEX.COMMA_PRICE, ',')
}
