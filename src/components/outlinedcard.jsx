import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pdf from "./Adeebs_Resume.pdf";
import { createTheme, ThemeProvider , responsiveFontSizes} from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// const themeText = createTheme();

// themeText.typography.body2 = {
//   fontSize: '1rem', // default font size for xs
//   [themeText.breakpoints.up('sm')]: {
//     fontSize: '.4rem', // font size for sm
//   },
//   [themeText.breakpoints.up('md')]: {
//     fontSize: '.5rem', // font size for md
//   },
//   [themeText.breakpoints.up('lg')]: {
//     fontSize: '.7rem', // font size for lg
//   },
//   [themeText.breakpoints.up('xl')]: {
//     fontSize: '1vw', // font size for xl
//   },
// };

let themeText = createTheme();
themeText = responsiveFontSizes(themeText);

const TextCard = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  const getWidth = () => {
    if (isXs) return "90vw";
    if (isSm) return "80vw";
    if (isMd) return "0vw";
    if (isLg) return "60vw";
    return "50vw";
  };

  const getHeight = () => {
    if (isSm) return "80vh";
    if (isMd) return "70vh";
    if (isLg) return "100vh";
    if (isXs) return "100vh";

    return "70vh";
  };

  const card = (
    <React.Fragment>
      <ThemeProvider theme={themeText}>
        <CardContent sx={{ width: "100vmin", }}>
          <Typography variant="h5" component="div">
            Howdy!
          </Typography>
          <Typography variant="h6">
            I'm Adeeb Ismail, a computer science student at the Texas A&M
            University, with a minor in statistics and cybersecurity. 
            I'm
            passionate about using technology to solve problems and make the
            world a better place. I'm interested in data science, software
            engineering, and cybersecurity. I have previous software engineering experience as an
            intern at Lockheed Martin. 
            I'm always looking for new
            opportunities to learn and grow, so feel free to check out my resume
            below!
          </Typography>
        </CardContent>
      </ThemeProvider>
    </React.Fragment>
  );


  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );};

export default TextCard;