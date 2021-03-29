<template>
  <main>
    <div class="welcome common">
      <div class="welcome-left">
        <h2>欢迎来到AFLY-BLOG</h2>
        <span><a href="#">本站GITHUB</a></span>
        <img src="../assets/welcome.png" alt="" />
      </div>
      <div class="welcome-right">
        <span class="title">
          <span>博客简介</span>
          <span class="english-title">—INTRODUcontentCTION</span>
        </span>
        <div class="common-content">
          <p>
            搭建该博客的目的在于想积攒一些技能技巧，温故而知新一些知识点，搭建BLOG的想法是我还没毕业就开始了有了，但一直没实行的原因是毕业后都忙于工作很少时间可以去写BLOG，拖了好久，才终于动手，该版本为vue2.0/cli4.0/element-ui构建，等后面会升级为vue3.0版本。
          </p>
        </div>
      </div>
      <!-- 点缀 -->
      <div class="intersperse">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="dot" v-for="(n, i) in 2" :key="i">
          <span v-for="(n, i) in i == 0 ? 15 : 20" :key="i"></span>
        </div>
        <div class="wave"></div>
      </div>
    </div>
    <div class="article common">
      <span class="title">
        <span>文章列表</span>
        <span class="english-title">—ARTICLE</span>
      </span>
      <ul class="article-content common-content">
        <li class="article-content-item" v-for="(n,i) in 8" :key="i">
          <div class="headline">
            <div class="headline-left">
              <el-tag class="headline-type" type="danger" size="small" effect="light">学</el-tag>
              <!-- <el-tag class="headline-type" type="-" size="small" effect="light">教</el-tag>
              <el-tag class="headline-type" type="warning" size="small" effect="light">原</el-tag>
              <el-tag class="headline-type" type="success" size="small" effect="plain">转</el-tag> -->
              <a href="#">TypeScript的枚举进阶</a>
            </div>
          </div>
          <!-- effect	主题	string	dark / light / plain	light -->
          <div class="technology">
            <el-tag size="small" effect="dark">javascript</el-tag>
            <el-tag type="success" size="small" effect="dark">vue</el-tag>
            <el-tag type="info" size="small" effect="dark">ajax</el-tag>
            <el-tag type="warning" size="small" effect="dark">html</el-tag>
            <el-tag type="danger" size="small" effect="dark" v-for="(n,i) in 1" :key="i">css</el-tag>
          </div>
          <p class="synopsis">
            枚举是 TypeScript
            新增加的一种数据类型，这在其他很多语言中很常见，但是 JavaScript
            却没有。使用枚举，我们可以给一些难以理解的常量赋予一组具有意义的直观的名字，使其更为直观。
          </p>
          <div class="writer">
            <span><i class="el-icon-edit-outline"></i>作者：AFLY</span>
            <span><i class="el-icon-date"></i>发布时间：2020-05-20</span>
            <span><i class="el-icon-s-data"></i>热度：5200</span>
            <el-button class="original-btn"><a href="#">阅读详情</a></el-button>
          </div>
        </li>
        <div class="paging">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </ul>
    </div>
  </main>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
$mianColor: #1a9dff;
main {
  margin-left: 20px;
  width: 790px;
  // 欢迎界面
  .welcome {
    position: relative;
    display: flex;
    z-index: 1;
    overflow: hidden;
    .welcome-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        margin-top: 30px;
      }
      span {
        display: inline-block;
        margin-top: 6px;
        a {
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
          color: #f56c6c;
          font-size: 15px;
        }
      }
      img {
        position: relative;
        z-index: -2;
        width: 55%;
      }
    }
    .welcome-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .common-content p {
        text-indent: 2em;
        font-size: 15px;
        text-align: left;
        line-height: 22px;
      }
    }
    .intersperse {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      overflow: hidden;
      z-index: -1;
      .circle {
        border-radius: 50%;
        border: 40px solid $mianColor;
        border-right-color: transparent;
        border-bottom-color: transparent;
      }
      > div {
        position: relative;
        width: 150px;
        height: 150px;
        &:first-child {
          top: -150px;
          left: -100px;
          transform: rotate(-180deg);
        }
        &:nth-child(2) {
          transform: rotate(-90deg);
          top: -320px;
          right: -680px;
          border: 40px solid rgba(26, 157, 255, 0.8);
        }
        &:nth-child(3),
        &:nth-child(4) {
          display: flex;
          flex-wrap: wrap;
          left: 70px;
          top: -300px;
          height: 100px;
          width: 48px;
          span {
            width: 6px;
            height: 6px;
            margin: 5px;
            border-radius: 50%;
            display: inline-block;
            background-color: $mianColor;
          }
        }
        &:nth-child(4) {
          display: flex;
          flex-direction: row-reverse;
          left: 580px;
          top: -320px;
          width: 150px;
          height: 50px;
          span {
            background-color: $mianColor;
          }
        }
      }
      .wave {
        position: absolute;
        z-index: -1;
        left: 0;
        bottom: 0;
        top: none;
        align-items: center;
        width: 100%;
        height: 150px;
        background-color: lighten($mianColor, 20%);
        // background-color: rgb(118, 218, 255);
        overflow: hidden;
        &:before,
        &:after {
          content: "";
          position: absolute;
          left: 50%;
          min-width: 300vw;
          min-height: 300vw;
          background-color: #fff;
          animation-name: rotate;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        &:before {
          bottom: 3vh;
          border-radius: 45%;
          animation-duration: 10s;
        }
        &:after {
          bottom: 12vh;
          opacity: 0.5;
          border-radius: 47%;
          animation-duration: 10s;
        }
        @keyframes rotate {
          0% {
            transform: translate(-50%, 0) rotateZ(0deg);
          }
          50% {
            transform: translate(-50%, -1%) rotateZ(180deg);
          }
          100% {
            transform: translate(-50%, 0%) rotateZ(360deg);
          }
        }
      }
    }
  }
  // 文章列表
  .article {
    display: flex;
    .article-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      li {
        &:first-child{
          padding-top:0
        }
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px 0;
        // border-bottom: 1px solid #d3d3d3;
        border-bottom: 1px dashed rgba(155, 152, 152, 0.4);
        .headline {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .headline-left {
            font-size: 16px;
            a {
              max-width: 94%;
              text-align: left;
              color: black;
              &:hover {
                color: $mianColor;
              }
              &:active {
                transform: scale(0.99);
              }
            }
            .headline-type {
              padding: 0;
              margin-right: 5px;
              text-align: center;
              line-height: 30px;
              width: 30px;
              height: 30px;
              font-size: 13px;
              border-radius: 50%;
            }
          }
          .headline-right {
            font-size: 14px;
            color: #f56c6c;
          }
        }
        .technology{
          display: flex;
          flex-wrap: wrap;
          margin: 12px 0 5px;
          span{
            margin: 0 3px 3px 0;
          }
        }
        .synopsis {
          color: #999;
          font-size: 14px;
          text-align: left;
          line-height: 24px;
        }
        .writer{
          width: 100%;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #666;
          padding: 5px 0;
          span{
            margin-right:15px;
            i{
              margin-right: 3px;
              color:$mianColor;
            }
          }
          .original-btn{
            &:hover a{
              color:$mianColor;
            }
            a{
              color:#666;
            }
          }
        }
      }
      .paging{
        padding: 20px 0 0;
      }
    }
  }
}
</style>
