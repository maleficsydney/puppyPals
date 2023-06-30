import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";
// import { isCSSRequest } from "vite";

function App() {
  const [puppies] = useState(puppyList); // the workshop never reads setPuppies?
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  let isCute =
    featuredPup &&
    featuredPup.isCute && // If this is true, I want you to do everything that comes afterwards
    "This puppy is cute!";

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {" "}
              {puppy.name}{" "}
            </p>
          ); // React requires a key to insure the integrity of the order of elements, why? - A specific
          // tracking the ID via UseState? laywoman's terms pls
        })}
      </div>

      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <p>{featuredPup.email}</p>
            <p>{featuredPup.age}</p>
            <p>{isCute}</p>
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
