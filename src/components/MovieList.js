import React, { Fragment } from "react";
import MovieCard from "./MovieCard";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import Loader from "react-loader-spinner";
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootPagination: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    display: "block",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 10,
  },
  gridEdit: {
    margin: "auto",
    justifyContent: "center",
  },
}));

export default function MovieList({ loading, data, rate, error }) {
  const classes = useStyles();

  return (
    <Fragment>
      <div
        className={classes.root}
        style={{ marginBottom: "50px", paddingTop: "30px" }}
      >
        {/* <Grid container spacing={1}> */}
        <Grid container item xs={6} spacing={3} className={classes.gridEdit}>
          {loading && <Loader />}
          {error !== null && (
            <div style={{ margin: "20px 0" }}>
              
              <Alert severity="error">
              {error}
                
              </Alert>
            </div>
          )}
          {data !== null &&
            data.length > 0 &&
            data.map((result, index) => <MovieCard {...result} />)}
        </Grid>
        {/* </Grid> */}
      </div>
    </Fragment>
  );
}
