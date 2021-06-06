import React from "react";
import spinner from "../assets/spinner.jpg";

export default function App({ users, loading }) {
  return (
    <div className="App">
      <div className="table-header">
        <h4>Number</h4>
        <h4>Name</h4>
        <h4>Username</h4>
        <h4>Email</h4>
        <h4>City</h4>
      </div>
      <hr />
      <hr />
      {loading ? (
        <div>
          <h2>Loading...</h2>
          <img src={spinner} alt="loading-spin" />
        </div>
      ) : (
        users.map((user, index) => {
          return (
            <div key={index}>
              <div
                key={user.name}
                className="table-row"
                style={{
                  backgroundColor:
                    index % 3 === 0
                      ? "lightgrey"
                      : index % 3 === 1
                      ? "lightblue"
                      : "white",
                }}
              >
                <h4>{index + 1}</h4>
                <h4>{user.name}</h4>
                <h4>{user.username || "No information"}</h4>
                <h4>{user.email || "No information"}</h4>
                <h4>{user.address?.city || "No information"}</h4>
              </div>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
}
