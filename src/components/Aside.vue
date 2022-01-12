<template>
  <div class="aside">
    <!-- 博客更新 -->
    <div class="update-tips common">
      <span class="title">
        <span>博客更新</span>
        <span class="english-title">—BLOG UPDATE</span>
      </span>
      <ul class="common-content">
        <el-carousel
          :interval="3000"
          height="220px"
          type="card"
          direction="vertical"
          arrow="nerver"
          indicator-position="none"
        >
          <el-carousel-item v-for="(item, i) in uploadList" :key="i">
            <li class="update-item">
              <span>{{ item.text }}</span>
              <div class="icon-time">
                <i class="el-icon-success"></i>
                <span class="time">{{ item.time }}</span>
              </div>
            </li>
          </el-carousel-item>
        </el-carousel>
      </ul>
    </div>
    <!-- 博客推荐 -->
    <div class="hot common">
      <span class="title">
        <span>热门推荐</span>
        <span class="english-title">—BLOG HOT</span>
      </span>
      <ul class="common-content">
        <li>
          <a href="#">
            <!-- success/info/warning/danger  中文/数字最多俩个字 英文最多4个字母-->
            <el-tag class="essay-tag" type="danger" size="mini" effect="light">热门</el-tag>
            <span class="essay-text">javascript原型以及原型链</span>
            <span class="essay-time">
              <i class="el-icon-time"></i>
              <span>2020-12-16</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <el-tag class="essay-tag" type="warning" size="mini" effect="light">精选</el-tag>
            <span class="essay-text">学习http深入了解底层知识</span>
            <span class="essay-time">
              <i class="el-icon-time"></i>
              <span>2020-11-18</span>
            </span>
          </a>
        </li>
        <li v-for="(n, i) in 3" :key="i">
          <a href="#">
            <el-tag class="essay-tag" type="-" size="mini" effect="plain">{{ i + 1 }}.0</el-tag>
            <span class="essay-text">学习vue3.0之初出茅庐第{{ i + 1 }}章</span>
            <span class="essay-time">
              <i class="el-icon-time"></i>
              <span>2020-11-{{ i }}2</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 打赏博客 -->
    <div class="play-tour common">
      <span class="title">
        <span>打赏博客</span>
        <span class="english-title">—PLAY TOUR</span>
      </span>
      <ul class="common-content">
        <div class="statement">
          <i class="el-icon-video-camera-solid"></i>
          <ul>
            <li>摘不到月亮的人说肝肠寸断。</li>
            <li>求打赏啊！！！</li>
            <li>冲冲冲！！！</li>
            <li>拼命写BLOG中...</li>
            <li>摘不到月亮的人说肝肠寸断。</li>
          </ul>
        </div>
        <li>
          <span>
            <i class="el-icon-success"></i>
            <b>微信打赏</b>
          </span>
          <div class="play-tour-wx">
            <img src="../assets/wxzf.png"/>
          </div>
        </li>
        <li>
          <span>
            <i class="el-icon-success"></i>
            <b>支付宝打赏</b>
          </span>
          <div class="play-tour-wx">
            <img src="../assets/zfb.png"/>
          </div>
        </li>
      </ul>
    </div>
    <!-- 友情广告 -->
    <div>
      <div class="advertising common">
        <span class="title">
          <span>友情广告</span>
          <span class="english-title">—FRIENDSHIP</span>
        </span>
        <!-- 有数据显示 -->
        <div class="advertising-item" v-if="false">
          <!-- <img src alt /> -->
        </div>
        <!-- 无数据显示 -->
        <div class="advertising-item advertising-no-data" v-else>
          <img src="../assets/advertising.png"/>
          <div class="no-advertising">
            <a href="#">暂无广告</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
let uploadList = reactive([{
  text: "PC端页面设计+布局",
  time: "2020-12-15",
},
{
  text: "PC端组件开发",
  time: "2020-12-15",
},
{
  text: "博客1.0.0版本",
  time: "2020-12-15",
}]);
console.log(uploadList,'uploadList')

</script>

<style lang="scss" scoped >
img {
  height: 100%;
  width: 100%;
}
$mianColor: #1a9dff;
.aside {
  width: 320px;
  // 博客更新
  .update-tips {
    height: 280px;
    width: 280px;
    overflow: hidden;
    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      .update-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        > span {
          color: #111;
          display: inline-block;
          margin-bottom: 5px;
          font-size: 15px;
        }
        .icon-time {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: $mianColor;
          padding: 3px 8px;
          border-radius: 25px;
          background: #ebf6ff;
          > i {
            font-size: 20px;
            margin-right: 2px;
          }
        }
      }
    }
  }
  // 博客推荐
  .hot {
    .common-content {
      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 8px 0;
        border-bottom: 1px dashed #ddd;
        a {
          display: flex;
          text-decoration: none;
          color: #34495e;
        }
        .essay-tag {
          padding: 0;
          width: 11%;
          overflow: hidden;
          margin-right: 4px;
        }
        .essay-text {
          max-width: 59%;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: break-all;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          font-size: 16px;
          text-align: left;
        }
        .essay-time {
          width: 30%;
          display: flex;
          align-items: center;
          font-size: 12px;
          padding: 3px;
          border-radius: 20px;
          color: $mianColor;
          background: #ebf6ff;
          i {
            font-size: 14px;
          }
          span {
            margin-left: 2px;
          }
        }
      }
      li:first-child {
        padding-top: 0;
      }
      li:hover a {
        cursor: pointer;
        color: $mianColor;
      }
      li:active a {
        transition: 0.1s;
        transform: scale(0.99);
      }
    }
  }
  // 打赏博客
  .play-tour {
    > ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      i {
        font-size: 18px;
        margin-right: 5px;
        color: #f56c6c;
      }
      .statement {
        display: flex;
        align-items: center;
        width: 100%;
        height: 22px;
        font-size: 16px;
        text-align: left;
        align-self: flex-start;
        margin-bottom: 15px;
        overflow: hidden;
        ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-self: flex-start;
          animation: move 10s ease infinite;
        }
      }
      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        > span {
          display: flex;
          align-items: center;
          align-self: flex-start;
          color: #34495e;
          border-radius: 25px;
          background: rgba(52, 73, 94, 0.1);
          font-size: 15px;
          i {
            color: #34495e;
            margin-right: 1px;
            font-size: 22px;
          }
          b {
            padding: 3px 8px 3px 0;
          }
        }
        > .play-tour-wx {
          margin: 22px;
          display: flex;
          flex-direction: column;
          height: 110px;
          padding: 15px 15px 25px;
          border: 2px solid #1a9dff;
          border-radius: 10px;
          img {
            height: 120px;
            width: 120px;
          }
        }
      }
    }
  }
  // 友情广告
  .advertising {
    .advertising-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      > img {
        height: 100%;
        width: 100%;
      }
      .no-advertising {
        width: 100%;
        height: 38px;
        line-height: 38px;
        a {
          display: inline-block;
          height: 100%;
          width: 100%;
          color: #fff;
          background: $mianColor;
          border: 1px solid rgba(52, 152, 219, 0.3);
          border-radius: 5px;
        }
        a:hover {
          text-decoration: underline;
          background: lighten($mianColor, 10%); //变亮;
        }
      }
    }
    .advertising-no-data {
      > img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
@keyframes move {
  0% {
    margin-top: 0px;
  }
  15% {
    margin-top: 0px;
  }
  25% {
    margin-top: -21px;
  }
  40% {
    margin-top: -21px;
  }
  50% {
    margin-top: -42px;
  }
  65% {
    margin-top: -42px;
  }
  75% {
    margin-top: -63px;
  }
  90% {
    margin-top: -63px;
  }
  100% {
    margin-top: -84px;
  }
}
// 博客更新模块ui设置
.el-carousel__item--card {
  width: 100%;
}
.el-carousel__item--card {
  transition: transform 0.8s ease-in-out;
}
.el-carousel__item,
.el-carousel__mask {
  top: 10px;
  height: 50px;
}
</style>
