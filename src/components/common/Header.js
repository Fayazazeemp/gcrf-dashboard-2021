import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../assets/img/headerLogo.png'
import { facilitatorInstituionName, facilitatorLastUpdated } from '../../appConfig'


function Header(props) {
    return (
        <StyledHeader>
            <img src={HeaderLogo} alt=""/>
            <h1>Student Dashboard</h1>
            <div className="header-info-container">
                <p className="facilitator-last-updated">Last Updated: {facilitatorLastUpdated}</p>
                <p className="facilitator-institution-name">{facilitatorInstituionName}</p>
            </div>
        </StyledHeader>
    );
}

export default Header;

let StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    h1{
        text-transform: uppercase;
        font-size: 25px;
        color: #EA4335;
    }
    img{
        max-width: 300px;
    }
    .header-info-container{
        display: flex;
        align-items: center;
        background-color: white;
        box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
        border-radius: 60px;
        padding: 10px 20px;
        .facilitator-last-updated{
            box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.29);
            border-radius: 39px;
            background: #34A853;
            font-size: 15px;
            padding: 5px 10px;
            color: white;
            margin: 0;
            margin-right: 10px;
            white-space:  nowrap;
        }
        .facilitator-institution-name{
            font-weight: 600;
            margin: 0;
            padding: 0;
        }
    }
`