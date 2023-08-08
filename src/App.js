import "./App.css";
import Books from "./components/Books";
import Counter from "./components/Counter";
import Numbers from "./components/Numbers";
import User from "./components/User";

function App() {
  return (
    <div>
      <Counter />
      <Numbers />
      <User />
      <Books />
    </div>
  );
}

export default App;
