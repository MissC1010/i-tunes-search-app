const express = require("express");
const cors = require("cors");
const axios = require("axios");
const helmet = require("helmet");

const app = express();

app.use(cors());

app.use(express.json());

// Use helmet middleware to set security-related HTTP response headers
app.use(helmet());

// Set a constant BASE_URL to the iTunes Search API URL
const BASE_URL = "https://itunes.apple.com";

// Define an endpoint for the /search route with a GET method
app.get("/search", async (req, res) => {
  try {
    // Get the term and entity query parameters from the request
    const { term, entity } = req.query;

    // Make a GET request to the iTunes Search API with the term and entity as query parameters
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        term,
        entity,
      },
    });

    // Extract the results from the response data
    const results = response.data.results;

    res.json({ data: results });
  } catch (error) {
    // Log any errors and return an error response
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Set a constant PORT to listen on for the server
const PORT = process.env.PORT || 5000;

// Start the server by listening on the PORT and logging the running port to the console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
