<template>
  <article class="markdown-body" style="background-color: none;background: rgba(255,255,255,0.25);">
    <h1>
      开始使用
    </h1>

    <p>请先<a href="#/doc/install">安装</a>本组件库。</p>
    <p>然后在你的代码中写入下面的代码</p>
    <pre><code>import {Button, Tabs, Switch, Dialog} from "su-cai-ui";
import "su-cai-ui/dist/style.css";</code></pre>
    就可以使用我提供的组件了。<br>
    （点击左上角呼出菜单查看组件预览吧！）
    <h2>Vue 单文件组件</h2>
    <p>代码示例：</p>
    <pre><code>&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Switch, Dialog} from "su-cai-ui"
  import "su-cai-ui/dist/style.css";
  export default {
    components: {Button}
  }
&lt;/script&gt;
 </code></pre>
  </article>
</template>

<script>
export default {

}
</script>

<style lang="scss" ></style>