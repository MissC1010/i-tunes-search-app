import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Search from "./SearchForm";
import Results from "./SearchResults";
import Favorites from "./Favorites";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/App.css";

function App() {
  // Define state variables using the useState hook
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(sessionStorage.getItem("favorites")) || []
  );

  // Define a function to handle search queries
  const handleSearch = (query, mediaType) => {
    fetch(
      `https://react-itunes-server.herokuapp.com/search?term=${query}&media=${mediaType}`
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data.data))
      .catch((error) => console.log(error));
  };

  // Define a function to handle adding items to favorites
  const handleAddFavorite = (favorite) => {
    // Check if the item is already in favorites
    const isFavoriteDuplicate = favorites.some(
      (item) => item.trackId === favorite.trackId
    );

    // Display an error toast and return if the item is already in favorites
    if (isFavoriteDuplicate) {
      toast.error("This item is already added to favorites.");
      return;
    }

    // Update the favorites list and save to sessionStorage
    const updatedFavorites = [...favorites, favorite];
    setFavorites(updatedFavorites);
    sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // Display a success toast
    toast.success("Item added to favorites!");
  };

  // Define a function to handle removing items from favorites
  const handleRemoveFavorite = (favorite) => {
    // Update the favorites list and save to sessionStorage
    const updatedFavorites = favorites.filter(
      (item) => item.trackId !== favorite.trackId
    );
    setFavorites(updatedFavorites);
    sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Render the app
  return (
    <div>
      {/* Define a Bootstrap Navbar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Music App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Define Navbar Links */}
              <Nav.Link href="/">Search</Nav.Link>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <SearchPage
                searchResults={searchResults}
                handleSearch={handleSearch}
                handleAddFavorite={handleAddFavorite}
              />
            }
          />
          {/* Define a Route for the favorites page */}
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                handleRemoveFavorite={handleRemoveFavorite}
              />
            }
          />
        </Routes>
      </Container>
      <ToastContainer />
    </div>
  );
}

// Define a component for the search page
function SearchPage({ searchResults, handleSearch, handleAddFavorite }) {
  return (
    <>
      <Search onSearch={handleSearch} />
      {/* Render the Results component and pass in the searchResults array and handleAddFavorite function */}
      <Row>
        <Col>
          <Results results={searchResults} onAddFavorite={handleAddFavorite} />
        </Col>
      </Row>
    </>
  );
}

// Define a component for the favorites page
function FavoritesPage({ favorites, handleRemoveFavorite }) {
  return (
    <Row>
      <Col>
        {/* Render the Favorites component and pass in the favorites array and handleRemoveFavorite function */}
        <Favorites
          favorites={favorites}
          onRemoveFavorite={handleRemoveFavorite}
        />
      </Col>
    </Row>
  );
}

// Export the App component as the default export of the module
export default App;
