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
  const items = [];
  for (let i = 0; i < 30; i++) {
    items.push(<Item>{i + 1}</Item>);
  }
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
      {items}
    </Container>
  );
}

export default function Calendar() {
  return <CalendarContent />;
}
