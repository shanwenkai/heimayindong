import router from '@router'
import store from '@/store'
router.beforeEach(function (to, from, next) {
  if (to.path.startsWith('/user') && !store.state.user.token) {
    next({
      path: '/login',
      query: {
        redirectUrl: to.fullPath
      }
    })
  } else {
    next()
  }
})
