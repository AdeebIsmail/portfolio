import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pdf from "./Adeebs_Resume.pdf";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ResumeCard = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  const getWidth = () => {
    if (isXs) return "90vw";
    if (isSm) return "80vw";
    if (isMd) return "70vw";
    if (isLg) return "60vw";
    return "50vw";
  };

  const getHeight = () => {
    if (isSm) return "120vmin";
    if (isMd) return "120vmin";
    if (isLg) return "120vmin";
    if (isXs) return "120vmin";

    return "130vmin";
  };

  const card = (
    <React.Fragment>
      <CardContent sx={{ width: "100vmin", height: getHeight() }}>
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
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );};

export default ResumeCard;