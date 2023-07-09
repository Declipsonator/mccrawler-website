import { Stack, Button, Form } from "react-bootstrap"
import { createRef } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import * as Dialog from '@radix-ui/react-dialog';
import './style.css';

const SettingsDialog = ({ perPage, setPerPage, sortBy, setSortBy, searchBy, setSearchBy, setPage, serverStatus, setServerStatus }: any) => {

  const perPageNum = createRef<HTMLInputElement>();
  const sortByRef = createRef<HTMLSelectElement>();
  const searchByRef = createRef<HTMLSelectElement>();
  const serverStatusRef = createRef<HTMLSelectElement>();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline-primary"><MDBIcon fas icon="cog" /></Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <h1>Settings</h1>
          <br />
          <Stack direction="horizontal" gap={2} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <h5>Servers per page: </h5>
            <Form.Control ref={perPageNum} style={{ width: "100px" }} required type="number" defaultValue={perPage}></Form.Control>
          </Stack>
          <br />
          <Stack direction="horizontal" gap={2} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <h5>Sort By: </h5>
            <select ref={sortByRef} defaultValue={sortBy} className="form-control" style={{ width: "100px" }}>
              <option value="relevancy">Relevancy</option>
              <option value="playerCount">Player Count</option>
            </select>
          </Stack>
          <br />
          <Stack direction="horizontal" gap={2} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <h5>Search By: </h5>
            <select ref={searchByRef} defaultValue={searchBy} className="form-control" style={{ width: "100px" }}>
              <option value="normal">Normal</option>
              <option value="players">Players</option>
            </select>
          </Stack>
          <br />
          <Stack direction="horizontal" gap={2} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <h5>Server Status: </h5>
            <select ref={serverStatusRef} defaultValue={serverStatus} className="form-control" style={{ width: "100px" }}>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="all">All</option>
            </select>
          </Stack>
          <div style={{ flexDirection: "row", margin: "10px 10px 10px 10px" }}>
            <Dialog.Close asChild>
              <Button variant="btn btn-outline-danger" style={{ margin: "0px 10px 0px 10px", width: "30%" }} > Cancel </Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button variant="btn btn-outline-primary" style={{ margin: "0px 10px 0px 10px", width: "30%" }} onClick={() => {
                if ((perPageNum.current && perPageNum.current.value == perPage) && 
                    (sortByRef.current && sortByRef.current.value == sortBy) &&
                   (serverStatusRef.current && serverStatusRef.current.value == serverStatus) &&
                    (searchByRef.current && searchByRef.current.value == searchBy)) return;
                if (perPageNum.current) setPerPage(perPageNum.current.value);
                if (sortByRef.current) setSortBy(sortByRef.current.value);
                if (serverStatusRef.current) setServerStatus(serverStatusRef.current.value);
                if (searchByRef.current) setSearchBy(searchByRef.current.value);
                
                setPage(1);
              }}>  Done  </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );

}

export default SettingsDialog;
