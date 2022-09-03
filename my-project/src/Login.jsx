import { Button } from "@mui/material";
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
function Login() {
  const [user, setUser] = useState(null);
  const googleSuccess = (resp) => {
    // console.log(resp.profileObj);
    setUser(resp.profileObj);
  };
  const googleFailure = (error) => {
    console.log(error);
  };
  return (
    <div className="text-center">
      {user ? (
        <div className="w-fit p-4 m-auto mt-10 bg-white rounded-lg border border-gray-200 shadow-md">
          <div className="flex flex-col items-center pb-10 ">
            <button
              onClick={() => setUser("")}
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

            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={user?.imageUrl}
              alt="Profile Picture"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user?.name}
            </h5>
            
          </div>
        </div>

      ) : (
        <div className="mt-10">
          <GoogleLogin
            clientId="484481702817-uepprhj504uchatd6rcdjd2t8iv02vhg.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                variant="contained"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                color="secondary"
                className="bg-[#7b1fa2]"
              >
                Log With Google
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        </div>
      )}
    </div>
  );
}

export default Login;
