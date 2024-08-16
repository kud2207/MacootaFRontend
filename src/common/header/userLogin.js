import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { LiaUserTimesSolid } from "react-icons/lia";
import axios from "axios";
import UserLoginIn from "./userLoginIn";

export default function UserRegister() {
  const [open, setOpen] = React.useState(false);
  const [errorRegistre, setErrorRegistre] = React.useState("");

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      setErrorRegistre("Passwords do not match.");
      return;
    }

    try {
      const url = "http://localhost:3001/api/users/";
      const { firstName, lastName, email, password } = formData;
    await axios.post(url, {
        firstName,
        lastName,
        email,
        password,
      });
      
      setErrorRegistre("");
      handleClose();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorRegistre(error.response.data.message);
      } else {
        setErrorRegistre("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <React.Fragment>
      <span
        onClick={handleClickOpen}
        style={{ color: "gray", cursor: "pointer" }}
      >
        <LiaUserTimesSolid size={40} />
      </span>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Create Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the following details to create your account.
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="firstName"
                name="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                margin="dense"
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                margin="dense"
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                margin="dense"
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                margin="dense"
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <DialogContentText style={{ color: "red" }}>
            {errorRegistre}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Register</Button>
        </DialogActions>
        <DialogContent>
          <DialogContentText>
            Already have an account?  <UserLoginIn />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
