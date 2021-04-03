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
      <div class="inf_container">
        <div class="inf_2">
          <div class="inf_left">
            <div class="text_inf">
              <h1 style="font-size: 40px; margin: 50px 0 30px 0;">SpringBoot开发</h1>
              <span style="margin-left: 20px"><strong>讲师：</strong>{{teacher}}</span>
              <br/>
              <span style="margin-left: 20px"><strong>课程属类：</strong>{{typ}}</span>
              <br/>
              <span style="margin-left: 20px; float: left"><strong>课程介绍：</strong>{{courmsg}}</span>
              <br/>
              <span style="margin-left: 20px"><strong>学习人数：</strong>{{num_join}}</span>
            </div>
            <div class="btn_join">
              <el-button type="primary" round>加入课程</el-button>
            </div>
          </div>
          <div class="inf_right">
            <img src="../assets/img/springboot.png" style="width: 100%; margin-top: 40px">
          </div>
        </div>
      </div>
      <div class="course_container">
        <div class="begin">
          开始学习：
        </div>
        <div id="course_all">
          <div class="cap_card" v-for="(cap,index) in caps">
            <div class="card_mes">
              <h3>第{{index + 1}}章 {{cap.ha}}</h3>
              <span>{{cap.hb}}</span>
            </div>
            <div class="card_link" v-for="(lin,index2) in cap.links">
              <el-button type="text" @click="dialogVisible = true">{{index+1}}-{{index2+1}} {{lin.hc}}</el-button>

              <el-dialog
                v-bind:title="(index+1)+'-'+(index2+1)+' '+lin.hc"
                :visible.sync= "dialogVisible"
                width="70%"
                append-to-body>
                <video-player class="video-player vjs-custom-skin"
                              ref="videoPlayer"
                              :playsinline="true"
                              :options="playerOptions">
                </video-player>

              </el-dialog>
            </div>
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
      teacher: "TestUser01",
      typ: "计算机科学与技术",
      courmsg: 'Spring Boot是由Pivotal团队提供的全新框架，其设计目的是用来简化新Spring应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。通过这种方式，Spring Boot致力于在蓬勃发展的快速应用开发领域(rapid application development)成为领导者。',
      num_join: '1',
      dialogVisible: false,
      caps: [
        {
          ha:'概述',
          hb:'本章对课程的情况进行介绍，并介绍框架和Spring概况。',
          links: [
            {
              hc:'Spring入门课程简介',
              type:1,
              tlink:'../assets/video/02.mp4'
            },
            {
              hc:'Spring概况',
              type:1,
              tlink:'../assets/video/03.mp4'
            },
            {
              hc:'Spring框架',
              type:1,
              tlink:'../assets/video/04.1.mp4'
            }
          ]
        },
        {ha:'Spring IOC容器', hb:'介绍Spring IOC容器的基本概念和应用'},
        {ha:' Spring Bean装配', hb:'介绍Bean的作用域、生命周期、Aware接口、自动装配和Resource等内容。'}
      ],
      playerOptions: {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: 'auto',
        language: 'zh-CN',
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: '16:9',
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [{
          //类型
          type: "video/mp4",
          //url地址
          src: require("../assets/video/02.mp4")
        }],
        //你的封面地址
        poster: '',
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true
        }
      }
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
  height: 100px;
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
  padding: 0 0 0 0;
}

.inf_container{
  width: 100%;
  height: 400px;
  background-color: #d3dce6;
}

.inf_2{
  width: 80%;
  height: 400px;
  display: flex;
  margin: auto;
}

.inf_left{
  width: 60%;
  height: 400px;
}

.text_inf{
  float: top;
  line-height: 30px;
  width: 90%;
}
.btn_join{
  margin: -10px 0 0 50px;
}

.inf_right{
  width: 40%;
  height: 400px;
}

.course_container{
  width: 80%;
  height: 1000px;
  margin: auto;
  box-shadow: 2px 2px 8px #ccc;
}

.begin{
  width: 90%;
  line-height: 50px;
  height: 50px;
  background-color: #99a9bf;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  font-size: 30px;
}

.cap_card{
  width: 90%;
  background-color: white;
  box-shadow: 2px 2px 8px #ccc;
  margin: 20px auto 0 auto;
  padding: 10px 0 20px 40px;
  border-radius: 20px;
  line-height: 20px;
}

.card_link{
  margin: 10px 0 0 10px;
}

.demo{
  display: inline-block;
  width: 600px;
  height: 338px;
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  margin-right: 4px;
}

.demo:hover{
  display: block;
}

</style>
