'use client';
import React, { useState } from 'react';

export default function NewPerson() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSave = async () => {
    const data = { firstname, lastname };
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    alert(result.message || "Error saving person");
  };

  return (
    <div>
      <h1>Add New Person</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}