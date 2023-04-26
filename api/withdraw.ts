const apiWithdraw = async (token: string, amount: number) => {
  const res = await fetch("/api/v1/user/withdraw", {
    method: "POST",
    body: JSON.stringify({ amount }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (data.message === "success") {
    return true;
  }
  return false;
};

export default apiWithdraw;
