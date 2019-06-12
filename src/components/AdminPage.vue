<template>
  <div class="Frame">
      <div>main page</div>
      <div>请输入密码</div>
      <input type="text" v-model="password">
      <button v-on:click="getActivities">提交</button>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  data(){
      return{
          password:"",
          activities:[],
      }
  },
  methods:{
    getActivities:function(){
        (function(_this){
            console.log(_this.password);
            _this.$axios
            .post(
                "api/admin/getActivitiesList",	//dev
                {password:_this.password}
            )
            .then(function(response) {
                var data=response.data;
                for(var i=0;i<data.length;i++)
                    _this.activities.push(data[i]);
                console.log(_this.activities);
            })
            .catch(function(error) {
                console.log(error);
                alert("密码错误，如需修改密码请联系管理员");
            });
        })(this);
    }
  },
  mounted(){
    //   this.getActivities();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Frame{

}
</style>
