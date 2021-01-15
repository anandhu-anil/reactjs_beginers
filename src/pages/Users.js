import React, { useState, useEffect } from "react";
import LoaderGif from "../assets/loader_gif.gif";

import { getAllUsers } from "../config/Api";

const UsersList = (props) => {
  const [usersList, setUsersList] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      let response = await getAllUsers();
      if (response) {
        setUsersList(response?.users);
      }
      setLoader(false);
    } catch (e) {
      console.log(e);
      setLoader(false);
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {loader ? (
        <img src={LoaderGif} style={{ height: 500, width: 700 }} />
      ) : (
        <div>
          {usersList?.map((user, index) => {
            return (
              <div
                key={index}
                style={{ border: "1px solid black", margin: 25, padding: 10 }}
              >
                <p>Name: {user?.name}</p>
                <p> email: {user?.email}</p>
                <p>role: {user?.role}</p>
                <p>Phone number: {user?.phone}</p>
                <p>
                  DOB:{" "}
                  {user?.age?.day +
                    "/" +
                    user?.age?.month +
                    "/" +
                    user?.age?.year}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UsersList;
