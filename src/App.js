import "./App.css";
import Router from "./routes/Router";

function App() {
  return (
    <div className="flex h-full w-full bg-main sm:justify-center lg:h-screen lg:items-center">
      <Router />
    </div>
  );
}

export default App;
