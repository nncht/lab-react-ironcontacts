import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [ironContacts, setContacts] = useState([
    contacts[5],
    contacts[6],
    contacts[7],
    contacts[8],
    contacts[9],
  ]);

  console.log(contacts);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>

        {ironContacts.map((contact) => (
          <tbody>
            <tr>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  width="100px"
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🏆" : ""}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
export default App;
