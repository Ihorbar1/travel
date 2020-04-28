import styled from 'styled-components';

export const Test = styled.div`
   width: 500px;
   height: 450px;
   background-color: ${({ testlet }) => testlet ? 'red' : 'black'};
`