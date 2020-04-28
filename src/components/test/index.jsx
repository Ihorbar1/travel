import React from 'react';
import styled from 'styled-components';
import { Test } from './styles'

export default class extends React.Component {
   state = {
      yes: true
   }

   render() {
      return (
         <Test testlet={this.state.yes} />
      )
   }
}