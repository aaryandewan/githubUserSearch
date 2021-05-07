import React from "react";
import { GitHubCustomHook } from "../context/context";

const topRepos = () => {
  const { repos } = GitHubCustomHook();

  function compare(a, b) {
    if (a.stargazers_count < b.stargazers_count) {
      return -1;
    }
    if (a.stargazers_count > b.stargazers_count) {
      return 1;
    }
    return 0;
  }

  let finalRepo = repos.sort(compare);
  finalRepo.reverse();
  //   console.log("yayuzzzzzzzzzzzzzzzzu");
  //   alert("hi");
  //   console.log(finalRepo);

  return <h1>Hey yo</h1>;
};
