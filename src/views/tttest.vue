<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      title="提示"
      :visible.sync= "dialogVisible"
      width="30%">
      <span>这是一段信息</span>

    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {

  }
};
</script>

<style scoped>

</style>
