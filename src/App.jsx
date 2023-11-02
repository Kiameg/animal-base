import { useState } from "react";
import { getData } from "./data";
import Animal from "./components/Animal";

import "./App.css";

function App() {
  const animals = getData();
  const [filterProperty, setFilterProperty] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  let filtered = animals;
  if (filterProperty) {
    filtered = animals.filter((ani) => ani.species === filterProperty);
  }

  function sortAnimals(a, b) {
    if (a[sortColumn] > b[sortColumn]) {
      return 1;
    } else {
      return -1;
    }
  }
  filtered.sort(sortAnimals);

  return (
    <div>
      <button onClick={() => setFilterProperty("dog")}>Dogs</button>
      <button onClick={() => setFilterProperty("cat")}>Cats</button>
      <button onClick={() => setFilterProperty("horse")}>Horses</button>
      <button onClick={() => setFilterProperty("dragon")}>Dragons</button>
      <table>
        <thead>
          <tr>
            <th>Favourite</th>
            <th>
              <button onClick={() => setSortColumn("name")}>Name</button>
            </th>
            <th>
              <button onClick={() => setSortColumn("trait")}>Trait</button>
            </th>
            <th>
              <button onClick={() => setSortColumn("species")}>Species</button>
            </th>
            <th>
              <button onClick={() => setSortColumn("age")}>Age</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ani) => (
            <Animal name={ani.name} trait={ani.trait} species={ani.species} age={ani.age} key={ani.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
