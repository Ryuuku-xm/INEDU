<template>
  <el-container class="main_container">
    <el-header class="el-header" height="80px">
      <div class = head_left_box>
        <img src="../assets/img/logo.png" style="width: 190px; height: 80px; margin: 0px 0px 5px 5px">
        <span style="margin-left: 25px;">一 站 式 交 互 学 习</span>
      </div>
      <div class = head_right_box>
        <span style="margin-right: 25px;">您的身份：</span>
        <el-dropdown>
          <el-button type="primary">
            管理员<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>站内信</el-dropdown-item>
              <el-dropdown-item>课程管理</el-dropdown-item>
              <el-dropdown-item>教师验证</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown>
          <img src="../assets/img/defhead.png">
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><router-link to="/UserInf" style="text-decoration: none; color: black">个人信息</router-link></el-dropdown-item>
              <el-dropdown-item>我的资源</el-dropdown-item>
              <el-dropdown-item>关注资源</el-dropdown-item>
              <el-dropdown-item>浏览历史</el-dropdown-item>
              <el-dropdown-item divided>注销用户</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>

    <el-main class="el-main">
        <div class="userinf_container">
          <div class="userinf_left">
            <div class="userinf_left_top">
              <div class="left_head">
                <img src="../assets/img/defhead.png" class="left_img">
              </div>
              <div class="left_id">TestUser01</div>
            </div>
            <div class="userinf_left_bottom">
              <el-menu
                :uniqueOpened="true"
                default-active="1"
                class="el-menu-vertical-demo"
                background-color="#d3dce6"
                text-color="#000"
                active-text-color="orange">
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <template #title><span>个人信息</span></template>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-document"></i>
                  <template #title><span>我的资源</span></template>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-view"></i>
                  <template #title><span>关注资源</span></template>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-date"></i>
                  <template #title><span>浏览历史</span></template>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-s-home"></i>
                  <template #title><router-link to="/Main" style="text-decoration: none; color: black"><span>返回主页</span></router-link></template>
                </el-menu-item>
              </el-menu>
            </div>
          </div>
          <div class="userinf_right">
            <div class="right_title">个人信息查看与修改</div>
            <div class="line"></div>
            <div class="right_form">
              <el-form :label-position="top" :model="userinfForm">
                <el-form-item label="ID（不可修改）" class="right_label">
                  <el-input v-model="userinfForm.id" disabled></el-input>
                </el-form-item>
                <el-form-item label="手机号码" class="right_label">
                  <el-input v-model="userinfForm.tel" disabled></el-input>
                </el-form-item>
                <el-form-item label="电子邮箱" class="right_label">
                  <el-input v-model="userinfForm.eml" disabled></el-input>
                </el-form-item>
                <el-form-item class="passchange_btn">
                  <el-button type="primary" @click="pacVisible = true">修改密码</el-button>

                  <el-dialog title="密码修改" :visible.sync="pacVisible">
                    <el-form :model="pacform">
                      <el-form-item label="旧密码" :label-width="formLabelWidth">
                        <el-input v-model="pacform.pass1" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="新密码" :label-width="formLabelWidth">
                        <el-input v-model="pacform.pass2" autocomplete="off"></el-input>
                      </el-form-item>
                    </el-form>
                    <template #footer>
                      <span class="dialog-footer">
                        <el-button @click="pacVisible = false">取 消</el-button>
                        <el-button type="primary" @click="pacVisible = false">确 定</el-button>
                      </span>
                    </template>
                  </el-dialog>

                  <el-button type="primary" style="margin-left: 50px">绑定手机</el-button>
                  <el-button type="primary" style="margin-left: 50px">绑定邮箱</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'UserInf',
  data() {
    return{
      userinfForm: {
        id: 'TestUser01',
        tel: '18810820740',
        eml: 'inedu_test01@163.com'
      },
      pacVisible : false,
      pacform : {
        pass1: '',
        pass2: ''
      },
      formLabelWidth: '120px',
    };
  }
}
</script>

<style scoped>

.main_container{
  height: 100%;
}

.el-header {
  background-color: #B3C0D1;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  color: #333;
  align-items: center;
  font-size: 20px;
}

.head_left_box{
  display: flex;
  align-items: center;
}
.head_right_box{
  display: flex;
  align-items: center;
}
.el-dropdown>img{
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: white;
  margin: 0px 20px 0px 0px;
}

.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  line-height: 160px;
}

.userinf_container{
  width: 80%;
  height: 800px;
  background-color: #d3dce6;
  margin: auto;
  box-shadow: 2px 2px 8px #ccc;
  display: flex;
}

.userinf_left{
  width: 240px;
  height: 100%;
  border-top: 1px solid #EBE9E9;
  border-right: 1px solid #D9D2D2;
}
.userinf_left_top{
  text-align: center;
  height: 300px;
}

.left_head{
  margin-left: 40px;
  margin-top: 40px;
}

.left_img{
  height: 160px;
  width: 160px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: white;
  margin: 0px 20px 0px 0px;
}

.left_id{
  margin-top: -120px;
  font-size: 30px;
}

.userinf_left_bottom{
  height: 500px;
  border-top: 1px solid #99a9bf;
}

.userinf_right{
  width: 100%;
}

.right_title{
  text-align: center;
  font-size: 35px;
}
.line{
  height: 1px;
  width: 100%;
  background-color: #99a9bf;
}

.right_label{
  margin-left: 300px;
  width: 600px;
  margin-top: 50px;
}

.passchange_btn {
  margin-left: 400px;
  margin-top: 100px;
}


</style>
