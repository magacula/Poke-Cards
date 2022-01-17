import React, { useState } from "react";
import styled from "styled-components";
import { PlayersHand } from "./components/PlayersHand";
import { useCountRenders } from "./components/useCountRender";

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DealButton = styled.button`
  margin-bottom: 1.5rem;
  background-color: #d62828;
  font-size: 1rem;
  width: 185px;
  height: 48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 4px 34px #000000;
  cursor: pointer;
  border-radius: 1.5rem;
  border: none;
  color: #ffffff;

  p {
    color: #ffffff;
    font-family: Rosario;
    font-style: normal;
    font-weight: bold;
    line-height: 48px;
  }
`;

function App() {
  const [dealCards, setDealCards] = useState(false);
  const [results, setResults] = useState([]);

  const min = 1,
    max = 1116;

  // function to delay promise from being fulfilled
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const getPlayersHand = async () => {
    let cardsAdded = 0;
    while (cardsAdded < 5) {
      try {
        // generate a random id from a range
        let randomId = Math.floor(Math.random() * (max - min) + min);

        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomId}/`
        );
        await delay(300); // delays promise for 0.3 secs
        const data = await response.json();

        /*
        If you use the previous value to update state, you must pass a function that receives the previous state value and returns the new state value 

        */
        setResults((prevResults) => [...prevResults, data]); // pushing new data using prev State
        cardsAdded++;
      } catch (error) {
        console.error(error);
      }
    }
  };

  useCountRenders("App");
  return (
    <div className="App">
      {dealCards && <PlayersHand cards={results} />}

      {!dealCards && (
        <ButtonContainer>
          <DealButton
            onClick={() => {
              getPlayersHand();
              setDealCards(true);
            }}>
            <p>Deal Cards</p>
          </DealButton>
        </ButtonContainer>
      )}
    </div>
  );
}

export default App;
