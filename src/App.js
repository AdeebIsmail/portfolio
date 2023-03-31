import "./App.css";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TypeWriterEffect from "react-typewriter-effect";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Navbar from "./components/navbar";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Chip from "@mui/material/Chip";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222222",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        {/* <Navbar></Navbar> */}
        <Grid
          container
          // spacing={1.5}
          rowSpacing={1.5}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <TypeWriterEffect
              textStyle={{ fontFamily: "Roboto" }}
              startDelay={0}
              cursorColor="white"
              text="Adeeb Ismail"
              typeSpeed={100}
            />
            {/* <Typography variant="h4" component="h2">
              Adeeb Ismail
            </Typography> */}
          </Grid>
          {/* <Grid item xs={3} spacing={7}>
            <Chip label="Clickable" variant="outlined" />{" "}
            <Chip label="Clickable" variant="outlined" />{" "}
          </Grid> */}

          <Grid item xs={3}>
            {" "}
            <Chip
              label="ReFinance"
              variant="outlined"
              onClick={(event) =>
                window.open("https://github.com/AdeebIsmail/ReFinance")
              }
              clickable
            />{" "}
            <Chip
              label="Giftin"
              variant="outlined"
              onClick={(event) =>
                window.open("https://github.com/KshitijKapoor8/Giftin")
              }
              clickable
            />{" "}
            <Chip
              label="Empath"
              variant="outlined"
              onClick={(event) =>
                window.open("https://github.com/KshitijKapoor8/Project")
              }
              clickable
            />{" "}
            <Chip
              label="LeetClone"
              variant="outlined"
              onClick={(event) =>
                window.open("https://github.com/AdeebIsmail/leetclone-spotify")
              }
              clickable
            />{" "}
            <Chip
              label="OTHSCS"
              variant="outlined"
              onClick={(event) =>
                window.open("https://github.com/SamrutGadde/OTHSCS")
              }
              clickable
            />{" "}
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            spacing={6}
          >
            <Grid item xs={2} sm={1} md={1} xl={0.5}>
              <IconButton
                href="https://github.com/AdeebIsmail/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon></GitHubIcon>
              </IconButton>
            </Grid>
            {/* <Grid item xs={0.5}>
              <EmailIcon></EmailIcon>
            </Grid> */}
            <Grid item xs={2} sm={1} md={1} xl={0.5}>
              <IconButton
                href="https://github.com/AdeebIsmail/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon></LinkedInIcon>
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
            spacing={0}
            style={{
              top: 0,
              position: "absolute",
            }}
          >
            <Navbar></Navbar>
            {/* <Grid item xs md={2} sm={2} xl={1}>
              <Typography variant="subtitle1" component="h2">
                About me
              </Typography>
            </Grid>
            <Grid item xs md={2} sm={2} xl={1}>
              <Typography variant="subtitle1" component="h2">
                Resume
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
