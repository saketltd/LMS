import React from "react";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Header from "../../containers/Header";
import { Container, Typography } from "@material-ui/core";
import headerImage from "../../public/img/photodune-4161018-group-of-students-m.jpg";

export default function HeaderBaner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
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
                  style={{
                    marginBottom: "1rem",
                    backgroundColor: "white",
                    fontWeight: "bold",
                  }}
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
