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
  min-width: 350px;
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
  margin: 0;
  padding: 0.5rem;
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

/* For JSX in GameBody component - Start */

const GameBodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  padding: 0;
  margin: 0;

  @media (min-width: 440px) {
    padding: 1rem;
    margin: 1rem;
  }

  @media (min-width: 600px) {
    width: 90%;
  }

  @media (min-width: 700px) {
    width: 80%;
  }

  @media (min-width: 800px) {
    width: 70%;
  }

  @media (min-width: 950px) {
    width: 60%;
  }

  @media (min-width: 1110px) {
    width: 50%;
  }
`

/* For JSX in GameBody component - End */

/* For JSX in GameView, GameChoice components - Start */

const GameViewContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  width: 100%;
  margin: 0;
`
const GameChoiceContainer = styled.li`
  width: 40%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const GameChoiceButton = styled.button`
  border: none;
  outline: none;
  background: inherit;
  cursor: pointer;
  margin: 0;
  padding: 0;
`

const GameChoiceButtonImg = styled.img`
  width: 7.5rem;
  height: 7.5rem;

  @media (min-width: 440) {
    width: 9rem;
    height: 9rem;
  }

  @media (min-width: 475px) {
    width: 10rem;
    height: 10rem;
  }

  @media (min-width: 550px) {
    width: 12rem;
    height: 12rem;
  }
`

/* For JSX in GameView, GameChoice components - End */

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

/* GameChoice Component - Start */

const GameChoice = props => {
  const {choiceData, onChoiceSelection} = props
  const {id, imageUrl} = choiceData

  const onChoiceClick = () => onChoiceSelection(id)

  return (
    <GameChoiceContainer>
      <GameChoiceButton type="button" onClick={onChoiceClick}>
        <GameChoiceButtonImg src={imageUrl} alt={id} />
      </GameChoiceButton>
    </GameChoiceContainer>
  )
}

/* GameChoice Component - End */

/* GameView Component - Start */

const GameView = props => {
  const {onGameChoice} = props

  return (
    <GameViewContainer>
      {choicesList.map(choicesListItem => (
        <GameChoice
          key={choicesListItem.id}
          choiceData={choicesListItem}
          onChoiceSelection={onGameChoice}
        />
      ))}
    </GameViewContainer>
  )
}

/* GameView Component - End */

/* GameBody Component - Start */

const GameBody = props => {
  const {gameMode, outcome, onGamerSelection} = props

  return (
    <GameBodyContainer>
      {gameMode ? (
        <GameView onGameChoice={onGamerSelection} />
      ) : (
        <p>{gameOutcomesData[outcome].message}</p>
      )}
    </GameBodyContainer>
  )
}

/* GameBody Component - End */

/* GameRules Component - Start */

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

/* GameRules Component - End */

/* RockPaperScissors Component - Start */

class RockPaperScissors extends Component {
  state = {
    gamerChoiceId: 'INITIAL',
    opponentRandomChoiceId: 'INITIAL',
    score: 0,
    isNewGame: true,
    gameOutcome: gameOutcomesData['yet-to-play'].outcome,
  }

  determineGameOutcome = (inputGamerChoiceId, opponentChoiceId) => {
    let currentGameOutcome = gameOutcomesData['yet-to-play'].outcome
    if (inputGamerChoiceId === opponentChoiceId) {
      currentGameOutcome = 'draw'
    } else if (
      (inputGamerChoiceId === 'ROCK' && opponentChoiceId === 'SCISSORS') ||
      (inputGamerChoiceId === 'SCISSORS' && opponentChoiceId === 'PAPER') ||
      (inputGamerChoiceId === 'PAPER' && opponentChoiceId === 'ROCK')
    ) {
      currentGameOutcome = 'won'
    } else {
      currentGameOutcome = 'lost'
    }

    return currentGameOutcome
  }

  getUpdatedScore = (currentScore, currentGameOutcome) => {
    let updatedScore = 0

    if (currentGameOutcome === 'won') {
      updatedScore = currentScore + 1
    } else if (currentGameOutcome === 'lost') {
      updatedScore = currentScore - 1
    } else if (currentGameOutcome === 'draw') {
      updatedScore = currentScore
    }

    return updatedScore
  }

  onGamerChoiceSelection = selectedGamerChoiceId => {
    const randomId = Math.floor((Math.random() * 100000) % choicesList.length)
    const generatedOpponentChoiceId = choicesList[randomId].id

    const currentGameOutcome = this.determineGameOutcome(
      selectedGamerChoiceId,
      generatedOpponentChoiceId,
    )

    this.setState(previousGameState => {
      const {score} = previousGameState
      const updatedScore = this.getUpdatedScore(score, currentGameOutcome)

      return {
        opponentRandomChoiceId: generatedOpponentChoiceId,
        gameOutcome: currentGameOutcome,
        isNewGame: false,
        score: updatedScore,
      }
    })
  }

  render() {
    const {isNewGame, gameOutcome, score} = this.state

    return (
      <RockPaperScissorsBgContainer>
        <GameHeader score={score} />
        <GameBody
          gameMode={isNewGame}
          outcome={gameOutcome}
          onGamerSelection={this.onGamerChoiceSelection}
        />
        <GameRules />
      </RockPaperScissorsBgContainer>
    )
  }
}

/* RockPaperScissors Component - Start */

/* React Components - End */

const App = () => <RockPaperScissors />

export default App
