import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import "./css/SearchForm.css";

// Define the SearchForm function component
const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [mediaType, setmediaType] = useState("");

  // Define a function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the onSearch function passed in as a prop, passing in the current query state as an argument
    onSearch(query, mediaType);
  };

  // Render the SearchForm component
  return (
    <Form onSubmit={handleSubmit} className="search-form">
      <InputGroup className="search-input">
        {/* Render a Form.Control component for the search input, with the value and onChange event handler tied to the query state */}
        <Form.Control
          className="search-text"
          type="text"
          placeholder="Search for content..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Form.Select
          className="custom-select"
          defaultValue="all"
          onChange={(event) => setmediaType(event.target.value)}>
          <option value="movie">Movie</option>
          <option value="podcast">Podcast</option>
          <option value="music">Music</option>
          <option value="musicVideo">Music Video</option>
          <option value="audiobook">Audiobook</option>
          <option value="shortFilm">Short Film</option>
          <option value="tvShow">TV Show</option>
          <option value="software">Software</option>
          <option value="ebook">E-book</option>
          <option value="all">All</option>
        </Form.Select>
        {/* Render a Button component for the search button, with an onClick event handler tied to the handleSubmit function */}
        <Button
          className="search-button"
          variant="outline-secondary"
          type="submit">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

// Export the SearchForm component as the default export of the module
export default SearchForm;
