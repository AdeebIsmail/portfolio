import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import pdf from "./Adeebs_Resume.pdf";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
            spacing={0}
            style={{}}
          >
            
            {/* <Button variant="text" color="inherit" style={{ borderRadius: 0 }}>
              About
            </Button>
            <Divider orientation="vertical" flexItem></Divider> */}
            {/* <Button
              variant="text"
              color="inherit"
              style={{ borderRadius: 0 }}
              onClick={handleClickOpen}
            >
              Resume
            </Button> */}
          </Grid>
        </Toolbar>
      </AppBar>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Box display="flex" flexGrow={1}>
              <Typography variant="h6" component="div">
                Resume
              </Typography>
            </Box>

            <Box>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>{" "}
            </Box>
          </Toolbar>
        </AppBar>
        {/* <iframe
          src="https://drive.google.com/file/d/1JlALSfS6-ifE1ofqLAxsgjp2YM6QB5kN/preview"
          frameBorder="0"
          scrolling="auto"
          height="100%"
          width="100%"
          onload = "handleiframeload()"
        ></iframe> */}
        <object
          data="https://drive.google.com/file/d/1JlALSfS6-ifE1ofqLAxsgjp2YM6QB5kN/preview"
          width="100%"
          height="100%"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>
              Google pdf viewer isn't working,{" "}
              <a href={pdf}>click here to download the PDF file.</a>
            </p>{" "}
          </div>
        </object>
      </Dialog>
    </Box>
  );
}
