import React from "react";

async function fetchEntries() {
  const res = await fetch("/api");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const entries = await fetchEntries();

  return (
    <div>
      <h1>Database Entries</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.firstname}</td>
              <td>{entry.lastname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}