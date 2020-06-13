import styled from 'styled-components';

const TourInput = styled.input`
   background-color: ${ props => props.checkValidation ? (props.isValid ? '#62856d' : '#917075') : '#dadada'};
`

export { TourInput };