import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
    const [activeTab, setActiveTab] = useState("instructions");
    const [details, setDetails] = useState({});
    let params = useParams();

    const fetchDetails = async (id) => {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );

        const detailsData = await response.json();
        setDetails(detailsData);
    };

    useEffect(() => {
        fetchDetails(params.name);
    }, []);

    return (
        <DetailWrapper>
            <div>
                <h1>{details.title}</h1>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button
                    className={activeTab === "instructions" ? "active" : ""}
                    onClick={() => setActiveTab("instructions")}
                >
                    Instructions
                </Button>
                <Button
                    className={activeTab === "ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients
                </Button>

                {activeTab === "instructions" && (
                    <div>
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: details.summary,
                            }}
                        ></h2>
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: details.instructions,
                            }}
                        ></h2>
                    </div>
                )}

                {activeTab === "ingredients" && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}> {ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    );
};

const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 2rem;
    display: flex;

    .active {
        color: #ffffff;
        background: linear-gradient(35deg, #494949, #313131);
    }

    h1,
    h2 {
        margin-top: 0;
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
    }
    ul {
        margin-top: 2rem;
    }

    div > img {
        margin: 0;
        height: 12rem;
    }
`;

const Button = styled.button`
    display: inline-block;
    font-weight: 600;
    color: #313131;
    background-color: #ffffff;
    height: 3rem;
    padding: 0.5rem 1.5rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border: 2px solid black;
`;

const Info = styled.div`
    margin-left: 7rem;
    width: 30rem;
`;

export default Recipe;
