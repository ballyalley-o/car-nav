import classNames from 'classnames'

// components---------------------------------------------

// @root - Container
export const StyledContainer = classNames('container')

// @root - Branding
export const StyledLogoDivContainer = classNames(
  'container is-flex-direction-column is-align-items-center'
)

// @root - Branding
export const StyledSpanLogo = classNames(
  'icon is-large has-text-primary is-size-1 is-inline-block'
)
// @root - Branding
export const StyledSpanText = classNames('is-inline-block')

// @root - Branding
export const StyledBrandText = classNames(
  'title is-1 has-text-primary has-text-centered'
)

// pages--------------------------------------------------

// @root - CarForm
export const StyledButton = classNames('button', 'is-primary button is-link')
export const StyledAddCarLabel = classNames('subtitle is-3')
export const StyledCarFormDiv = classNames('car-form panel')
export const StyledInputDiv = classNames('input is-expanded')
export const StyledFieldGroup = classNames('field-group')
export const StyledField = classNames('field')

// @root - CarList
export const StyledDangerButton = classNames('button is-danger')

// @options -----------------------------------------------
export const toastOptions = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  newestOnTop: false,
}
