import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault(); //when submitting the form to prevent a browser reload/refresh
        navigate(`/searched/${input}`);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <FaSearch />
            <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input}
            />
        </FormStyle>
    );
};

const FormStyle = styled.form`
    margin: 4rem 10%;
    position: relative;
    width: 100%;

    input {
        font-size: 1.2rem;

        width: 80%;
        color: #ffffff;
        background: linear-gradient(35deg, #494949, #313131);
        padding: 1rem 3rem;
        border: none;
        border-radius: 2rem;
        outline: none;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: #ffffff;
    }
`;

export default Search;
