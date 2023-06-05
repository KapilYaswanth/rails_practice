import React from "react";

function Header(): JSX.Element {
  return (
    <div
      style={{
        padding: "0px 15px",
        background: "grey",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h4>SAMPLE APP</h4>
      <div style={{ float: "right", width: "20%" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li>Home</li>
          <li>Help</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
