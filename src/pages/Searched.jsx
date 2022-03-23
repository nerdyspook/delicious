import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const params = useParams();

    const getSearched = async (searchTerm) => {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`
        );

        const recipes = await response.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <Grid>
            {searchedRecipes.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={`/recipe/${item.id}`}>
                            <img src={item.image} alt={item.title} />
                            <h2>{item.title}</h2>
                        </Link>
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

export default Searched;
