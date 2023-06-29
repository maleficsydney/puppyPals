import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return <p key={puppy.id}> {puppy.name} </p>; // React requires a key to insure the integrity of the order of elements, why?
        })}
      </div>
    </>
  );
}

export default App;
