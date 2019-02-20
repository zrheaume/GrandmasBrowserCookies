//eslint-disable-next-line 
import React, { useState, useEffect } from "react"
import "./game.css"

//* [ Non-Component Global Vars and Utility Functions ]

// ? Default layout formatting
const layout = {
   margin: 5,
   gutter: 5
}

// ? Function that randomizes the order of an array's elements
let shuffle = (arr, range = 10000) => {
   let arrWithRandomizer = arr.map((arrObj, i) => {
      let randomizer = Math.floor(Math.log(Math.random()) * range)
      return { arrObj, randomizer }
   })

   let sortedWithRandomizer = arrWithRandomizer.sort((a, b) => {
      return a.randomizer - b.randomizer
   })

   let shuffledArr = sortedWithRandomizer.map(objWithRandomizer => objWithRandomizer.arrObj)

   return shuffledArr
}

// let grab

// React-Dom function Components

function Header(props) {
   return (
      <div style={{ width: "100%" }}>
         <div className="jumbotron header" style={{ width: "100%" }}>
            <h1 className="display-4">Grandma's Browser Cookies</h1>
            < hr />
            <h3 className="lead"><em> "Good to the last byte!" </em></h3>
         </div>
      </div>
   )
}

function Scorebar(props) {

   return (
      <div className="card score-panel">
         <div className="card-body score-panel-display">
            <b><u> Your current score: </u></b> <span> {props.score} </span>
         </div>
      </div>
   )
}

function Tile(props) {
   let defaultSize = {
      w: `${(window.innerWidth) * 0.15}px`
   }

   let handleTileClick = (event) => {
      // console.log(props.index)
      let state = props.parent_Getter
      if (state.tiles[props.index].cleared) {
         alert("Well, looks like IE froze... Guess you lost!!!")
         props.parent_Setter ({ tiles: state.tiles, score: 0, shuffled: false})
      } else if (!state.tiles[props.index].cleared) {
         // console.log(tiles[props.index])
         state.tiles[props.index].cleared = true
         // console.log(tiles[props.index])
         props.parent_Setter({ tiles: state.tiles, score: state.score+1, shuffled: false })
      }
   }

   return (

      <div className="card tile"
         onClick={handleTileClick}
         style={{ width: defaultSize.w }}
      >

         <div className="card-body">
            <b className="card-text">{props.name}</b>
         </div>
         <img className="card-img-top" src="/browserArt.png" alt="Whoops!" />
      </div>



   )
}

function GameBoard(props) {

   const [gameState, setGameState] = useState(
      {
         tiles: [
            {
               name: "Cheapo Deals",
               cleared: false
            },
            {
               name: "Jigsaw Puzzles Direct",
               cleared: false
            },
            {
               name: "Roarin' Twenties Reunion",
               cleared: false
            },
            {
               name: "Buy Knitting Supplies NOW",
               cleared: false
            },
            {
               name: "Enter Best Sweepstakes Free",
               cleared: false
            },
            {
               name: "Magazines Direct 2 Door",
               cleared: false
            },
            {
               name: "Clean Your PC 1000xFaster",
               cleared: false
            },
            {
               name: "Download Printable TV Guide",
               cleared: false
            }
         ],
         score: 0,
         shuffled: false
      })


   useEffect(() => {
      if (!gameState.shuffled) {
         let shuffled = shuffle(gameState.tiles)
         setGameState({ tiles: shuffled, score: gameState.score, shuffled: true })
      }
      if (gameState.score === 8) {
         alert("You won! Your grandma thanks you.")
      }
   })

   return (
      <div>
         <Scorebar score={gameState.score} /> 
         <div className="card gameboard-container" >
            <div className="gameboard">
               {
                  gameState.tiles.map((element, p) => {
                     return <Tile
                        key={p}
                        index={p}
                        name={element.name}
                        cleared={element.cleared}
                        parent_Setter={setGameState}
                        parent_Getter={gameState}
                     />
                  })
               }
            </div>
         </div>
      </div>
   )
}

function Container(props) {

   return (
      <div className="container app-container" >
         {props.children}
      </div>
   )
}

function Game(props) {

   return (
      <Container >
         <Header />
         <GameBoard />
      </Container>
   )
}

export {

   Game
}