import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";


const stackSX = {
  display: "flex",
  alignItems: "center",
  minHeight: "200px",
  boxShadow: 3,
  "&:hover": {  
    border: "2px solid #00FF00",
    color: "black",
    backGroundColor: "lightblue",
  }
}

export default function ProductsCard({ title, price, image, link, market }) {

  return (
    <Grid item md={7} xs={12} bgcolor="white" sx={stackSX} borderRadius="8px">
        <Box src={image} alt={title} sx={{ width: "30%", objectFit: "contain", overflow: "hidden", maxHeight: "190px"}} component="img"/>
      <Stack direction={{xs: "column", md: "row"}} spacing={2} sx={{width: "67%"}} justifyContent="space-evenly">
        <Typography variant="subtitle1" sx={{width: { xs: "100%", md: "70%"}}}>{title}</Typography>
        <Stack direction="column" sx={{width: { xs: "100%", md: "30%"}}} alignItems="flex-end">
        <Typography sx={{fontWeight: 'bold'}} variant="h6">  
          {Number(price.replace(".", "").replace(",", ".")).toLocaleString(
            "pt-BR",
            { style: "currency", currency: "BRL" }
          )}
        </Typography>
        <Stack direction={{xs: "row", md: "column"}} spacing={2} alignItems="center">
        <Typography>{market}</Typography>
        <Button variant="contained" href={`${link}`} target="_blank">
          Ir a web
        </Button>
        </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}
