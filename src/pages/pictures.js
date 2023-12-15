import "../App.css";
import { React, useState, useRef } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { CoPresentSharp } from "@mui/icons-material";
import picture1 from "../pictures/IMG_8806.jpg";
import picture2 from "../pictures/IMG_3699.jpg";
import picture3 from "../pictures/IMG_3739.jpg";
import picture4 from "../pictures/IMG_3814.jpg";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222222",
    },
  },
});

function Pictures() {
  // const copyToClip = (id) => {
  //   const url = window.location.href;
  //   navigator.clipboard.writeText(url + id);
  // };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Card sx={{ maxWidth: 400, marginTop: "1em" }}>
          <CardMedia sx={{ height: 400, width: 400 }} image={picture1} />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontStyle: "italic" }}
              align="center"
            >
              “We wants it, we needs it. Must have the precious.” — Gollum
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400, marginTop: "1em" }}>
          <CardMedia sx={{ height: 400, width: 400 }} image={picture2} />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontStyle: "italic" }}
              align="center"
            >
              whaaaattt????
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400, marginTop: "1em" }}>
          <CardMedia sx={{ height: 400, width: 400 }} image={picture3} />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontStyle: "italic" }}
              align="center"
            >
              oh ok
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400, marginTop: "1em" }}>
          <CardMedia sx={{ height: 400, width: 400 }} image={picture4} />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontStyle: "italic" }}
              align="center"
            >
              uhhh no
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </ThemeProvider>
  );
}
export default Pictures;
