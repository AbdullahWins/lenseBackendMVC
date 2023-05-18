const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import database connection
const { connect } = require("./database/db");

// Import routes
const userRoutes = require("./routes/userRoutes");
const filterRoutes = require("./routes/filterRoutes");
const platformRoutes = require("./routes/platformRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

// Routes
app.use(userRoutes);
app.use(filterRoutes);
app.use(platformRoutes);
app.use(categoryRoutes);

// Start server
async function start() {
  try {
    await connect();
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

start();
