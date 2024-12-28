import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const App = () => {
  const [shipping, setShipping] = useState();
  const [framework, setFramework] = useState();

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="ship"
            id="shipping-input"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework, idx) => (
              <option key={idx}>{framework}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default App;
