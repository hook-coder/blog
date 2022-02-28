import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import EelementPlus from "element-plus";
import 'element-plus/dist/index.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs.css'  //导入代码高亮样式
import 'github-markdown-css'

createApp(App)
  .directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
      try {
        let element = block.innerHTML;
        let lang = block.getAttribute('class');
        const preCode = hljs.highlight(lang, element, true).value;
        const linesLength = preCode.split(/\n/).slice(0, -1).length;
        let linesNum = '<span aria-hidden="true" class="line-numbers-rows">';
        for (let index = 0; index < linesLength - 1; index++) {
          linesNum = linesNum + "<span></span>";
        }
        linesNum += "</span>";

        let html = preCode;

        // 右上角语言说明
        // if (linesLength) {
        //   html += '<b class="hljs-langName">' + lang + "</b>";
        // }

        html = '<pre class="hljs"><code>' + html + "</code>" + linesNum + "</pre>";

        block.parentNode.parentNode.innerHTML = html;
      } catch (__) {
        console.log("执行错误", __);
      }
    })
  })
  .use(hljs.vuePlugin)
  .use(router)
  .use(EelementPlus)
  .mount("#app");
