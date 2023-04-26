import { Container, Paper } from "@mui/material";
import React, { useContext } from "react";
import Navigation from "./Navigation";
import { AuthContext } from "../providers/AuthProvider";

const Layout = ({ children }) => {
  const { getToken } = useContext(AuthContext);
  const token = getToken();
  return (
    <Container
      maxWidth="xs"
      sx={{
        my: 2,
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {children}

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        // elevation={3}
      >
        {token && <Navigation />}
      </Paper>
    </Container>
  );
};

export default Layout;
