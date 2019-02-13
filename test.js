
let shuffle = (arr, range = 10000, noObj = false) => {
   let arrWithRandomizer = arr.map((arrObj, i) => {
      if (!noObj) {
         randomizer = Math.floor( Math.log(Math.random()) * range)
         return { arrObj, randomizer }
      }
   })

   let sortedWithRandomizer = arrWithRandomizer.sort((a, b) => {
     return a.randomizer - b.randomizer 
   })

   let shuffledArr = sortedWithRandomizer.map(objWithRandomizer => objWithRandomizer.arrObj)
   
   return shuffledArr
}

// This is our randomosity test

let testShuffle = (tilesIn) => {

   let tilesOut = shuffle(tilesIn)
   tilesOut.every((tile, index) => tile !== tilesIn[index])

   if (
      tilesOut.every((tile, index) => tile !== tilesIn[index])
   )
   {
      return {allRandom : true}
   } else {
      return {allRandom : false}
   }
}


let tiles = [
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
   }]

testShuffle(tiles)