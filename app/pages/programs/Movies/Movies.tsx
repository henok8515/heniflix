import React from "react";
import Card from "../../../components/Card";
import Link from "next/link";

import { Typography } from "@mui/material";

const Movie = async () => {
  const url = "https://movies-api14.p.rapidapi.com/movies";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ed9b763790mshe5f78dc545e2f88p1d25acjsnbc3ae9144a63",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = await result.movies;

    return (
      <div className="h-screen flex justify-center items-center   flex-wrap">
        {/* <Link href="/pages/programs/home">go back</Link> */}
        <Typography variant="h2">Movies</Typography>

        <div className="flex w-full flex-wrap justify-center items-center">
          {data.map((name: any) => (
            <Card name={name} key={name._id} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
  }
};

export default Movie;
