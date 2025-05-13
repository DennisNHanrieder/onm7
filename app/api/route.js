import { NextResponse } from "next/server";

// Mock data since DB connection is not working
const mockData = [
  { id: "1", firstname: "Bob", lastname: "Bobberton" },
  { id: "2", firstname: "Bobby", lastname: "Bobberones" },
  { id: "3", firstname: "Bobey", lastname: "Bobberoid" }
];

export async function GET() {
  try {
    const htmlResponse = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Database Entries</title>
          <style>
            body { font-family: Arial, sans-serif; color: #fff; background-image: url('https://park.ca/wp-content/uploads/2017/05/Summer-Insurance-Tips-980x594.jpg'); background-size: cover;}
            table { width: 50%; margin: auto; border-collapse: collapse; background-color: rgba(255, 255, 255, 0.8); }
            th, td { padding: 8px; text-align: left; border: 1px solid #444; color: #333; }
            th { background-color: #FF7F50; }
            tr:nth-child(even) { background-color: #FFD700; }
            h2 { text-align: center; margin-top: 20px; color: #333; }
          </style>
        </head>
        <body>
          <h2>Database Entries</h2>
          <table>
            <tr><th>ID</th><th>First Name</th><th>Last Name</th></tr>
            ${mockData.map(entry => `<tr><td>${entry.id}</td><td>${entry.firstname}</td><td>${entry.lastname}</td></tr>`).join("")}
          </table>
        </body>
      </html>
    `;
    return new NextResponse(htmlResponse, { headers: { 'Content-Type': 'text/html' } });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const person = await request.json();
    mockData.push({ id: (mockData.length + 1).toString(), ...person });
    return NextResponse.json({ message: "Person added successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add person" }, { status: 500 });
  }
}

