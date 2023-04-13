import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [ironContacts, setContacts] = useState([
    contacts[0],
    contacts[1],
    contacts[2],
    contacts[2],
    contacts[3],
  ]);

  console.log(contacts);

  return <div className="App"></div>;
}
export default App;
