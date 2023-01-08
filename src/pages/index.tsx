import { Nav, Navbar, Container } from "react-bootstrap"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './general.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div id="content">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MCCrawler</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="https://nowpayments.io/donation/McCrawler">Donate</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <App />
    </div>
    <Footer />
  </React.StrictMode>
)
