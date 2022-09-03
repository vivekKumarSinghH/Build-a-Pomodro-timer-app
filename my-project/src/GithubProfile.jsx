import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function GithubProfile() {
  const [username, setUsername] = useState("");
  const [userProfile, setUserProfile] = useState("");
  let handleSubmit = async (name) => {
    try {
      let profile = await fetch(`https://api.github.com/users/${name}`);
      let profileData = await profile.json();
      setUserProfile(profileData);
      setUsername("");
      console.log(profileData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" w-full text-center">
      {!userProfile ? (
        <div className=" flex flex-col gap-4 w-fit p-4 m-auto mt-10 bg-white rounded-lg border border-gray-200 shadow-md">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Search GitHub Profile
          </h5>

          <TextField
            placeholder="Username"
            value={username}
            onChange={(e) => {
              console.log(e.target.value);
              setUsername(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => handleSubmit(username)}
            className="focus:outline-none font-1rem text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            GET USER
          </button>
        </div>
      ) : (
        <div className="w-fit p-4 m-auto mt-10 bg-white rounded-lg border border-gray-200 shadow-md">
          <div className="flex flex-col items-center pb-10 ">
            <button
              onClick={() => setUserProfile("")}
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-success"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              GitHub Profile
            </h5>

            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={userProfile?.avatar_url}
              alt="Profile Picture"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {userProfile?.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Username :{userProfile?.login}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              No. of public repos :{userProfile?.public_repos}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              No. of public gists :{userProfile?.public_gists}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Profile created at in time format of YYYY-MM-DD. :
              {userProfile?.created_at}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default GithubProfile;
