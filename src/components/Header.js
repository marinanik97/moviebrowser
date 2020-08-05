import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  titleSearch:{
    display: 'inline-block',
    justifyContent: 'center',
  },
  buttonShow:{
    marginLeft: 20,
  },
}));

export default function Header({titleSearch,yearSearch,genreSearch,actorsSearch}) {
  const classes = useStyles();
  const [title, setTitle]=useState("");
  const [year, setYear]=useState("");
  const [genre, setGenre]=useState("");
  const [actors, setActors]=useState("");

  const checkField = () => {
    // if(title != ""){
      titleSearch(title);
    // }
    
    // if(year != ""){
      yearSearch(year);
    // }
    console.log(title);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Pretraga filmova
          </Typography>
          <div className={classes.search}>
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
            {/* <Typography noWrap className={classes.titleSearch} variant="body1" noWrap>
            Title:
          </Typography> */}
            <TextField
             label="Title:"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              // onChange={value => searchHandler(value)}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className={classes.search}>
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
            {/* <Typography noWrap className={classes.titleSearch} variant="body1" noWrap>
            Title:
          </Typography> */}
            <TextField
             label="Year:"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              // onChange={value => searchHandler(value)}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </div>
          {/* <div className={classes.search}>
            <TextField
             label="Genre:"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
          </div>
          <div className={classes.search}>
            <TextField
             label="Actors:"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => {
                setActors(e.target.value);
              }}
            />
          </div> */}
          <Button className = {classes.buttonShow} color="primary" variant="contained" onClick = {checkField}>
            Search
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
