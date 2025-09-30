import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.get("/albums", async (req, res) => {
  const artist = req.query.artist;
  if (!artist) return res.status(400).json({ error: "Missing artist name" });

  try {
    // 1. Obtener token de Spotify
    const authParams = new URLSearchParams();
    authParams.append("grant_type", "client_credentials");

    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
          ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: authParams,
    });

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // 2. Buscar álbumes del artista
    const searchRes = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        artist
      )}&type=album`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const searchData = await searchRes.json();
    const albums = searchData.albums.items.map((album) => ({
      id: album.id,
      name: album.name,
      image: album.images[0]?.url,
    }));

    res.json({ albums });
  } catch (err) {
    console.error("Error fetching from Spotify:", err);
    res.status(500).json({ error: "Failed to fetch albums" });
  }
});

export default router;
