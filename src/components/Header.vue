<template>
  <header class="nav">
    <div class="nav-inner">
      <div class="logo">AFLY-BLOG</div>
      <div class="menu">
        <div class="search">
          <el-input :suffix-icon="Search" placeholder="请输入内容"></el-input>
        </div>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#fff"
          text-color="#636e75"
          :active-text-color="mainColor"
          router
          :ellipsis="false"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="archive">归档</el-menu-item>
          <el-sub-menu index="other">
            <template #title>其他</template>
            <el-menu-item index="other">摸鱼</el-menu-item>
            <el-menu-item index="other">留言板</el-menu-item>
          </el-sub-menu>
          <el-menu-item>
            <el-dropdown placement="bottom">
              <span class="el-dropdown-link">
                <el-badge :is-dot="true">
                  <el-icon><bell /></el-icon>
                </el-badge>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <div class="upload-news-box">
                    <div class="title">
                      <span>通知</span>
                      <span>消息通知</span>
                    </div>
                    <div class="content">
                      <div class="icon">
                        <el-icon size="30px" color="#409EFC"><success-filled /></el-icon>
                      </div>
                      <div class="info">
                        <span class="versions">AFLY-BLOG1.0</span>
                        <span class="welcome">欢迎使用</span>
                        <span class="update-icon">
                          <i class="el-icon-time" />更新：2021/1/1
                        </span>
                      </div>
                    </div>
                  </div>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Search, Bell, SuccessFilled } from '@element-plus/icons-vue'
import { ref } from 'vue';
let activeIndex = ref('/').value;
let mainColor = ref('#1a9dff').value//激活标签颜色
</script>

<style lang="scss">
$mianColr: #1a9dff;
.el-badge__content.is-dot {
  height: 6px !important;
  width: 6px !important;
  background-color: red !important;
}
.upload-news-box {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 220px;
  .title {
    font-size: 14px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .content {
    margin-top: 10px;
    display: flex;
    align-items: center;
    .info {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      color: #6c757d;
      margin-left: 15px;
      .versions {
        font-size: 16px;
        color: $mianColr;
      }
      .welcome {
        margin: 3px 0;
      }
    }
  }
}
.nav {
  position: fixed;
  top: 0;
  z-index: 1000;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: white;
  box-shadow: 0 1px 10px #ccc;
  .nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
  }
  .logo {
    font-weight: 549;
    color: $mianColr;
    font-size: 20px;
  }
  .menu {
    height: 70px;
    display: flex;
    align-items: center;
    .search {
      margin-right: 30px;
    }
    > ul {
      display: flex;
    }
    .el-menu-demo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border-bottom: none;
    }
    .el-menu-demo > li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      > a {
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
}
.el-menu-item:hover i {
  color: $mianColr !important;
}
.el-menu-item i {
  font-size: 20px;
}
// 强制ui样式
.el-menu-demo li:hover,
.el-menu-demo div:hover {
  color: $mianColr !important;
  background: none !important;
}
.el-menu--horizontal ul {
  box-shadow: 0px 3px 20px #ccc;
  border-radius: 5px;
  & li {
    &:hover {
      color: $mianColr !important;
      background: none !important;
    }
  }
}
</style>