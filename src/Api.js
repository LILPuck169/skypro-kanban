export let token;
// "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

export const API_URL = "https://wedev-api.sky.pro/api/kanban";
const API_URL_USER = "https://wedev-api.sky.pro/api/user";

export async function getKanban({ user }) {
  token = user.token;

  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status !== 200) {
    throw new Error("Нет авторизации");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function postKanban(text) {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      text,
    }),
  });

  if (response.status !== 201) {
    throw new Error("Нет авторизации");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function loginKanban({ login, password }) {
  const response = await fetch(API_URL_USER + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error("Нет авторизации");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function registerKanban({ login, name, password }) {
  const response = await fetch(API_URL_USER, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });
  if (response.status === 400) {
    throw new Error("Нет авторизации");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function deleteKanban(id) {
  const response = await fetch(API_URL + "/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE",
  });

  if (response.status !== 201) {
    throw new Error("Ошибка удаления задачи");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function addTask({ title, topic, description }) {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      title,
      topic,
      description,
    }),
  });
  if (response.status !== 201) {
    throw new Error("Ошибка при добавлении задачи");
  } else {
    const data = await response.json();
    return data;
  }
}
