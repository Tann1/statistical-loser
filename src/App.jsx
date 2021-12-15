import calucateProbability from "./ultilities/calculateProbability";

function App() {
  
  return (
    <div className="App">
      Hello World, {calucateProbability(5, 2, 0.63)}
    </div>
  );
}

export default App;
