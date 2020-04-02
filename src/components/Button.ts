import styled, { css } from 'styled-components'
import Button, { ButtonProps } from '@material-ui/core/Button'

type StyledButtonProps = ButtonProps & WithTheme

const StyledButton = styled(Button)<StyledButtonProps>(({ theme }) => {
  return css``
})

export default StyledButton
