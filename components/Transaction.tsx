import {
  Box,
  Card,
  CardContent,
  CardHeader,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { TTransaction } from "../types";

const Transaction: React.FC<{ transactions: TTransaction[] }> = ({
  transactions,
}) => {
  return (
    <Card variant="outlined" sx={{ my: "16px" }}>
      <CardHeader title="Transaction History" />
      <CardContent sx={{ maxHeight: "300px", overflow: "scroll" }}>
        {transactions.map((tran) => (
          <ListItem key={tran.uid} component="div" disablePadding>
            <ListItemText
              primary={
                <Box display="flex" justifyContent="space-between">
                  <Typography textAlign="left">{tran.date}</Typography>
                  <Typography textAlign="right">฿{tran.amount}</Typography>
                </Box>
              }
            />
          </ListItem>
        ))}
      </CardContent>
    </Card>
  );
};

export default Transaction;
