import React, { FormEvent, SyntheticEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
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
  };

  return (
    <>
      <h1>Skriv en recension</h1>
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { m: 1, width: "500px" },
        }}
        noValidate
        autoComplete='off'
        method='POST'
        onSubmit={onSubmit}
      >
        <Typography component='legend'>Rating</Typography>
        <Rating
          name='simple-controlled'
          value={rating}
          onChange={(event, newRating) => {
            setRating(newRating);
          }}
        />
        <TextField
          id='outlined-multiline-static'
          label='Kommentar'
          multiline
          rows={4}
          onChange={onChange}
          defaultValue={input}
        />
        <Button type='submit' variant='contained'>
          Skicka
        </Button>
      </Box>
    </>
  );
};

export default ReviewForm;
