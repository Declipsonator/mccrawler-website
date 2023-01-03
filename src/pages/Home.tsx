import { Stack, Form, Button, Alert, Nav, Navbar, Container, NavDropdown, Offcanvas } from "react-bootstrap";
import { createRef } from "react";

export default function Home() {
  const image = new Image();
  image.src = 'https://i.imgur.com/E1Ta1gf.png';
  image.onload = () => {
    document.body.style.backgroundImage = `url(${image.src})`;
  }

  const searchFieldText = createRef<HTMLInputElement>();
  const urlParams = new URLSearchParams(location.search);

  const handleSubmit = () => {
    var perPage = urlParams.set('query', searchFieldText.current ? searchFieldText.current.value : "");
    const url = window.location.protocol + "//" +
      window.location.host +
      "/search?" +
      urlParams.toString();
    console.log(url);
    window.location.href = url;
  };


  return <div id="home" style={{ padding: "15px" }}>
    <h1>Welcome, Crafter!</h1>
    <h4>Welcome to a collection of 100,000+ Minecraft Servers.</h4>
    <br />
    <Stack direction="horizontal" gap={2} >
      <Form.Control id="search" ref={searchFieldText} onKeyPress={e => {
        if (e.key == 'Enter') {
          handleSubmit();
        }
      }} placeholder="A really cool server" required type="text"></Form.Control>
      <Button variant="outline-primary" onClick={handleSubmit}>Search</Button>
    </Stack>
    <br />
    <br />
    <h5>Mccrawler is a collection of Minecraft servers that have been scraped off of the internet or been downloaded from iot search websites like Shodan. Using github actions, the servers are updated once per hour to see if they have new players, new descriptions, or if they're even still online.</h5>
  </div>;
}


