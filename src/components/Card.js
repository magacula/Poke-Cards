import React, { useState } from "react";
import styled from "styled-components";
import faceDownCard from "../assets/faceDownCard.png";
import card from "../assets/card.png";
import cardBackground from "../assets/cardBg.png";
import { useCountRenders } from "./useCountRender";

const FaceUpCardContainer = styled.div`
  position: relative;
  cursor: pointer;

  img {
    border: 0 solid #f3de47;
    border-radius: 0.7rem;
  }
`;

const CardName = styled.p`
  position: absolute;
  top: 0.75rem;
  padding-left: 2rem;

  width: 100%;
  height: 100%;
  text-transform: capitalize;
  line-height: 29px;
`;

const FaceDownCard = styled.img`
  cursor: pointer;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 2rem;
  padding: 0 2rem;
  width: 100%;
`;

const StatType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 0.8rem;
  }
`;

const Background = styled.img`
  display: flex;
  justify-content: center;
  mix-blend-mode: multiply;
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 2px 11px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
  position: absolute;
  height: 120px;
  bottom: 5.5rem;
  padding: 0 1.5rem;
  margin: 0;

  @media screen and (max-width: 750px) {
    height: 50px;
  }
`;

const PokemonImg = styled.img`
  height: 125px;
  position: absolute;
  top: 2rem;
  display: flex;
  z-index: 1;
  padding: 0 1.5rem;
`;

const Card = React.memo(({ cardType }) => {
  const [flipCard, setFlipCard] = useState(false);
  useCountRenders("Card");
  console.log("card rendered");

  const drawCard = () => {
    setFlipCard(!flipCard); // causes a rerender since state changed (adds 1 to count)
    console.log("CLICKED!");
  };

  return (
    <>
      {flipCard ? (
        <FaceUpCardContainer onClick={drawCard}>
          <img src={card} alt={cardType.name} onClick={drawCard} />
          <CardName>{cardType.name}</CardName>
          <PokemonImg
            src={cardType.sprites.other["official-artwork"].front_default}
            alt={cardType.name}></PokemonImg>
          <Background src={cardBackground} alt="Woods Background" />
          <Stats>
            <StatType>
              <p>Experience</p>
              <p>{cardType.base_experience}</p>
            </StatType>
            <StatType>
              <p>Height</p>
              <p>{cardType.height}</p>
            </StatType>
            <StatType>
              <p>Weight</p>
              <p>{cardType.weight}</p>
            </StatType>
          </Stats>
        </FaceUpCardContainer>
      ) : (
        <FaceDownCard
          onClick={drawCard}
          src={faceDownCard}
          alt="Pokemon face down card"
        />
      )}
    </>
  );
});

export default Card;
