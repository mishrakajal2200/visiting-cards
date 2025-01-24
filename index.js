
const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

// Import routes
const visitingCardRoutes = require("./routes/index");

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "./public")));

// Use the visiting card routes
app.use("/", visitingCardRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
