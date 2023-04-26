import {
  Container,
  Button,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";

const ResetPasscodeForm = ({ onSubmit }) => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        my: 2,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">Reset Passcode</Typography>
      <FormControl>
        <TextField
          placeholder="Enter old passcode"
          fullWidth
          type="password"
          sx={{ mt: "16px" }}
        />
        <TextField
          placeholder="Enter new passcode"
          fullWidth
          type="password"
          sx={{ mt: "16px" }}
        />
        <TextField
          placeholder="Confirm old passcode"
          fullWidth
          type="password"
          sx={{ mt: "16px" }}
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ mt: "16px" }}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default ResetPasscodeForm;
