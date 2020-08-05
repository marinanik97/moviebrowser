import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  //   root: {
  //     maxWidth: 400,
  //     marginTop: 10,
  //     marginLeft: 10,
  //   },
  card: {
    // maxWidth: 345
    //width:300,
    width: 300,
    height: 600,
    // marginTop: 20,
    // marginLeft: 35,
    color: "#3f51b5",
    // backgroundColor: '#fce4ec',
    border: 0,
    borderRadius: 4,
    boxShadow: "1px 3px 5px 2px rgba(63, 81, 181, .3)",
    marginLeft: "20px",
    marginTop: "10px",
  },
  header: {
    width: 300,
    height: 80,
  },
  media: {
    width: "100%",
    minHeight: 364,
  },
  buttonShow: {
    margin: 5,
  },
  titleShow: {
    margin: 5,
  },
  foot: {
    width: 300,
    height: 20,
  },
});

export default function MovieCard({ Title, Poster, Type, Year, imdbID }) {
  const classes = useStyles();
  const API_KEY = "f57d537f";
  const [rate, setRate] = useState("");
  const [error, setError] = useState(null);
  const [plot,setPlot] = useState("");

  const showRate = () => {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
          console.log("error");
          console.log(imdbID);
        } else {
          console.log("success");
          setRate(response.imdbRating);
          setPlot(response.Plot);
        }
      })
      .catch(({ message }) => {});
    console.log(rate);
  };

  useEffect(() => {
    showRate();
  }, []);

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={
          <Typography variant="body2" component="h1">
            {Title}
          </Typography>
        }
        subheader={"Release: " + Year || "Unknown"}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          //   alt=""
          width="300"
          height="400"
          //450
          //   image="https://m.media-amazon.com/images/M/MV5BNjk2ODQzNDYxNV5BMl5BanBnXkFtZTgwMTcyNDg4NjE@._V1_SX300.jpg"
          //   title="Contemplative Reptile"
          alt={Title}
          src={
            Poster === "N/A"
              ? "https://placehold.it/198x264&text=Image+Not+Found"
              : Poster
          }
        />
        <CardContent>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography
          variant="body2"
          component="h1"
          className="foot"
          color="primary"
        >
          type: {Type}
        </Typography>
        <Typography
          variant="body1"
          component="h2"
          className="foot"
          color="primary"
        >
          IMDB rating: {rate}
        </Typography>
      </CardActions>
    </Card>
  );
}
