import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/usercontext";
const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  min-width: 400px;
  background-color: #ffffff94;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: background-color 0.3s ease;
 
  &:hover {
    background-color: rgba(247, 247, 247, 0.8);
  }
`;

const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  color: #000; /* Set the color to black */
  transition: color 0.3s ease;
`;
const SearchInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  padding: 12px 15px;
  font-size: 16px;
  color: #333;
  outline: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &::placeholder {
    color: #888;
  }

  &:focus {
    color: #555;
  }
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const {city,setCity} = useContext(UserContext);

  const history=useNavigate();

  const handleSearch = async () => {
      const requestData = {
        name: searchQuery,
        email: 'john@example.com',
      };
  
      // Make a POST request to the backend with the requestData object in the request body
      fetch('http://localhost:5000/find', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {console.log(data)})
        .catch((error) => console.error('Error fetching data:', error));
          
        setCity(searchQuery);
        history('/city');
  };

  return (
    <SearchBarWrapper>
      <SearchIcon>
        <i className="faSearch" />
      </SearchIcon>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Explore"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.document}</li>
        ))}
      </ul>
    </SearchBarWrapper>
  );
};

export default SearchBar;
