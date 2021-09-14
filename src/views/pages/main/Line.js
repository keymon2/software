import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Cell from './Cell'
const StyledLine = styled.body`
    width: 100%;
    height: 12%;
    left: 0px;
    background: #FCDDEC;
`;
const StyledText = styled.text`
    position: relative;
    padding: 4.4%;
`;
export default class Line extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
            return(
                <StyledLine>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                </StyledLine>
            )
    }
}
