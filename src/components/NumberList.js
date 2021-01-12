import React, { useState } from "react";
import { randomNumber } from "../utils";

function NumberList() {
  const [numbers, setNumbers] = useState([1,2,3])
  const [filterBy, setFilterBy] = useState("All")


  let numbersToDisplay = numbers;
  if (filterBy === "Even") {
    numbersToDisplay = numbers.filter((num) => num % 2 === 0);
  } else if (filterBy === "Odd") {
    numbersToDisplay = numbers.filter((num) => num % 2 !== 0);
  }

  const numberList = numbersToDisplay.map((num) => (
    <li key={num} onClick={() => handleLiClick(num)}>
      {num}
    </li>
  ))

  function handleLiClick(numberToUpdate) {
   const newNumberArray = numbers.map((number) => {
     if (number === numberToUpdate) {
       return numberToUpdate + 100
     } else {
       return number
     }
   })
   setNumbers(newNumberArray)
  }
  
  function handleAddNumber() {
    const newNumber = randomNumber()
    const newNumberArray = [...numbers, newNumber]
    setNumbers(newNumberArray)
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }
    <select name="filter" onChange={handleFilterChange}>
    <option value="All">All</option>
    <option value="Even">Even</option>
    <option value="Odd">Odd</option>
    </select>; 

  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      <ul>{numberList}</ul>
    </div>
  );
}





export default NumberList;
