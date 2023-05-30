import React, { useState } from 'react';
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
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import pdf from './resume.pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
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
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
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
              About
            </Button>
            <Divider orientation="vertical" flexItem></Divider>
            <Button
              variant="text"
              color="inherit"
              style={{ borderRadius: 0 }}
              onClick={handleClickOpen}
            >
              Resume
            </Button>

            {/* <Divider orientation="vertical" flexItem></Divider>
            <Button
              variant="text"
              color="inherit"
              style={{ borderRadius: 0 }}
              onClick={handleClickOpen}
            >
              Projects
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
            <Box display='flex' flexGrow={1}>             
              <Typography variant="h6" component="div">
              Resume
            </Typography></Box>

            <Box><IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton> </Box>
          </Toolbar>
        </AppBar>
        <iframe
          src="https://drive.google.com/file/d/1JlALSfS6-ifE1ofqLAxsgjp2YM6QB5kN/preview"
          frameBorder="0"
          scrolling="auto"
          height="100%"
          width="100%"
        ></iframe>
 {/* <iframe
            src={pdf}
            type='application/pdf'
            title='title'
            frameBorder="0"
            scrolling="auto"
            height="100%"
            width="100%"
          />    */}
          
          {/* <div class="" style={{ height: "100%" , backgroundColor : "white"}}>
        <embed
          src={pdf}
          type="application/pdf"
          width="100%"
          height="100%"
        />
</div> */} 
{/* <div    >      <Document file={pdf}>
        <Page pageNumber={1} width="300"/>
      </Document> </div> */}


          {/* <object data={pdf} width={"100%"} height={"100%"} type="application/pdf" style = {{backgroundColor : "white"}} ></object> */}
          
            {/* <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Card
            sx={{
              maxWidth: 345,
              marginTop: "1vh",
              marginBottom: "1vh",
              marginLeft: "1vw",
              marginRight: "1vw",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://user-images.githubusercontent.com/51217487/99621152-c2135680-29ec-11eb-926a-a18cb2c9038c.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Refinance
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Website made users improve there personal finance by helping
                budget and save money.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              marginTop: "1vh",
              marginBottom: "1vh",
              marginLeft: "1vw",
              marginRight: "1vw",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://user-images.githubusercontent.com/51217487/103327607-dc444980-4a1a-11eb-863c-5bd4255e7e88.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Giftin
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A novel new platform in which users can view exactly what other
                users want and manage their own wishlists.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              marginTop: "1vh",
              marginBottom: "1vh",
              marginLeft: "1vw",
              marginRight: "1vw",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://user-images.githubusercontent.com/51217487/99621152-c2135680-29ec-11eb-926a-a18cb2c9038c.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Refinance
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Website made users improve there personal finance by helping
                budget and save money.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              marginTop: "1vh",
              marginBottom: "1vh",
              marginLeft: "1vw",
              marginRight: "1vw",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://user-images.githubusercontent.com/51217487/99621152-c2135680-29ec-11eb-926a-a18cb2c9038c.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Refinance
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Website made users improve there personal finance by helping
                budget and save money.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              marginTop: "1vh",
              marginBottom: "1vh",
              marginLeft: "1vw",
              marginRight: "1vw",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://user-images.githubusercontent.com/51217487/99621152-c2135680-29ec-11eb-926a-a18cb2c9038c.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Refinance
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Website made users improve there personal finance by helping
                budget and save money.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid> */}
      </Dialog>
    </Box>
  );
}
