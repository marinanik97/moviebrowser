import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Loader from "react-loader-spinner";
import MovieList from "./components/MovieList";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 10,
  },
  paginationEdit: {
    margin: "auto",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  const API_KEY = "f57d537f";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQuery] = useState("batman");
  // const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [numberOfPages, setNumbeOfPages] = useState(1);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);
    setNumbeOfPages(1);

    fetch(
      `http://www.omdbapi.com/?s=${q}&page=${page}&y=${year}&apikey=${API_KEY}`
    )
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Search);
          let number = response.totalResults;
          if (number % 10 == 0) {
            number = number / 10;
          } else {
            number = parseInt(number / 10) + 1;
          }
          setNumbeOfPages(number);
        }

        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });

    console.log(page);
    console.log(numberOfPages);
    console.table(data);
  }, [q, page]);

  const showTitle = () => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(`http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Search);
        }

        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
    console.log(data);
  };

  const showYear = () => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(`http://www.omdbapi.com/?s=${title}&y=${year}&apikey=${API_KEY}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Search);
        }

        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
    console.log(data);
  };

  const showGenre = () => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Search);
        }

        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  };

  console.table(data);
  return (
    <div>
      <Header titleSearch={setQuery} yearSearch={setYear}></Header>
      <MovieList data={data} loading={loading} error={error}></MovieList>

      <div className={classes.rootPagination}>
        <Pagination
          count={numberOfPages}
          page={page}
          onChange={handleChange}
          shape="rounded"
          color="primary"
        />
      </div>
    </div>
  );
}

export default App;
