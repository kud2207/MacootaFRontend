import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import axios from "axios";

export default function UserLoginIn() {
  const [open, setOpen] = useState(false);
  //error
  const [errorLogin, setErrorLogin] = useState("");

//navigation

  const [formData, setFormData] = useState({
    email: "ulrichkageu@gmail.com",
    password: "KAGEUulrich--2002",
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
    try {
      const url = "http://localhost:3001/api/users/login";
      const { email, password ,} = formData;
       await axios.post(url, { email, password });
      localStorage.setItem("userEmail", email);
      console.log(formData.email, formData.password); 
      alert(localStorage.getItem('userEmail'))

     setErrorLogin("");
      handleClose();
    //condition de navigation


      // Réinitialiser le formulaire après la connexion réussie
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
        //affiche les erro du backend
      if (error.response && error.response.data) {
        setErrorLogin(error.response.data.message);
      } else {
        setErrorLogin("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>

      </Button>
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
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email and password to log in.
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
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
          </Grid>
          <DialogContentText style={{ color: "red" }}>
            {errorLogin}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Login</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
