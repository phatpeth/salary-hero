import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import getProfile from "../../api/profile";
import UserAvatar from "../../components/UserAvartar";
import { useRouter } from "next/router";
import Balance from "../../components/Balance";
import Transaction from "../../components/Transaction";
import getTransactions from "../../api/transactions";

const Home = () => {
  const { getToken, removeToken, available, setAvailable } =
    useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const router = useRouter();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      removeToken();
      router.push("/login");
      return;
    }
  }, [token]);

  if (!profile) {
    getProfile(token).then((res) => {
      if (!res) {
        removeToken();
        router.push("/login");
      }
      setProfile(res);
    });
  }

  if (!transactions) {
    getTransactions(token).then((res) => {
      if (!res) {
        removeToken();
        router.push("/login");
      }

      setTransactions(res.transactions.reverse());
      setAvailable(res.available);
    });
  }

  if (!profile || !transactions) return <h2>Loading...</h2>;

  return (
    <>
      <UserAvatar firstname={profile.firstname} lastname={profile.lastname} />
      <Balance title="Available Balance" available={available} />
      <Transaction transactions={transactions} />
    </>
    // transaction and balance
  );
};

export default Home;
