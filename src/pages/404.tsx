import { useState } from 'react'

export default function App() {
  const [name, setName] = useState(null);
  const [nameFieldText, setNameFieldText] = useState("");

  return <div>
    <div style={{ padding: "15px" }}>
      <h1>404?</h1>
      <h5>What were you looking for?</h5>
      <br />
    </div>
  </div>;
}