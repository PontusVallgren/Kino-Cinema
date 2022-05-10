import React, { FormEvent, SyntheticEvent, useContext, useState } from "react";
import { LoggedInContext } from "./login/IsLoggedIn";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CustomText } from "./CustomMUI/CustomUI";

type ReviewProps = {
  id: string;
};

const ReviewForm: React.FC<ReviewProps> = ({ id }) => {
  const [input, setInput] = useState("");
  const [rating, setRating] = React.useState<number | null>(2);
  const { isLoggedIn, username } = useContext(LoggedInContext);
  const onChange = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setInput(value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch(`/api/movies/${id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
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
        <CustomText variant='h5'>Skriv en recension</CustomText>
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
        {isLoggedIn && (
          <Button type='submit' variant='contained' sx={{ width: "500px" }}>
            Skicka
          </Button>
        )}
        {!isLoggedIn && (
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Link href='/login' passHref>
              <Button variant='contained' sx={{ width: "150px" }}>
                LOGGA IN
              </Button>
            </Link>
            <CustomText style={{ marginLeft: "1em" }}>
              Logga in för att skriva en recension
            </CustomText>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ReviewForm;
