import React from "react";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";
import "./css/Favorites.css";

// Define the Favorites function component
const Favorites = ({ favorites, onRemoveFavorite }) => {
  // Define a function to handle removing items from favorites
  const handleRemoveFavorite = (favorite) => {
    onRemoveFavorite(favorite);
    toast.success("This item has been removed.");
  };

  // Render the Favorites component
  return (
    <div className="favorites-container">
      {/* Render a Card component for each favorite in the favorites array, or render a message if there are no favorites */}
      {favorites.length > 0 ? (
        favorites.map((favorite) => (
          <Card className="favorite-card" key={favorite.trackId}>
            <Card.Img
              src={favorite.artworkUrl100}
              alt={favorite.trackName}
              className="card-img"
            />
            {/* Render the favorite card info */}
            <Card.Body className="favorite-card-info">
              <div>
                <div className="favorite-card-title">{favorite.trackName}</div>
                <div className="favorite-card-text">{favorite.artistName}</div>
              </div>
              {/* Render a button to remove the favorite from the list */}
              <button
                className="favorite-card-button"
                onClick={() => handleRemoveFavorite(favorite)}>
                Remove from Favorites
              </button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div className="no-favorites">No favorites.</div>
      )}
    </div>
  );
};

// Export the Favorites component as the default export of the module
export default Favorites;
