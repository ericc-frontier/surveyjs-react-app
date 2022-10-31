// const path = require("path");
// const express = require("express");
// const db = require("./config/connection");

// const app = express();

// const PORT = 3001;

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}`);
// });

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../client/build")));

// // Handle GET requests to /api route
// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// // ctach all route
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

// // post new survey results
// app.post("/api/results", async (req, res) => {
//   console.log("hiiiiiiiiiiiii" + req.body);
//   let con = await db.getConnection();
//   var sql = `INSERT INTO results (id, results_json) VALUES (?,${req.body})`;
//   const newResults = con.query(sql, function (err, result) {
//     console.log("HERE");
//     if (err) {
//       throw err;
//     }
//     res.status(201).json(newResults);
//   });
// });

// app.get("/api/results", async (req, res) => {
//   try {
//     const results = await app.findAll();
//     res.status(201).json(results);
//   } catch (error) {
//     console.log(error);
//     res.json("");
//   }
// });
// // app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

// app.get("/healthCheck", (req, res) => {
//   console.log("res is called");
//   res.json({ message: "Server is up and running" });
// });
