import { Button, Container, Drawer, Typography } from "@mui/material";
import Balance from "../../components/Balance";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useRouter } from "next/router";
import WithdrawalForm from "../../components/WithdrawalForm";
import apiWithdraw from "../../api/withdraw";

const Withdraw = () => {
  const { available, getToken, removeToken, setAvailable } =
    useContext(AuthContext);
  const [isToggleDrawer, setToggleDrawer] = useState(false);
  const [isWithdrawSuccess, setWithdrawSuccess] = useState(false);

  const token = getToken();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      removeToken();
      router.push("/login");
    }
  }, [token]);

  const onWithdrawSubmit = async ({ amount }) => {
    const res = await apiWithdraw(token, amount);
    if (res) {
      setAvailable(available - amount);
      setWithdrawSuccess(true);
    }
  };
  return (
    <>
      <Typography variant="h2">Withdraw</Typography>
      <Balance title="Amount For Withdrawal" available={available / 2} />
      <Button variant="contained" onClick={(_) => setToggleDrawer(true)}>
        Withdraw
      </Button>
      <Drawer
        anchor="bottom"
        open={isToggleDrawer}
        onClose={(_) => setToggleDrawer(false)}
      >
        {isWithdrawSuccess ? (
          <Container
            maxWidth="xs"
            sx={{
              my: 2,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2">Success!</Typography>
          </Container>
        ) : (
          <WithdrawalForm limit={available / 2} onSubmit={onWithdrawSubmit} />
        )}
      </Drawer>
    </>
  );
};

export default Withdraw;
