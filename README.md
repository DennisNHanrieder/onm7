s2201238022 Dennis Hanrieder OMM UE7
  
Due do problems with mongodb i used mockdata instead. Can be found on /api  

ChatGbt Prompt:  

  this is the url for my db lab7g1. i don't know which url i must use for a database connection

ChatGPT:
Based on the screenshot you provided, it looks like your MongoDB server is running locally on port 9999, and you are accessing the lab7g1 database using Mongo Express.

Correct MongoDB URI:
Since your database is running locally on port 9999, the correct MongoDB connection string should be:

arduino
Kopieren
Bearbeiten
mongodb://localhost:9999/
However, in the Next.js API file (route.js), the URI is currently set as:

cpp
Kopieren
Bearbeiten
const DB_URI = "mongodb://mongo:27017/"
How to Fix:
Replace the existing URI with:

javascript
Kopieren
Bearbeiten
const DB_URI = "mongodb://localhost:9999/";
This change will ensure that your Next.js API can correctly connect to your MongoDB instance running on your local machine.

Would you like me to modify the file for you and regenerate the API code?
