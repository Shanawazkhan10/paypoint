import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [Password, setPassword] = React.useState("");

  // const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "admin" && Password === "admin") {
      navigate("/Dashboard");
      localStorage.setItem("valid", true);
    } else {
      alert("Invalid Credential");
    }
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={true}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{ textAlign: "center", borderRadius: 15 }} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            LOGIN
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              value={name}
              label="Username"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <br />
            <TextField
              value={Password}
              label="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
            <Button
              style={{ backgroundColor: "#1976D2", color: "white" }}
              onClick={(e) => handleSubmit(e)}
            >
              LOGIN
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
