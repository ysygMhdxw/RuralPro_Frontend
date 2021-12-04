<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-image
              style="width:60px; height: 60px"
              :src="require('../assets/img/ECNU_symbol.png')"
          ></el-image>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="grid-content bg-purple">
          <el-menu
              class="el-menu-demo"
              mode="horizontal"
          >
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
              <template #title>Workspace</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            <el-menu-item index="4">Orders</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  mounted() {

  },
  data() {

  },
  methods: {}
}

</script>

<style scoped>
</style>
