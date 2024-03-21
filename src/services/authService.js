// TODO: реализовать функции, необходимые для авторизации, помимо работы с API
// Например, сохранения данных пользователя в LS, восстановления и удаления


export const setLocalSession = (name, value) => {
  return localStorage.setItem(name, value);
}

export const getLocalSession = (name) => {
  return localStorage.getItem(name);
}

export const deleteLocalSession = (name) => {
  return localStorage.removeItem(name);
}


