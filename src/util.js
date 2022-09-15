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

export function getTextColorByBackgroundColor(hexColor) {
  const c = hexColor.substring(1); // 색상 앞의 # 제거
  const rgb = parseInt(c, 16); // rrggbb를 10진수로 변환
  const r = (rgb >> 16) & 0xff; // red 추출
  const g = (rgb >> 8) & 0xff; // green 추출
  const b = (rgb >> 0) & 0xff; // blue 추출
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  // 색상 선택
  return luma;
  // return luma < 127.5 ? "white" : "black"; // 글자색이
}
