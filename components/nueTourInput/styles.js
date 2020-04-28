import styled from 'styled-components';

export const TourInput = styled.input`
   border-bottom: 1px solid ${({ isValid, checkValidation }) => checkValidation ? (isValid ? 'red' : 'black') : 'green'}
`