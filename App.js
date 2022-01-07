import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  return (
    <div>
      <Fun />
    </div>
  );
}

export default App;

function Fun() {
  const [name, setname] = useState("");
  const [list, setlist] = useState([]);

  const chname = (e) => {
    setname(e.target.value);
  };

  const sub = async () => {
    const url = "http://localhost:8000/posting";
    const body = { name: name };
    axios.post(url, body);
    let newlist = [body, ...list];
    setlist(newlist);
  };

  const get = async () => {
    const url = "http://localhost:8000/getting";
    let result = await axios.get(url);
    let list = result.data;
    const newlist = [...list];
    setlist(newlist);
  };

  useEffect(() => get(), []);
  return (
    <div>
      <div>
        <input type="text" value={name} onChange={chname} />
      </div>
      <div>
        <input type="button " value="Submit" onClick={sub} />
      </div>

      <div>
        {list.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
