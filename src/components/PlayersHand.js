import React, { useEffect } from "react";

import styled from "styled-components";
import Card from "./Card";
import { useCountRenders } from "./useCountRender";

const CardsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* gap: 1rem; */
  position: absolute;
  bottom: 2rem;
  justify-content: center;
  width: 100%;

  & > div:nth-child(1) {
    transform: translate(200%, -150%);
    position: relative;
  }

  & > div:nth-child(2) {
    transform: translate(100%, -150%);
    position: relative;
  }

  & > div:nth-child(3) {
    transform: translate(0, -150%);
    position: relative;
  }

  & > div:nth-child(4) {
    transform: translate(-100%, -150%);
    position: relative;
  }

  & > div:nth-child(5) {
    transform: translate(-200%, -150%);
    position: relative;
  }
`;

export const PlayersHand = React.memo(({ cards }) => {
  useCountRenders("PlayerHand");

  useEffect(() => {
    console.log("PlayerHand rendered");
  }, [cards]);

  return (
    <>
      <CardsContainer>
        {console.log(cards)}
        {cards.map((item) => {
          return <Card key={item.id} id={item.id} cardType={item} />;
        })}
      </CardsContainer>
    </>
  );
});
