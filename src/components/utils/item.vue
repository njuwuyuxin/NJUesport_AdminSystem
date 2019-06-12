<template>
  <div class="item">
        <div class="line">
            <span class="head">id</span>
            <span class="content">{{ItemInfo.id}}</span>
        </div>
        <div class="line">
            <span class="head">标题</span>
            <span class="content">{{ItemInfo.title}}</span>
        </div>
        <div class="line">
            <span class="head">标签</span>
            <span class="content">{{ItemInfo.tag}}</span>
        </div>
        <div class="line">
            <span class="head">日期</span>
            <span class="content">{{ItemInfo.date}}</span>
        </div>
        <div class="line">
            <span class="head">链接</span>
            <span class="content">{{ItemInfo.href}}</span>
        </div>
        <div class="line">
            <span class="head">图片</span>
            <span class="content">{{ItemInfo.coverPic}}</span>
        </div>
        <div class="line">
            <span class="head">简介</span>
            <span class="content">{{ItemInfo.content}}</span>
        </div>     
  </div>
</template>

<script>
export default {
  name: 'Item',
  data () {
    return {
      
    }
  },
  props:{
      ItemInfo:Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
    margin:20px;
}
.line{
    border:solid black 1px;
    margin:1px;
    width: 1000px;
}
.head{
    display: inline-block;
    width:50px;
    border-right: solid black 1px;
}
.content{
    /* display: inline-block; */
    width: 100%;
    overflow: hidden;
}

</style>