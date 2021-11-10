import { setToken, getToken } from "../util.js";

export async function getAll() {
  const Token = getToken();
  const response = await fetch("http://localhost:4502/api/Day/all", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + Token,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  if (response) {
    console.log("response ~~~~~~~~~~~~~~~~~");
    console.log(response);
  }
  return response;
}
