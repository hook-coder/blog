<template>
  <footer>
    <div class="footer-inner">
      <ul>
        <li>
          <div class="contact">
            <div class="contact-item">
              <img src="../assets/qq.png" />
              <span>扫码加QQ</span>
            </div>
            <div class="contact-item">
              <img src="../assets/wechat.jpg" />
              <span>扫码加微信</span>
            </div>
          </div>
          <div class="contact different">
            <span class="title">QQ邮箱：</span>
            <span class="content">1669588676@qq.com</span>
          </div>
          <div class="contact different">
            <span class="title">版权信息：</span>
            <span class="content">Copyright © 2020 AFLY. 当前版本 1.0.0</span>
          </div>
        </li>
        <li>
          <div class="other footer-common">
            <p class="title">其他模块</p>
            <ul class="other-content">
              <li><a href="#">摸鱼文档</a></li>
              <li><a href="#">摸鱼高级技巧不外传版本2.0</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div class="blogroll footer-common">
            <p class="title">友情链接</p>
            <ul class="blogroll-content">
              <li><a href="#">AFLY FRIEND BOLG 1</a></li>
              <li><a href="#">AFLY FRIEND BOLG 2</a></li>
              <li><a href="#">AFLY FRIEND BOLG 3</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script lang="ts">
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
$mianColr: #1a9dff;
$aHoverColor: red;
$bgColor: white;
$rightBorderColor: #e1e1e1;
footer {
  position: relative;
  z-index: 1;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  background: $bgColor;
  padding: 50px 0;
  box-shadow: 0px -1px 10px #ccc;
  & .footer-inner {
    width: 1160px;
    height: 100%;
    background: $bgColor;
    & > ul {
      display: flex;
      justify-content: center;
      & > li {
        width: 33.3%;
        border-right: 1px solid $rightBorderColor;
        list-style-type: none;
      }
    }
  }
}
.contact {
  display: flex;
  justify-content: space-around;
  &:nth-child(2) {
    margin-top: 23px;
  }
  &:nth-child(3) {
    margin-top: 15px;
  }
  & .contact-item {
    display: flex;
    flex-direction: column;
    height: 110px;
    padding: 20px 22px 26px;
    border: 2px solid $mianColr;
    border-radius: 10px;
    & img {
      height: 110px;
      width: 110px;
    }
    & span {
      font-size: 16px;
    }
  }
  & .content {
    margin: 6px 0 0 20px;
    font-size: 16px;
  }
  &:nth-child(3) > .content {
    margin-bottom: 10px;
  }
}
.title {
  font-weight: bold;
}
.different {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.footer-common {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  & ul {
    padding: 8px 0;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    & li {
      margin-top: 5px;
      list-style-type: disc;
      text-align: left;
      list-style-type: disc;
      & a {
        font-size: 15px;
        color: $mianColr;
        text-decoration: none;
        &:hover {
          color: $aHoverColor;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>