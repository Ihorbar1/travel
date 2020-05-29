import styled from 'styled-components';

const ButtonAdd = styled.button`
   display: ${ props => props.isSelected ? 'none' : 'block'};
`

const ButtonDel = styled.button`
   display: ${ props => props.isSelected ? 'block' : 'none'};
`

const ButtonDelTour = styled.button`
   display: ${ props => props.mainPage ? 'none' : 'block'};
`

export { ButtonAdd, ButtonDel, ButtonDelTour };