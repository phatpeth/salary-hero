import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, FormHelperText, Typography } from "@mui/material";

const Passcode: React.FC<{
  handleComplete: () => void;
  title: string;
  password?: boolean;
}> = ({ handleComplete, title, password = false }) => {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);

  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };

  const onComplete = (value: string) => {
    if (value === "1234") {
      handleComplete();
    } else {
      setOtpError(true);
    }
  };
  return (
    <Box>
      <Typography variant="h1" mb="16px">
        {title}
      </Typography>
      <MuiOtpInput
        sx={{ gap: 1 }}
        value={otp}
        length={4}
        onComplete={onComplete}
        TextFieldsProps={{
          error: otpError,
          type: password ? "password" : "number",
        }}
        onChange={handleChange}
      />
      {otpError && <FormHelperText error>invalid</FormHelperText>}
    </Box>
  );
};

export default Passcode;
