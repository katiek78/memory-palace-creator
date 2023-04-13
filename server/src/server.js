const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');
require("dotenv").config({ path: path.resolve('config.env') });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

//Added for Vercel deployment
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.resolve(__dirname, 'client', 'build')));
//   app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'),function (err) {
//           if(err) {
//               res.status(500).send(err)
//           }
//       });
//   })
// }

// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, async () => {
  // perform a database connection when server starts
  await dbo.connectToServer(function (err) {
    if (err) {
      console.error(err);
     throw new Error("Could not connect to server");
    }
  });
  console.log(`Server is running on port: ${port}`);
});
