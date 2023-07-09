import { Stack, Form, Button } from "react-bootstrap";
import { createRef } from 'react';
import Servers from "../components/Servers";
import SettingsDialog from '../components/SettingsDialog';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useQueryString } from '../hooks/useQueryString';

export default function Search() {
  const [page, setPage] = useQueryString("page", "1");
  const [perPage, setPerPage] = useQueryString("perPage", "50");
  const [searchQuery, setSearchQuery] = useQueryString("query", "");
  const [sortBy, setSortBy] = useQueryString("sortBy", "relevancy");
  const [serverStatus, setServerStatus] = useQueryString("status", "online");
  const [searchBy, setSearchBy] = useQueryString("searchBy", "normal");

  var image = new Image();
  image.src = 'searchBackground.png';
  image.onload = () => {
    document.body.style.backgroundImage = `url(${image.src})`;
  }

  const urlParams = new URLSearchParams(location.search);
  const searchFieldText = createRef<HTMLInputElement>();


  // @ts-ignore
  // @ts-ignore
  return <div style={{ padding: "15px" }}>
    <h1>Search Servers</h1>
    <h5>Try not to be too specific or too broad, there is a wide range of servers.</h5>
    <br />
    <Stack direction="horizontal" gap={2} >
      <Form.Control id="search" style={{ alignContent: "left" }} ref={searchFieldText} onKeyPress={e => {
        if (e.key === 'Enter') {
          // @ts-ignore
          setSearchQuery(searchFieldText.current ? searchFieldText.current.value : "");
          // @ts-ignore
          setPage(1);
        }
        // @ts-ignore
      }} placeholder="A really cool server" required type="text" defaultValue={urlParams.get('query') ? urlParams.get('query') : ""}></Form.Control>
      <Button variant="outline-primary" onClick={() => {
        // @ts-ignore
        setSearchQuery(searchFieldText.current ? searchFieldText.current.value : "");
        // @ts-ignore
        setPage(1);
      }}>Search</Button>
      <SettingsDialog perPage={perPage} setPerPage={setPerPage} sortBy={sortBy} setSortBy={setSortBy} setPage={setPage} searchBy={searchBy} setSearchBy={setSearchBy} serverStatus={serverStatus} setServerStatus={setServerStatus} />
    </Stack>
    <br />
    <Servers perPage={perPage} setPerPage={setPerPage} searchQuery={searchQuery} sortBy={sortBy} searchBy={searchBy} page={page} setPage={setPage} serverStatus={serverStatus}/>
  </div >;
}
