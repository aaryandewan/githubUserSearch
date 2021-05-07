import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../context/context";
import { GitHubCustomHook } from "../context/context";

const Search = () => {
  const { setGithubUserName } = GitHubCustomHook();
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setGithubUserName(name);
    console.log(name);
  };

  // fetch("https://api.github.com/users/aaryandewan")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Search;
