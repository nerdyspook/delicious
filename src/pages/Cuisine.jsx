import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);

    let params = useParams();

    const getCuisine = async (type) => {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}`
        );

        const recipes = await response.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    return (
        <Grid>
            {cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                    </Card>
                );
            })}
        </Grid>
    );
};

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 0.8rem;
    }
    a {
        text-decoration: none;
    }
    h2 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine;
