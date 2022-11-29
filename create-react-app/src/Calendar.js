import * as React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CalendarContent() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "grid",
        "grid-template-columns": "repeat(7, 1fr)",
        "grid-template-rows": "repeat(4, 1fr)",
        mt: 4,
        mb: 4,
        gap: 2,
      }}
    >
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
      <Item>6</Item>
      <Item>7</Item>
      <Item>8</Item>
      <Item>9</Item>
    </Container>
  );
}

export default function Calendar() {
  return <CalendarContent />;
}
