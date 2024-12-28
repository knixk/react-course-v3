import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  function handleChange(e) {
    // console.log(e.target);
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleClick() {
    console.log("click");
  }

  return (
    <div className="container">
      <h2>Advanced React</h2>

      <div className="box">
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          type="text"
        />
        <input
          name="age"
          value={data.age}
          onChange={(e) => handleChange(e)}
          type="text"
        />
      </div>

      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
