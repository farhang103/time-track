import { useMemo, useState } from "react";
import "./App.css";
import Cards from "./components/cards";
import { UserContext } from "./userContext";

function App() {
  const [value, setValue] = useState();
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);
  return (
    <UserContext.Provider value={providerValue}>
      <div className="bg-main flex h-full w-full sm:justify-center lg:h-screen lg:items-center">
        <Cards />
      </div>
    </UserContext.Provider>
  );
}

export default App;
