import "./App.css";
import { FormControl, InputGroup, Container, Button } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [albums, setAlbums] = useState([]);

  const handleSearch = async () => {
    if (!searchInput.trim()) return;

    try {
      const res = await fetch(`/api/albums?artist=${encodeURIComponent(searchInput)}`);
      const data = await res.json();
      setAlbums(data.albums || []);
    } catch (err) {
      console.error("Error fetching albums:", err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <Container style={{ marginTop: "40px" }}>
      <InputGroup>
        <FormControl
          placeholder="Search For Artist"
          type="text"
          aria-label="Search for an Artist"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSearch}>Search</Button>
      </InputGroup>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
                {albums.map((album) => (
                  <div key={album.id} style={{ width: "150px", textAlign: "center" }}>
                    <img
                      src={album.image}
                      alt={album.name}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                    <p style={{ marginTop: "8px", fontWeight: "bold" }}>{album.name}</p>
                  </div>
                ))}
              </div>
    </Container>
  );
}

export default App;
