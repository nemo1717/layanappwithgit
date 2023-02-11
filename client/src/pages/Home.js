import React, { useEffect, useState } from "react";

function Home() {
  const [backendData, setbackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setbackendData(data);
      });
  }, []);

  return (
    <div>
      <h2>At home</h2>
      {typeof backendData.users == "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default Home;
