export function setToken(token) {
  sessionStorage.setItem("token", JSON.stringify(token));
}

export function getToken() {
  const tokenString = JSON.parse(sessionStorage.getItem("token"));
  if (tokenString) return tokenString;
  else {
    return false;
  }
}
export function setSchedule(data) {
  sessionStorage.setItem("schedule", JSON.stringify(data));
}
export function getSchedule() {
  return JSON.parse(sessionStorage.getItem("schedule"));
}
export function removeToken() {
  sessionStorage.removeItem("token");
}
