import {Component} from 'react'
import styled from 'styled-components'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const gameOutcomesData = {
  'yet-to-play': {
    outcome: 'yet-to-play',
    message: '',
  },
  won: {
    outcome: 'won',
    message: 'YOU WON',
  },
  lost: {
    outcome: 'lost',
    message: 'YOU LOSE',
  },
  draw: {
    outcome: 'draw',
    message: 'IT IS DRAW',
  },
}

/* Styled Components - Start */
const RockPaperScissorsBgContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 100%;
  min-height: 100vh;
`
/* For JSX in GameHeader component - Start */
const GameScoreHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.1rem solid #ffffff;
  border-radius: 0.8rem;
  padding: 1rem 2rem;
  width: 100%;
  height: 20vh;
`

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`

const BrandText = styled.h1`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Bree Serif';
  text-align: left;
  margin: 0;
  margin-bottom: 0.5rem;
`

const ScoreContainer = styled(BrandContainer)`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.8rem;
  padding: 1rem 2rem;
`

const ScoreContainerHeader = styled(BrandText)`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: #223a5f;
`

const ScoreText = styled.p`
  color: #223a5f;
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Roboto';
  margin: 0.5rem;
`
/* For JSX in GameHeader component - End */

/* For JSX in GameRules component - Start */

const GameRulesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 10vh;
`

const GameRulesPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`

const GameRulesPopupCloseContainer = styled(GameRulesContainer)`
  height: auto;
`

const GameRulesPopupCloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: inherit;
  margin: 0;
`

const GameRulesPopupTriggerButton = styled(GameRulesPopupCloseButton)`
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 0.4rem;
  padding: 1rem 1.5rem;
  font-family: 'Bree Serif';
  font-size: 1rem;
  font-weight: 600;
`

const GameRulesPopupImg = styled.img`
  width: 90%;
`

/* For JSX in GameRules component - End */

/* Styled Components - End */
/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */
/* React Components - Start */

/* GameHeader Component - Start */

const GameHeader = props => {
  const {score} = props

  return (
    <GameScoreHeaderContainer>
      <BrandContainer>
        <BrandText>Rock</BrandText>
        <BrandText>Paper</BrandText>
        <BrandText>Scissors</BrandText>
      </BrandContainer>

      <ScoreContainer>
        <ScoreContainerHeader>Score</ScoreContainerHeader>
        <ScoreText>{score}</ScoreText>
      </ScoreContainer>
    </GameScoreHeaderContainer>
  )
}

/* GameHeader Component - Start */

/* GameRules component - Start */

const GameRules = () => (
  <GameRulesContainer>
    <Popup
      modal
      trigger={<GameRulesPopupTriggerButton>Rules</GameRulesPopupTriggerButton>}
    >
      {close => (
        <GameRulesPopupContainer>
          <GameRulesPopupCloseContainer>
            <GameRulesPopupCloseButton onClick={() => close()}>
              <RiCloseLine />
            </GameRulesPopupCloseButton>
          </GameRulesPopupCloseContainer>
          <GameRulesPopupImg
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </GameRulesPopupContainer>
      )}
    </Popup>
  </GameRulesContainer>
)

/* GameRules component - End */

/* RockPaperScissors Component - Start */

class RockPaperScissors extends Component {
  state = {
    gamerChoiceId: 'INITIAL',
    opponentRandomChoiceId: 'INITIAL',
    score: 0,
    isNewGame: true,
    gameOutcome: gameOutcomesData['yet-to-play'].outcome,
  }

  render() {
    const {score} = this.state

    return (
      <RockPaperScissorsBgContainer>
        <GameHeader score={score} />
        <GameRules />
      </RockPaperScissorsBgContainer>
    )
  }
}

/* RockPaperScissors Component - Start */

/* React Components - End */

const App = () => <RockPaperScissors />

export default App
