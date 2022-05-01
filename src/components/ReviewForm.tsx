import React, { FormEvent, SyntheticEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

type ReviewProps = {
  id: string;
};

const ReviewForm: React.FC<ReviewProps> = ({ id }) => {
  const [input, setInput] = useState("");
  const [rating, setRating] = React.useState<number | null>(2);
  const onChange = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setInput(value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/api/movies/${id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Kalle", // Change to current username
        rating: rating,
        comment: input,
      }),
    });
    setInput("");
  };

  return (
    <>
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": {
            width: "500px",
          },
          display: "flex",
          flexDirection: "column",
          paddingX: 10,
          paddingBottom: 2,
          color: "white",
        }}
        noValidate
        autoComplete='off'
        method='POST'
        onSubmit={onSubmit}
      >
        <h1>Skriv en recension</h1>
        <Rating
          name='simple-controlled'
          value={rating}
          onChange={(event, newRating) => {
            setRating(newRating);
          }}
          sx={{
            paddingY: 1,
          }}
        />
        <TextField
          id='outlined-multiline-static'
          label='Kommentar'
          multiline
          rows={4}
          onChange={onChange}
          value={input}
          sx={{
            paddingBottom: 1,
          }}
        />
        <Button type='submit' variant='contained' sx={{ width: "500px" }}>
          Skicka
        </Button>
      </Box>
    </>
  );
};

export default ReviewForm;
