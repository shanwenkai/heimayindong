const USER_TOKEN = 'heima-toutiao-mobile-94'
// 设置用户的token信息
export function setUser (user) {
  window.localStorage.setItem(USER_TOKEN, JSON.stringify(user))
}
// 获取用户的token信息
export function getUser () {
  return JSON.parse(window.localStorage.getItem(USER_TOKEN || '{}'))
}

// 删除用户的token信息
export function delUser () {
  localStorage.removeItem(USER_TOKEN)
}
