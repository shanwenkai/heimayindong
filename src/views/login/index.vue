<template>

         <div class="container">
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()"></van-nav-bar>
  <van-cell-group>
    <van-field label="手机号" placeholder="请输入手机号"></van-field>
    <van-field label="验证码" placeholsmallder="请输入验证码">
      <van-button slot="button" size="small" type="primary">发送验证码</van-button>
    </van-field>
    <div class="login-box">
  <van-button type="info" block round size="small" ></van-button>
    </div>

  </van-cell-group>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.login-box {
  padding: 20px;
}
</style>
