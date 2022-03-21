import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

const Category = () => {
    return (
        <List>
            <StyledLink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h2>Itallian</h2>
            </StyledLink>

            <StyledLink to={"/cuisine/American"}>
                <FaHamburger />
                <h2>American</h2>
            </StyledLink>

            <StyledLink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h2>Thai</h2>
            </StyledLink>

            <StyledLink to={"/cuisine/Japanese"}>
                <GiChopsticks />
                <h2>Japanese</h2>
            </StyledLink>
        </List>
    );
};

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 6rem;
    width: 6rem;
    border-radius: 100%;
    margin: 0 2rem;
    background: linear-gradient(35deg, #494949, #313131);
    transform: scale(0.8);

    cursor: pointer;

    h2 {
        color: #ffffff;
        font-size: 0.8rem;
    }
    svg {
        color: #ffffff;
        font-size: 1.6rem;
        margin-bottom: 0.4rem;
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
    }
`;

export default Category;
