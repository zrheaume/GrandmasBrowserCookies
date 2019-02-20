const express = require("express")
const path = require("path")

let app = express()

app.get("/", function (req, res) {
   res.sendFile(path.resolve("client/build/index.html"))
})

app.use(express.static(path.resolve("client/build/.")))

module.exports = {
   listen: () => {
      app.listen(process.env.PORT || 8080, (err) => {
         if (err) throw err
         console.log(`server listening on ${process.env.PORT ? process.env.PORT : 8080}`)
      })
   }
}
