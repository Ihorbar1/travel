import styled from 'styled-components';

const TourInput = styled.input`
   border-bottom: 1px solid ${ props => props.checkValidation ? (props.isValid ? 'blue' : 'red') : 'green'};
`

export { TourInput };