import React, { Component } from 'react'
import styled from 'styled-components'


const StyledCell = styled.button`
    width: 14.24%;
    height: 80%;
    background: #FCDDEC;
`;

export default class Cell extends Component {
    constructor(props){
        super(props)
    }
    render() {
        
            return(
                <StyledCell>{this.props.name} </StyledCell>
            )
        }
    
}
