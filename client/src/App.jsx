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

      <div style={{ marginTop: "30px" }}>
        {albums.length > 0 ? (
          <ul>
            {albums.map((album) => (
              <li key={album.id}>{album.name}</li>
            ))}
          </ul>
        ) : (
          <p>No albums found yet.</p>
        )}
      </div>
    </Container>
  );
}

export default App;
