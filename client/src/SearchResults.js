import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./css/SearchResult.css";

// Define the SearchResults function component
const SearchResults = ({ results, onAddFavorite }) => {
  // Define state variables using the useState hook
  const [favoritedItems, setFavoritedItems] = useState(new Set());
  console.log(results);
  // Define a function to handle adding items to favorites
  const handleAddFavorite = (result) => {
    onAddFavorite(result);
    setFavoritedItems((prev) => new Set([...prev, result.trackId]));
  };

  // Render the SearchResults component
  return (
    <Row className="results-container">
      {/* Map through the results array and render a Col component for each result */}
      {results.map((result) => (
        <Col key={result.trackId} xs={12} sm={6} md={4} lg={2} className="mb-4">
          {/* Render a result card div for each result, with a class of 'favorited' if it's already in the favoritedItems Set */}
          <div
            className={`result-card ${
              favoritedItems.has(result.trackId) ? "favorited" : ""
            }`}>
            <img src={result.artworkUrl100} alt={result.trackName} />
            <div className="result-card-info">
              <h3 className="result-card-title">{result.trackName}</h3>
              <p className="result-card-text">{result.artistName}</p>
              <Button
                onClick={() => handleAddFavorite(result)}
                // Disable the button if the current result is already in the favoritedItems Set
                disabled={favoritedItems.has(result.trackId)}
                // Add a class of 'favorited' to the button if the current result is already in the favoritedItems Set
                className={`result-card-button ${
                  favoritedItems.has(result.trackId) ? "favorited" : ""
                }`}>
                {/* Change the button text based on whether the current result is already in the favoritedItems Set */}
                {favoritedItems.has(result.trackId)
                  ? "Favorited"
                  : "Add to Favorites"}
              </Button>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

// Export the SearchResults component as the default export of the module
export default SearchResults;
