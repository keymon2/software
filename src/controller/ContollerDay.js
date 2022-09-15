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

export async function update(data) {
  const Token = getToken();
  const response = await fetch("http://localhost:4502/api/Day/create", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + Token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  if (response) {
    console.log("response ~~~~~~~~~~~~~~~~~");
    console.log(response);
  }
  return response;
}
export async function dele(data) {
  const Token = getToken();
  const response = await fetch("http://localhost:4502/api/Day/delete", {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + Token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res);

  if (response) {
    console.log("response ~~~~~~~~~~~~~~~~~");
    console.log(response);
  }
  return response;
}

export async function upda(data) {
  const Token = getToken();
  const response = await fetch("http://localhost:4502/api/Day/update", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + Token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res);

  if (response) {
    console.log("response ~~~~~~~~~~~~~~~~~");
    console.log(response);
  }
  return response;
}
