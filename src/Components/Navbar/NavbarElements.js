import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {IoFastFoodOutline } from "react-icons/io5"


export const Nav = styled.nav`
background: transparent;
// background: #FFB803;
height: 80px;
display: flex;
justify-content: center;
font-weight:700; 
`;
export const NavLink = styled(Link)`
    color: #fff; 
    font-size: 2rem;
    display: flex;
    align-items:center;
    text-decoration:none;
    cursor:pointer;

    @media screen and(max-width: 400px){
    position:absolute;
    top: 10px;
    left:25px;
    }
`;
export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: Pointer;
color:  #fff;
font-size: 1.1rem;



p{
    transform: translate(-120%, 60%);
    font-weight: bold;

}
`
export const Bars = styled(IoFastFoodOutline)`
font-size: 2.2rem;
transform: translate(-40%, -1%);
`

