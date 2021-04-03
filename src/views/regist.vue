<template>
  <div class="login_container">
    <div>
      <img src="../assets/img/logo.png" width="15%" style="margin-left: 2%; margin-top: 1%">
    </div>
    <div class="login_box">
      <div class = "avatar_box">
        <img src="../assets/img/defhead.png" class="defhead_img">
      </div>
      <el-form :model="registForm" :rules="registRules" ref="registForm" label-width="0px" class="login_Form">
        <el-form-item prop="username">
          <el-input v-model="registForm.username" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="registForm.password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="password_again">
          <el-input v-model="registForm.password_again" prefix-icon="el-icon-lock" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="telephone">
          <el-input v-model="registForm.telephone" prefix-icon="el-icon-phone" placeholder="请输入11位手机号"></el-input>
        </el-form-item>
        <el-form-item prop="inemail">
          <el-input v-model="registForm.inemail" prefix-icon="el-icon-message" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="verifyCode">
          <div class="verifyCode_box">
            <el-input v-model="registForm.verifyCode" prefix-icon="el-icon-mobile" class="verifyCode" placeholder="请输入验证码"></el-input>
            <img src="../assets/img/verify.png" class="verify_img">
          </div>
        </el-form-item>
        <el-form-item class="login_btn">
          <el-button type="primary" @click="tologin">去登陆</el-button>
          <el-button type="primary" @click="submitForm('registForm')">注册</el-button>
          <el-button @click="resetForm('registForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      registForm: {
        username: '',
        password: '',
        password_again: '',
        telephone: '',
        inemail: '',
        verifyCode: ''
      },
      registRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        password_again: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入11位手机号码', trigger: 'blur' },
          { min: 3, max: 16, message: '长度为 11 个字符', trigger: 'blur' }
        ],
        inemail: [
          { required: true, message: '请输入有效邮箱', trigger: 'blur' },
          { min: 3, max: 16, message: '请按照有效邮箱格式输入', trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('注册成功');
        } else {
          console.log('注册失败');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    tologin(){
      //传递的参数用{{ $route.query.goodsId }}获取
      this.$router.push('/login')
      //this.$router.go(-2)
      //后退两步
    }
  }
}

</script>

<style scoped>
.login_container{
  height: 100%;
  background-image: url("../assets/img/bg.png");
  background-color: #1A463D;
  background-repeat:repeat-x;
  background-position: center center;
}

.login_box{
  width: 450px;
  height: 580px;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.avatar_box{
  width: 130px;
  height: 130px;
  border: 1px solid #EEEEEE;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: -65px auto;
  background-color: white;
}

.defhead_img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #EEEEEE;
}

.login_Form{
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
}

.login_btn{
  display: flex;
  justify-content: flex-end;
}

.verifyCode_box{
  display: flex;
}
.verifyCode{
  width: 70%;
  justify-content: left;
}
.verify_img{
  width: 30%;
  height: 45px;
  justify-content: flex-end;
}
</style>
