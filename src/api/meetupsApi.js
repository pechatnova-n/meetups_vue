import { httpClient } from './httpClient/httpClient.js';

/**
 * Получить список всех митапов
 * @returns {Promise<ResultContainer<Meetup[]>>}
 */
export function getMeetups() {
  return httpClient.get('/meetups');
}

/**
 * Получить митап по ID
 * @param {number} id
 * @returns {Promise<ResultContainer<Meetup>>}
 */
export function getMeetup(id) {
  return httpClient.get(`/meetups/${id}`);
}

/**
 * Создать митап
 * @param {Object} meetup
 * @returns {Promise<ResultContainer<Meetup>>}
 */
export function postMeetup(meetup) {
  // TODO: реализовать функцию+
  return httpClient.post(`/meetups`, meetup);
}

/**
 * Обновить митап
 * @param {Object} meetup
 * @returns {Promise<ResultContainer<Meetup>>}
 */
export function putMeetup(id, meetup) {
  // TODO: реализовать функцию+
  return httpClient.put(`/meetups/${id}`, meetup);
}

/**
 * Удалить митап
 * @param {number} id
 * @returns {Promise<ResultContainer<void>>}
 */
export function deleteMeetup(id) {
  // TODO: реализовать функцию+
  return httpClient.delete(`/meetups/${id}`)
}

/**
 * Добавить текущего пользователя в участники митапа
 * @param {number} id
 * @returns {Promise<ResultContainer<void>>}
 */
export function attendMeetup(id) {
  // TODO: реализовать функцию+
  return httpClient.post(`/meetups/${id}/participation`)
}

/**
 * Удалить текущего пользователя из участников
 * @param {number} id
 * @returns {Promise<ResultContainer<void>>}
 */
export function leaveMeetup(id) {
  // TODO: реализовать функцию+
  return httpClient.delete(`/meetups/${id}/participation`)
}
