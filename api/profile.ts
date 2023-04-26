const getProfile = async (token: string) => {
  const res = await fetch("/api/v1/user/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  if (data.message) {
    return null;
  }
  return data.data;
};

export default getProfile;
