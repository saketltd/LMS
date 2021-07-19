import React from "react";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../public/img/Truelessons logo.png";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Container, Typography } from "@material-ui/core";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import UpdateIcon from "@material-ui/icons/Update";
import headerImage from "../public/img/photodune-4161018-group-of-students-m.jpg";

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Button>
            <img src={logo} alt="True Lessons" className={classes.logo} />
          </Button>
          <div className={classes.title}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Courses</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Contact Us</Button>
          </div>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="false" className={classes.header}>
        <div
          style={{
            backgroundColor: "#cfe8fc",
            height: "55vh",
            display: "flex",
          }}
          className={classes.headerImage}
        >
          <div style={{ backgroundColor: "#3f8cb5d1", height: "100%" }}>
            <MuiThemeProvider theme={theme}>
              <div
                style={{
                  padding: "7rem 1.5rem",
                  textAlign: "left",
                  margin: "auto 20rem",
                  color: "white",
                }}
              >
                <Typography
                  variant="h2"
                  style={{ fontWeight: "bold", marginBottom: "1rem" }}
                >
                  Learn to Code
                </Typography>
                <Typography
                  variant="h5"
                  style={{ marginBottom: "3rem", marginRight: "30rem" }}
                >
                  Business, Technology and Creative Skills taught by industry
                  experts. Explore a wide range of skills with our professional
                  tutorials.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  style={{ marginBottom: "1rem" }}
                >
                  Browse Courses
                </Button>
                <a href="/#" style={{ color: "white", textDecoration: "none" }}>
                  <Typography>Are you a teacher?</Typography>
                </a>
              </div>
            </MuiThemeProvider>
          </div>
        </div>
      </Container>
      <div className="bg-white border-bottom-2 pt-3 pb-3">
        <div className="container" style={{ fontFamily: "'Exo 2'" }}>
          <div className="row">
            <div class="d-flex col-md align-items-center border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
              <div
                class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  marginRight: 12,
                }}
              >
                <SubscriptionsIcon style={{ color: "white" }} />
              </div>
              <div class="flex">
                <div class="card-title mb-4pt" style={{ fontWeight: "bold" }}>
                  8,000+ Courses
                </div>
                <p
                  class="card-subtitle text-black-70"
                  style={{ fontSize: 12, color: "gray" }}
                >
                  Explore a wide range of skills.
                </p>
              </div>
            </div>
            <div class="d-flex col-md align-items-center border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
              <div
                class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  marginRight: 12,
                }}
              >
                <VerifiedUserIcon style={{ color: "white" }} />
              </div>
              <div class="flex">
                <div class="card-title mb-4pt" style={{ fontWeight: "bold" }}>
                  By Industry Experts
                </div>
                <p
                  class="card-subtitle text-black-70"
                  style={{ fontSize: 12, color: "gray" }}
                >
                  Professional development from the best people.
                </p>
              </div>
            </div>
            <div class="d-flex col-md align-items-center border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
              <div
                class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  marginRight: 12,
                }}
              >
                <UpdateIcon style={{ color: "white" }} />
              </div>
              <div class="flex">
                <div class="card-title mb-4pt" style={{ fontWeight: "bold" }}>
                  Unlimited Access
                </div>
                <p
                  class="card-subtitle text-black-70"
                  style={{ fontSize: 12, color: "gray" }}
                >
                  Unlock Library and learn any topic with one subscription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Exo 2'",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    padding: 0,
  },
  headerImage: {
    backgroundImage: `url(${headerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    width: "100px",
  },
  title: {
    flexGrow: 1,
  },
}));
