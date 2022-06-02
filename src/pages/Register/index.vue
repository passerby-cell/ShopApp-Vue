<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go">
          我有账号，去
          <a href="login.html" target="_blank">登陆</a>
        </span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <input type="text" placeholder="请输入你的手机号" v-model="phone.phoneNum" @blur="verifyPhoneNum" />
        <span class="error-msg">{{phone.phoneNumError}}</span>
      </div>
      <div class="content">
        <label>验证码:</label>
        <input type="text" placeholder="请输入验证码" v-model="VerifyCode" />
        <button ref="code" @click="getVerifyCode" alt="code" style="height: 38px;width: 60px;">验证码</button>
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input type="password" placeholder="请输入你的登录密码" v-model="passport.passportNum" />
        <span class="error-msg">{{passport.passportError}}</span>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input type="password" placeholder="请输入确认密码" v-model="secondVerify" />
        <span class="error-msg">{{secondVerifyPassport}}</span>
      </div>
      <div class="controls">
        <input name="m1" type="checkbox" v-model="isChecked" />
        <span>同意协议并注册《尚品汇用户协议》</span>
      </div>
      <div class="btn" @click="registerUser">
        <button>完成注册</button>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
import { reqCode, reqUserRegister } from '@/api'
export default {
  name: 'Register',
  data() {
    return {
      phone: { phoneNum: '', phoneNumError: '' },
      passport: { passportNum: '', passportNumError: '' },
      secondVerify: '',
      isChecked: false,
      VerifyCode: '',
    }
  },
  computed: {
    secondVerifyPassport() {
      return this.secondVerify == this.passport.passportNum
        ? ''
        : '两次密码不一致'
    },
  },
  methods: {
    verifyPhoneNum() {
      let reg = /^1[3|4|5|7|8][0-9]{9}$/
      if (!reg.test(this.phone.phoneNum)) {
        this.phone.phoneNumError = '请输入正确的手机号'
      }
      this.phone.phoneNumError = ''
    },
    verifyPassport() {
      let reg = /^(?![^a-zA-Z]+$)(?!\\D+$).{8,16}$/
      if (!reg.test(this.passport.passportNum)) {
        this.passport.passportNumError = '密码应包含8到16位数字和字母'
      }
      this.passport.passportNumError = ''
    },
    async getVerifyCode() {
      this.VerifyCode = (await reqCode(this.phone.phoneNum)).data
    },

    async regist() {
      let result = await reqUserRegister({
        phone: this.phone.phoneNum,
        code: this.VerifyCode,
        password: this.passport.passportNum,
      })
      return result
    },
    async registerUser() {
      if (this.phone.phoneNumError != '') {
        alert('电话号码错误')
      } else if (this.passport.passportNumError != '') {
        alert('密码格式有误')
      } else if (this.secondVerifyPassport != '') {
        alert('两次密码输入不一致')
      } else if (this.isChecked == false) {
        alert('请同意《尚品汇用户协议》')
      } else {
        let result = await this.regist()
        if (result.code == 200) {
          alert('注册成功')
          this.$router.push('login')
        } else {
          alert(result.message)
        }
      }
    },
  },
}
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>