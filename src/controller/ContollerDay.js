import {get} from '../store/Schedule'


export const getFive = (credentials) =>async dispatch => {
  const response = await fetch("http://localhost:4502/api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => dispatch(get(data)));

  if (response.success) {
    console.log(response.data);
  }

  return response;
}
