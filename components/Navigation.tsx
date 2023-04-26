import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import WithdrawIcon from "@mui/icons-material/MonetizationOn";
import Link from "next/link";

const Navigation = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          label="Home"
          icon={<HomeIcon />}
          href="/home"
        />
        <BottomNavigationAction
          component={Link}
          label="Withdraw"
          icon={<WithdrawIcon />}
          href="/withdraw"
        />
        <BottomNavigationAction
          component={Link}
          label="Setting"
          icon={<SettingsIcon />}
          href="/setting"
        />
      </BottomNavigation>
    </Box>
  );
};

export default Navigation;
