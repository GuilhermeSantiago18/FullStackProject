import React, { useState } from "react";
import { requestProductsURL } from "./service/api";


function App() {
 const [selectedOption, setSelectedOption] = useState('All')
  const handleClick = async () => {
    const products = await requestProductsURL()
    console.log(products)
  }
  return (
    <div>
      <button type="button" onClick={handleClick}> Search
      </button>
    FUNCTION
    </div>
  );
}

export default App;
