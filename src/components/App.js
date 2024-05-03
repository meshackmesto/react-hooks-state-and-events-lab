import React,{ useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [isMode, setIsMode] = useState(false);

function handleMode(){
  setIsMode((isMode) => !isMode);
}
  const appClass = isMode? "App dark" : "App light"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{isMode ? "Light Mode" : "Dark Mode "}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
