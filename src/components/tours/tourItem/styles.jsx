import styled from 'styled-components';

const ButtonWrap = styled.div`
   top: ${ props => props.hamburgerActive ? '50px' : '-9999px'};
   border-radius: 10px 0px 0px 10px;
`

const ButtonAdd = styled.button`
   display: ${ props => props.isSelected ? 'none' : 'block'};
   border-radius: 0px 0px 0px 10px;
   border: none;
`

const ButtonDel = styled.button`
   display: ${ props => props.isSelected ? 'block' : 'none'};
   border-radius: ${ props => props.mainPage ? '10px 0px 0px 10px' : '0px 0px 0px 10px'};
   border: none;
`

const ButtonDelTour = styled.button`
   display: ${ props => props.mainPage ? 'none' : 'block'};
   border-radius: 10px 0px 0px 0px;
   border: none;
   border-bottom: 1px solid black;
`

export { ButtonWrap, ButtonAdd, ButtonDel, ButtonDelTour };