<template>
  <div class="item">
        <div class="line">
            <span class="head">id</span>
            <span class="content">{{ItemInfo.id}}</span>
        </div>
        <div class="line">
            <span class="head">标题</span>
            <input type="text" v-model="ItemInfo.title">
        </div>
        <div class="line">
            <span class="head">标签</span>
            <input type="text" v-model="ItemInfo.tag">
        </div>
        <div class="line">
            <span class="head">日期</span>
            <input type="text" v-model="ItemInfo.date">
        </div>
        <div class="line">
            <span class="head">链接</span>
            <input type="text" v-model="ItemInfo.href">
        </div>
        <div class="line">
            <span class="head">图片</span>
            <input type="text" v-model="ItemInfo.coverPic">
        </div>
        <div class="line">
            <span class="head">简介</span>
            <input type="text" v-model="ItemInfo.content">
        </div>
        <button v-on:click="submitEdit">提交修改</button>
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
  },
  methods:{
    submit:function(){
        console.log(this.ItemInfo);
    },
    submitEdit:function(){
        (function(_this){
            console.log(_this.ItemInfo);
            _this.$axios
            .post(
                // "api/admin/editActivities",	//dev
                "https://njuesport.club:8000/admin/editActivities",
                _this.ItemInfo
            )
            .then(function(response) {
                alert("修改成功");
            })
            .catch(function(error) {
                console.log(error);
                alert("修改失败，可能后端服务未开启，请联系管理员");
            });
        })(this);
    }
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
button{
    width: 50px;
    height:30px;
}
input{
    border:0px;
    font-size: 16px;
    width:940px;
}
</style>