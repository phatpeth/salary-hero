import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FormControl from "@mui/material/FormControl";
import { AuthContext } from "../../providers/AuthProvider";
import { useRouter } from "next/router";
import loginWithPhoneNo from "../../api/login";
import dynamic from "next/dynamic";

const Passcode = dynamic(() => import("../../components/Passcode"));

const Login = () => {
  const { getToken, storeToken } = useContext(AuthContext);
  const [tempToken, setTempToken] = useState("");
  const [phoneNo, setPhoneNo] = useState(null);
  const [otpStep, setOtpStep] = useState(false);
  const router = useRouter();

  if (getToken()) {
    return (
      <>
        <Passcode
          title="Enter Passcode"
          handleComplete={() => router.push("/home")}
          password={true}
        />
      </>
    );
  }

  const onSubmit = async (_) => {
    const newToken = await loginWithPhoneNo(phoneNo);
    if (newToken) {
      setTempToken(newToken);
      setOtpStep(true);
      // router.push("/home");
    } else {
      // error occur
    }
  };

  const handleOTPComplete = () => {
    storeToken(tempToken);
    router.push("/home");
  };

  return (
    <>
      {otpStep ? (
        <Passcode title="Enter OTP" handleComplete={handleOTPComplete} />
      ) : (
        <FormControl sx={{ rowGap: "20px" }}>
          <Box
            mt={3}
            sx={{
              ".react-tel-input .form-control": {
                height: "50px",
                width: "100%",
                fontSize: "24px",
              },
            }}
          >
            <PhoneInput
              country={"th"}
              value={phoneNo}
              onChange={(phone) => {
                setPhoneNo(phone);
              }}
              placeholder="Enter phone number"
            />
          </Box>
          {/* <FormHelperText color="error">Something went wrong</FormHelperText> */}
          <Button variant="contained" type="submit" onClick={onSubmit}>
            Login
          </Button>
        </FormControl>
      )}
    </>
  );
};

export default Login;
