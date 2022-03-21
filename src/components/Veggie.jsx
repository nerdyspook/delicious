import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Veggie = () => {
    const getVeggie = async () => {
        const checkStorage = localStorage.getItem("veggie");

        if (checkStorage) {
            setVeggie(JSON.parse(checkStorage)); //parsing json string into javascript objects
        } else {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7&tags=vegetarian`
            );

            const data = await response.json();

            localStorage.setItem("veggie", JSON.stringify(data.recipes)); //converting array into json string
            setVeggie(data.recipes);
        }
    };

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    return (
        <Wrapper>
            <h2>Our Vegeterian Picks</h2>

            <Splide
                options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "5rem",
                }}
            >
                {veggie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                <Gradient />
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 4rem 0;
`;
const Card = styled.div`
    position: relative;

    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0px 0px 50px 120px rgba(0, 0, 0, 0.2) inset;

    img {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2rem;
    }
    p {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
        color: #ffffff;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }
`;

const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));

    &:hover {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    }
`;

export default Veggie;
