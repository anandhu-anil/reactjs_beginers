import { GET_ALL_USERS, SEND_USER_DETAILS } from "./Urls";

export async function getAllUsers() {
  const url = `${GET_ALL_USERS}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export async function sendUserDetail(PAYLOAD) {
  const url = `${SEND_USER_DETAILS}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: PAYLOAD,
  });
  const result = await response.json();
  return result;
}
