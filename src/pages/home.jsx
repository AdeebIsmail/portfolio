import "../App.css";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TypeWriterEffect from "react-typewriter-effect";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Navbar from "../components/navbar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import {Article} from "@mui/icons-material";
import pdf from "../components/Adeebs_Resume.pdf";
import Card from "../components/outlinedcard";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import ResumeCard from "../components/resumecard";
import {ArrowDownward} from "@mui/icons-material/";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222222",
    },
  },
});

function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <Navbar></Navbar>

        <Grid
          container
          rowSpacing={1.5}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "70vh" }}
        >
          <Grid item xs={3}>
            <TypeWriterEffect
              textStyle={{ fontFamily: "Roboto" }}
              startDelay={0}
              cursorColor="white"
              text="Adeeb Ismail"
              typeSpeed={100}
            />
          </Grid>
          <Grid item xs={3}>
            {" "}
            <Chip
              href="https://devpost.com/software/seek-ju5cw8"
              component="a"
              label="Seek"
              variant="outlined"
              clickable
              style={{ marginTop: 5 }}
            />{" "}
            <Chip
              href="https://github.com/AdeebIsmail/ReFinance"
              component="a"
              label="ReFinance"
              variant="outlined"
              clickable
              style={{ marginTop: 5 }}
            />{" "}
            <Chip
              href="https://github.com/KshitijKapoor8/Giftin"
              component="a"
              label="Giftin"
              variant="outlined"
              clickable
              style={{ marginTop: 5 }}
            />{" "}
            <Chip
              component="a"
              label="Empath"
              variant="outlined"
              href="https://youtu.be/Ax-Rc4KPydk"
              clickable
              style={{ marginTop: 5 }}
            />{" "}
            <Chip
              component="a"
              href="https://github.com/SamrutGadde/OTHSCS"
              label="OTHSCS"
              variant="outlined"
              clickable
              style={{ marginTop: 5 }}
            />{" "}
          </Grid>
          <Grid item xs={2} sm={1} md={1} lg={0} xl={0.5}>
            <IconButton
              href="https://github.com/AdeebIsmail/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon></GitHubIcon>
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/adeeb-ismail-a87762276/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon></LinkedInIcon>
            </IconButton>
            <IconButton href={pdf} target="_blank" rel="noopener noreferrer">
              <Article></Article>
            </IconButton>
          </Grid>

          {/* <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
            spacing={0}
            style={{
              top: 0,
              position: "absolute",
            }}
          ></Grid> */}
        </Grid>
        <ScrollAnimation animateIn="bounce" initiallyVisible={true}>
          <ArrowDownward
            style={{ color: "white", fontSize: 50 }}
          ></ArrowDownward>
        </ScrollAnimation>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          style={{ minHeight: "100vh", marginTop: "10vh" }}
        >
          <ScrollAnimation animateIn="fadeIn">
            <Card></Card>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounce" initiallyVisible={true}>
            <ArrowDownward
              style={{ color: "white", fontSize: 50 }}
            ></ArrowDownward>
          </ScrollAnimation>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          style={{ minHeight: "100vh", marginTop: "10vh" }}
        >
          <ScrollAnimation animateIn="fadeIn">
            <ResumeCard></ResumeCard>
          </ScrollAnimation>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default Home;
