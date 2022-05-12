import { TextField } from "@mui/material";
import React, { useState, FormEvent } from "react";
import feedbackStyle from "./CustomMUI/feedbackStyle";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function FeedBackForm() {
  const { classes } = feedbackStyle();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      let response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });
      let responseJson = await response.json();
      if (response.status === 200) {
        setName(""), setEmail("");
        setMessage("");
        router.push("/thanks");
      } else {
        setMessage(
          "oj, nu blev det fel. Kontrollera formuläret och försök igen."
        );
      }
    } catch (err) {
      console.log("something went wrong..");
    }
  };

  return (
    <>
      <h2 id="head_text">
        Övriga synpunkter eller frågor? Lämna gärna ett meddelande.
      </h2>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.name}
          type="text"
          label="Namn"
          value={name}
          name="username"
          id="input_name"
          onChange={(e) => setName(e.target.value)}
          fullWidth
          autoComplete="none"
          required
        />
        <TextField
          type="email"
          label="Email"
          name="Email"
          value={email}
          id="input_email"
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          autoComplete="none"
          required
        />
        <TextField
          type="text"
          label="Meddelande"
          name="message"
          value={message}
          id="input_message"
          fullWidth
          multiline
          rows={8}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button
          className={classes.cta_btn}
          variant="contained"
          size="large"
          type="submit"
        >
          Skicka
        </Button>
      </form>
    </>
  );
}
