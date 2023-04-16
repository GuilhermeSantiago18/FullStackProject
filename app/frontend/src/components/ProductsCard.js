import React from "react";
import { Button, Stack, Typography } from "@mui/material";

export default function ProductsCard({ title, price, image, link, market }) {
  return (
    <>
      <Stack
        direction="column"
        // justifyContent="center"
        // alignItems="center"
        spacing={2}
      >
        <Typography variant="subtitle1">{title}</Typography>
        <img src={image} alt={title} width="150px" />
        <Typography>
          {Number(price.replace(".", "").replace(",", ".")).toLocaleString(
            "pt-BR",
            { style: "currency", currency: "BRL" }
          )}
        </Typography>
        <Typography>{market}</Typography>
      </Stack>
      <Button variant="contained" href={`${link}`} target="_blank">
        Ir a web
      </Button>
    </>
  );
}
