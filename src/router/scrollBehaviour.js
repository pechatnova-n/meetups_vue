// TODO: Task 05-vue-router/03-ScrollBehavior

/** @implements {import('vue-router').RouterScrollBehavior} */
export function scrollBehavior(to, from, savedPosition) {
  if(savedPosition) {
    return savedPosition;
  } else if (to.hash) {
    return {
      el: to.hash,
    };
  } else if (from.meta.saveScrollPosition && to.meta.saveScrollPosition) {
    return {};
  } else {
    return { top: 0, left: 0 }
  }
}
