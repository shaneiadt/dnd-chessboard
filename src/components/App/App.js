import Knight from "../Knight/Knight";
import Square from "../Square/Square";

function App() {
  return (
    <div className="App">
      <Square black>
        <Knight />
      </Square>
    </div>
  );
}

export default App;
