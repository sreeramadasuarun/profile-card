import React from "react";
import userdata from "./userdata";
import "../Componets/usersstyles.css";

const Users = () => {
  return (
    <div className="allcard">
      <h1>Users profile</h1>
      <div className="cardcon">
        {userdata.map(({ imgurl, name, id, username, email }) => {
          return (
            <div key={id}>
              <article className="card">
                <div className="image">
                  <img src={imgurl} alt="noimage" />
                </div>
                <h3>{name}</h3>

                <div className="right-left">
                  <h4>
                    username:
                    <br />
                    {username}
                  </h4>
                  <h4>
                    email:
                    <br />
                    {email}
                  </h4>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
