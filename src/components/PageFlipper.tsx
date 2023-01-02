import { Stack, Form, Button } from "react-bootstrap"
import { Component } from 'react'
import { useRef } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';


const PageFlipper = ({page, setPage, pages}) => {
  const pageFieldText = useRef();
  const handleSubmit = (pageNum) => {
    setPage(pageNum)
    window.scrollTo(0, 0)
  };

  return <section>
    <Button id="pageButton" variant="primary" disabled={parseInt(page) < 3} onClick={e => { handleSubmit(1) }}><MDBIcon fas icon="angle-double-left" /></Button>
    <Button id="pageButton" variant="primary" disabled={parseInt(page) <= 1} onClick={e => { handleSubmit(parseInt(page) - 1) }}><MDBIcon fas icon="angle-left" /></Button>
    <p id="pageNum">{parseInt(page)} / {pages}</p>
    <Button id="pageButton" variant="primary" disabled={parseInt(page) >= pages} onClick={e => { handleSubmit(parseInt(page) + 1) }}><MDBIcon fas icon="angle-right" /></Button>
    <Button id="pageButton" variant="primary" disabled={parseInt(page) > pages - 2} onClick={e => { handleSubmit(pages) }}><MDBIcon fas icon="angle-double-right" /></Button>
  </section>

}

export default PageFlipper;