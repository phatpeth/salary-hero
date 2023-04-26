import { Container, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const WithdrawalForm = ({ limit, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

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
      <Typography component="p">You can withdraw up to {limit} Baht</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("amount", { required: true, min: 1, max: limit })}
          placeholder="Fill withdrawal amount"
          fullWidth
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ mt: "16px" }}
          disabled={!isValid}
        >
          Withdraw
        </Button>
      </form>
    </Container>
  );
};

export default WithdrawalForm;
