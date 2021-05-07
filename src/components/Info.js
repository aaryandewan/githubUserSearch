import React from "react";
import { GithubContext } from "../context/context";
import { GitHubCustomHook } from "../context/context";

import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const UserInfo = () => {
  const { githubUser } = GitHubCustomHook();
  console.log(githubUser.login);

  return (
    <div className="container" style={{ backgroundColor: "red" }}>
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "pink" }}
      >
        <div class="card" style={{ width: "18rem" }}>
          <img src={githubUser.avatar_url} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{githubUser.login}</h5>
            <p class="card-text">{githubUser.bio}</p>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-around "
        style={{ backgroundColor: "orange", marginTop: "1%" }}
      >
        <div className="col-lg-2 col-sm-12 gy-4">
          <button type="button" class="btn btn-dark col-sm-12">
            Following
            <span
              className="badge badge-light"
              style={{ backgroundColor: "#0275d8", color: "white" }}
            >
              {githubUser.following}
            </span>
          </button>
        </div>
        <div className="col-lg-2 col-sm-12 gy-4">
          <button type="button" class="btn btn-dark col-sm-12">
            Gists
            <span
              className="badge badge-light"
              style={{ backgroundColor: "#0275d8", color: "white" }}
            >
              {githubUser.public_gists}
            </span>
          </button>
        </div>
        <div className="col-lg-2 col-sm-12 gy-4">
          <button type="button" class="btn btn-dark col-sm-12">
            Followers
            <span
              className="badge badge-light"
              style={{ backgroundColor: "#0275d8", color: "white" }}
            >
              {githubUser.followers}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
