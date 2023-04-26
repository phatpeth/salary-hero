import { Avatar, Box, Typography } from "@mui/material";

const UserAvatar = ({ firstname, lastname }) => {
  return (
    <Box
      display="flex"
      columnGap="16px"
      alignItems="stretch"
      justifyContent="flex-end"
    >
      <Box>
        <Typography textAlign="right">{firstname}</Typography>
        <Typography textAlign="right">{lastname}</Typography>
      </Box>
      <Avatar
        alt={`${firstname} ${lastname}`}
        src="https://i.pravatar.cc/300"
        sx={{ width: 56, height: 56 }}
      />
    </Box>
  );
};

export default UserAvatar;
