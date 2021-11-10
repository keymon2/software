import { setToken, getToken } from "../util.js";
import { getAll } from "./ContollerDay";

export async function loginUser(credentials) {
  const response = await fetch("http://localhost:4502/api/Login/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());

  if (response.success) {
    console.log(response.data);
    setToken(response.data);
  }

  return response;
}

export async function createUser(credentials) {
  return fetch("http://localhost:4502/api/User/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export async function getProfileUser() {
  const Token = getToken();
  console.log(Token);
  if (Token == false) return false;
  return fetch("http://localhost:4502/api/User/findId", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + Token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
}

export async function updateUser(credentials) {
  const Token = getToken();
  if (Token == false) return false;
  console.log(JSON.stringify(credentials));
  return fetch("http://localhost:4502/api/User/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + Token,
    },
    body: JSON.stringify(credentials),
  }).then((res) => res.json());
}
