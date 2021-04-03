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

    <el-container>
      <el-aside width="300px">
        <el-menu
          :uniqueOpened="true"
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1" @click="Submit(1)">
            <i class="el-icon-menu"></i>
            <template #title><span>综合推荐</span></template>
          </el-menu-item>
          <el-menu-item index="2" @click="Submit(2)">
            <i class="el-icon-document"></i>
            <template #title><span>课程展示</span></template>
          </el-menu-item>
          <el-menu-item index="3" @click="Submit(3)">
            <i class="el-icon-setting"></i>
            <template #title><span>思维交汇</span></template>
          </el-menu-item>
          <el-menu-item index="4" @click="Submit(4)">
            <i class="el-icon-setting"></i>
            <template #title><span>授业解惑</span></template>
          </el-menu-item>
        </el-menu>

      </el-aside>
      <el-main>
        <div class="titles" id="page1">综合推荐</div>
        <div class="main_1_container">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="titles" id="page2">课程展示</div>
        <div class="main_2_container" style="background-color: #d3dce6">
          <ul class="main_2_left">
            <li class="card">
              <div class="card_head">
                <img src="../assets/img/computer.png" class="card_img">
              </div>
              <ul class="card_body">
                <li class="classes" style="list-style-type:none; font-size: 20px">计算机科学与技术</li>
                <li class="classes"><router-link to="/CourseInf" style="text-decoration: none; color: black">SpringBoot开发</router-link></li>
                <li class="classes">课程B</li>
                <li class="classes">课程C</li>
                <li class="classes" style="list-style-type:none; font-size: 20px">...</li>
              </ul>
            </li>
            <li class="card">
              <div class="card_head">
                <img src="../assets/img/architecture.png" class="card_img">
              </div>
              <ul class="card_body">
                <li class="classes" style="list-style-type:none; font-size: 20px">建筑学</li>
                <li class="classes">课程A</li>
                <li class="classes">课程B</li>
                <li class="classes">课程C</li>
                <li class="classes" style="list-style-type:none; font-size: 20px">...</li>
              </ul>
            </li>
            <li class="card">
              <div class="card_head">
                <img src="../assets/img/starrysky.png" class="card_img">
              </div>
              <ul class="card_body">
                <li class="classes" style="list-style-type:none; font-size: 20px">天文学</li>
                <li class="classes">课程A</li>
                <li class="classes">课程B</li>
                <li class="classes">课程C</li>
                <li class="classes" style="list-style-type:none; font-size: 20px">...</li>
              </ul>
            </li>
          </ul>
          <div class="main_2_right">
            <div class="search_2">
              <el-form :model="searchForm1" :rules="searchRules" ref="searchForm1" style="display: flex; margin-top: 30px;">
                <el-input v-model="searchForm1.conte" placeholder="请输入内容" clearable></el-input>
                <el-button type="primary" @click="search1(searchForm1)">搜索</el-button>
              </el-form>
            </div>
            <div class="rec_2" >
              推荐<br/>
              <img src="../assets/img/background.png" class="rec_img">
            </div>
          </div>
        </div>
        <div class="titles" id="page3">思维交汇</div>
        <div class="main_2_container" style="background-color: #d3dce6">
          <div>
            <ul class="main_2_left">
              <li class="card">
                <div class="card_head">
                  <img src="../assets/img/computer.png" class="card_img">
                </div>
                <ul class="card_body">
                  <li class="classes" style="list-style-type:none; font-size: 20px">计算机科学与技术</li>
                  <li class="classes">资源A</li>
                  <li class="classes">资源B</li>
                  <li class="classes">资源C</li>
                  <li class="classes" style="list-style-type:none; font-size: 20px">...</li>
                </ul>
              </li>
              <li class="card">
                <div class="card_head">
                  <img src="../assets/img/architecture.png" class="card_img">
                </div>
                <ul class="card_body">
                  <li class="classes" style="list-style-type:none; font-size: 20px">建筑学</li>
                  <li class="classes">资源A</li>
                  <li class="classes">资源B</li>
                  <li class="classes">资源C</li>
                  <li class="classes" style="list-style-type:none; font-size: 20px">...</li>
                </ul>
              </li>
              <li class="card">
                <div class="card_head">
                  <img src="../assets/img/starrysky.png" class="card_img">
                </div>
                <ul class="card_body">
                  <li class="classes" style="list-style-type:none; font-size: 20px">天文学</li>
                  <li class="classes">资源A</li>
                  <li class="classes">资源B</li>
                  <li class="classes">资源C</li>
                  <li class="classes" style="list-style-type:none; font-size: 20px">...</li>
                </ul>
              </li>
            </ul>
            <ul class="main_2_left">
            <li class="card">
              <div class="card_head">
                <img src="../assets/img/computer.png" class="card_img">
              </div>
              <ul class="card_body">
                <li class="classes" style="list-style-type:none; font-size: 20px">计算机科学与技术</li>
                <li class="classes">讨论A</li>
                <li class="classes">讨论B</li>
                <li class="classes">讨论C</li>
                <li class="classes" style="list-style-type:none; font-size: 20px">...</li>
              </ul>
            </li>
            <li class="card">
              <div class="card_head">
                <img src="../assets/img/architecture.png" class="card_img">
              </div>
              <ul class="card_body">
                <li class="classes" style="list-style-type:none; font-size: 20px">建筑学</li>
                <li class="classes">讨论A</li>
                <li class="classes">讨论B</li>
                <li class="classes">讨论C</li>
                <li class="classes" style="list-style-type:none; font-size: 20px">...</li>
              </ul>
            </li>
            <li class="card">
              <div class="card_head">
                <img src="../assets/img/starrysky.png" class="card_img">
              </div>
              <ul class="card_body">
                <li class="classes" style="list-style-type:none; font-size: 20px">天文学</li>
                <li class="classes">讨论A</li>
                <li class="classes">讨论B</li>
                <li class="classes">讨论C</li>
                <li class="classes" style="list-style-type:none; font-size: 20px">...</li>
              </ul>
            </li>
          </ul>
          </div>
          <div class="main_3_right">
            <div class="search_2">
              <el-form :model="searchForm2" :rules="searchRules" ref="searchForm2" style="display: flex; margin-top: 30px;">
                <el-input v-model="searchForm2.conte" placeholder="请输入内容" clearable></el-input>
                <el-button type="primary" @click="search2(searchForm2)">搜索</el-button>
              </el-form>
            </div>
            <div class="rec_2">
              推荐<br/>
              <img src="../assets/img/background.png" class="rec_img">
            </div>
          </div>
        </div>
        <div class="titles" id="page4">授业解惑</div>
        <div class="main_2_container" style="background-color: #d3dce6">
          <div>
            <h2>当前在线且开放问答教师</h2>
            <ul class="main_2_left">
              <li class="card">
                <div class="card_head">
                  <img src="../assets/img/computer.png" class="card_img">
                </div>
                <ul class="card_body">
                  <li class="classes" style="list-style-type:none; font-size: 20px">计算机科学与技术</li>
                  <li class="classes">教师A</li>
                  <li class="classes">教师B</li>
                  <li class="classes">教师C</li>
                  <li class="classes" style="list-style-type:none; font-size: 20px">...</li>
                </ul>
              </li>
              <li class="card">
                <div class="card_head">
                  <img src="../assets/img/architecture.png" class="card_img">
                </div>
                <ul class="card_body">
                  <li class="classes" style="list-style-type:none; font-size: 20px">建筑学</li>
                  <li class="classes">教师A</li>
                  <li class="classes">教师B</li>
                  <li class="classes">教师C</li>
                  <li class="classes" style="list-style-type:none; font-size: 20px">...</li>
                </ul>
              </li>
              <li class="card">
                <div class="card_head">
                  <img src="../assets/img/starrysky.png" class="card_img">
                </div>
                <ul class="card_body">
                  <li class="classes" style="list-style-type:none; font-size: 20px">天文学</li>
                  <li class="classes">教师A</li>
                  <li class="classes">教师B</li>
                  <li class="classes">教师C</li>
                  <li class="classes" style="list-style-type:none; font-size: 20px">...</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="main_3_right">
            <div class="search_3">
              <el-form :model="searchForm3" :rules="searchRules" ref="searchForm3" style="display: flex; margin-top: 30px;">
                <el-input v-model="searchForm3.conte" placeholder="请输入内容" clearable></el-input>
                <el-button type="primary" @click="search3(searchForm3)">搜索</el-button>
              </el-form>
            </div>
            <div class="rec_2">
              推荐<br/>
              <img src="../assets/img/background.png" class="rec_img">
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'Main',
  data() {
    return {
      searchForm1:{
        conte: ''
      },
      searchForm2:{
        conte: ''
      },
      searchForm3:{
        conte: ''
      },
      searchRules:{
        conte: [
          { required: true, message: '请输入关键字', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    search1(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //this.$router.push("");
        } else {
          console.log('搜索失败');
          return false;
        }
      });
    },
    search2(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //this.$router.push("");
        } else {
          console.log('搜索失败');
          return false;
        }
      });
    },
    search3(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //this.$router.push("");
        } else {
          console.log('搜索失败');
          return false;
        }
      });
    },
    Submit (key) {
      debugger
      // 获取点击的按钮对应页面的id
      var PageId = document.querySelector('#page' + key)
      // 打印出对应页面与窗口的距离
      console.log(PageId.offsetTop)
      // 使用平滑属性，滑动到上方获取的距离
      // 下方我只设置了top，当然 你也可以加上 left 让他横向滑动
      // widow 根据浏览器滚动条，如果你是要在某个盒子里面产生滑动，记得修改
      window.scrollTo({
        'top': PageId.offsetTop,
        'behavior': 'smooth'
      })
    }
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

  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .main_2_container{
    display: flex;
  }

  .main_2_left{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card{
    margin: 0 15px;
    width: 380px;
    height: 480px;
    box-shadow: 0 2px 9.8px 0.2px rgba(115,120,128,.1);
    border-radius: 4px;
    cursor: pointer;
    list-style-type:none;
  }
  .card_head{
    position: relative;
    height: 200px;
  }
  .card_img{
    width: 380px;
    height: 200px;
    background: center no-repeat none;
    background-size: cover;
    border-radius: 4px 4px 0 0;
  }
  .rec_img{
    width: 280px;
    height: 400px;

  }
  .card_body{
    padding: 20px 30px;
    text-align: center;
    color: #667080;
    margin-top: -70px;
  }
  .classes{
    height: 50px;
  }

  .titles{
    font-size: 40px;
    color: #292e33;
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;
    line-height: 1;
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

</style>
