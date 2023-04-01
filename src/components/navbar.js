import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ position: "fixed", top: 10, right: 10 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Resume
            </Typography>
          </Toolbar>
        </AppBar>
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
