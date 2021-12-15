import React from 'react'
import styled, { css } from "styled-components"

const StyledContainer = styled.div`
display: inline-block;
max-width: 500px;
color: red;
border-radius: 30px;
background-color: blue;
text-align: center;
box-sizing: border-box;
margin: 10px;
`

export default function Card(props) {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}
