//eslint-disable-next-line 
import React, { useState, useEffect } from "react"
import "./game.css"

//* [ Non-Component Global Vars and Utility Functions ]

// ? Default layout formatting
const layout = {
   defaultValues: {
      margin: 5,
      gutter: 5
   }
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

   const [score, setScore] = useState(0)
   const incrementScore = () => setScore(score + 1)

   return (
      <div className="card score-panel">
         <div className="card-body score-panel-display">
            <b><u> Your current score: </u></b> <span> {score} </span>
         </div>
      </div>
   )
}

function Tile(props) {

   return (
      
         <div className="card tile" style={props.style}>
            <div className="card-body">
               <b className="card-text">{props.name}</b>
            </div>
            <img className="card-img-top" src="/browserArt.png" alt="Whoops!" />
         </div>
      


   )
}

function GameBoard(props) {

   const[tiles, refreshTiles] = useState(shuffle(props.tiles))

   let defaultTileSize = {
      width: `${window.innerWidth * 0.15}px`
   }


   return (
      <div className="card gameboard-container" >
         <div className="gameboard">
            {
               props.tiles.map((element, p) => {
                  return <Tile
                     key={p}
                     name={element.name}
                     style={defaultTileSize}
                     onClick={(event) => {
                        console.log(event)
                     }}
                  />
               })
            }
         </div>
      </div >

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
         score: 0
      })

   // useEffect(() => {
   //    window.addEventListener("resize", () => {
   //    })
   // })

   return (
      <Container >
         <Header />
         <Scorebar
            score={0}
            incrementScore={(x) => x + 1}
         />
         <GameBoard
            tiles={gameState.tiles}
            grab={setGameState}
         />
      </Container>
   )
}

export {

   Game
}