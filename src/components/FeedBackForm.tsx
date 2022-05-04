import { TextField } from "@mui/material";
import React from "react";
import feedbackStyle from "./CustomMUI/feedbackStyle";
import Button from "@mui/material/Button";

export default function FeedBackForm() {
  const { classes } = feedbackStyle();
  return (
    <>
      <h2>Övriga synpunkter eller frågor? Lämna gärna ett meddelande.</h2>
      <form
        action='https://formsubmit.co/83afa7b9f826648c2534bbfc2f3f3571'
        method='POST'
      >
        <TextField
          type='hidden'
          name='_next'
          value='/thanks'
          sx={{ display: "none" }}
        ></TextField>
        <TextField
          type='text'
          name='_honey'
          sx={{ display: "none" }}
        ></TextField>
        <TextField
          className={classes.name}
          label='Namn'
          name='name'
          fullWidth
          autoComplete='none'
          required
        />
        <TextField
          type='email'
          label='Email'
          name='email'
          fullWidth
          autoComplete='none'
          required
        />
        <TextField
          label='Meddelande'
          name='message'
          fullWidth
          multiline
          rows={8}
          required
        />
        <Button
          className={classes.cta_btn}
          variant='contained'
          size='large'
          type='submit'
        >
          Skicka
        </Button>
      </form>
    </>
  );
}
