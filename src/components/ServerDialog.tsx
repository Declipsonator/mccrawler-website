import { Stack, Button, Form } from "react-bootstrap"
import { useRef } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import * as Dialog from '@radix-ui/react-dialog';
import './style.css';

const SettingsDialog = ({ perPage, setPerPage, sortBy, setSortBy, setPage }) => {

  const perPageNum = useRef();
  const sortByRef = useRef();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline-primary" height="18px"><MDBIcon fas icon="cog" /></Button>
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
            <h5>Sort by: </h5>
            <select ref={sortByRef} defaultValue={sortBy} className="form-control" style={{ width: "100px" }}>    test
              <option value="relevancy">Relevancy</option>
              <option value="playerCount">Player Count</option>
            </select>
          </Stack>
          <div style={{ flexDirection: "row", margin: "10px 10px 10px 10px" }}>
            <Dialog.Close asChild>
              <Button variant="btn btn-outline-danger" style={{ margin: "0px 10px 0px 10px", width: "30%" }} > Cancel </Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button variant="btn btn-outline-primary" style={{ margin: "0px 10px 0px 10px", width: "30%" }} onClick={() => {
                if (perPageNum.current.value == perPage && sortByRef.current.value == sortBy) return;
                setPerPage(perPageNum.current.value);
                setSortBy(sortByRef.current.value);
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
