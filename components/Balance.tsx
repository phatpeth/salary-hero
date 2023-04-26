import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const Balance: React.FC<{ available: number; title: string }> = ({
  available,
  title,
}) => {
  const date = new Date().toLocaleDateString("en-UK");

  return (
    <Card variant="outlined" sx={{ my: "16px" }}>
      <CardHeader title={title} subheader={date} />
      <CardContent>
        <Typography variant="h2" color="primary">
          ฿{available}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Balance;
