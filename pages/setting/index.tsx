import { Button, Drawer } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useRouter } from "next/router";
import ResetPasscodeForm from "../../components/ResetPassscodeForm";

const Setting = () => {
  const { removeToken } = useContext(AuthContext);
  const [isToggleDrawer, setToggleDrawer] = useState(false);
  const router = useRouter();

  const logout = () => {
    removeToken();
    router.replace("/login");
  };

  const onResetPasscodeSubmit = () => {
    setToggleDrawer(false);
  };

  return (
    <>
      <Button
        variant="text"
        sx={{ mb: "16px" }}
        onClick={() => setToggleDrawer(true)}
      >
        Reset Passcode
      </Button>

      <Button variant="contained" onClick={logout}>
        Logout
      </Button>

      <Drawer
        anchor="bottom"
        open={isToggleDrawer}
        onClose={(_) => setToggleDrawer(false)}
      >
        <ResetPasscodeForm onSubmit={onResetPasscodeSubmit} />
      </Drawer>
    </>
  );
};

export default Setting;
