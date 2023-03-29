import React from "react";
import userdata from "./userdata";
import "../Componets/usersstyles.css";

const Users = () => {
  return (
    <div className="allcard">
      <h1>Users profile</h1>
      <div className="cardcon">
        {userdata.map(({ Title, Country, Language, id, Poster }) => {
          return (
            <div key={id}>
              <article className="card">
                <div className="image">
                  <img src={Poster} alt="noimage" />
                </div>
                <h3>{Title}</h3>

                <div className="right-left">
                  <h4>
                    Language:
                    <br />
                    {Language}
                  </h4>
                  <h4>
                    Country:
                    <br />
                    {Country}
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
