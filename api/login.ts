const loginWithPhoneNo = async (phone: string) => {
  const res = await fetch("/api/v1/signin", {
    method: "POST",
    body: JSON.stringify({ phone }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (data.message) {
    // throw new Error(data.message);
    return null;
  }
  return data.data.token;
};

export default loginWithPhoneNo;
