import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            About me
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume
          </Typography> */}

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
            spacing={0}
            style={{}}
          >
            <Button variant="text" color="inherit" style={{ borderRadius: 0 }}>
              About Me{" "}
            </Button>
            <Divider orientation="vertical" flexItem></Divider>
            <Button variant="text" color="inherit" style={{ borderRadius: 0 }}>
              Resume
            </Button>
            <Divider orientation="vertical" flexItem></Divider>
            <Button variant="text" color="inherit" style={{ borderRadius: 0 }}>
              Course Work
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
