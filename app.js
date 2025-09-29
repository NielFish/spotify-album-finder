import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "client/dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
});

console.log("Serving frontend from:", path.join(__dirname, "client/dist"));



app.listen(PORT, () => {
  console.log("Backend running on http://127.0.0.1:3000");
});



/* 

URL usada en el Dashboard de Spotify:
http://127.0.0.1:3000/callback

https://developer.spotify.com/dashboard/5c94a9aee38a44ba9dbba43a45fc1899

No compartir el Client ID y Client Secret:
5c94a9aee38a44ba9dbba43a45fc1899 
*/