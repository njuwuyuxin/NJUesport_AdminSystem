<template>
  <div class="Frame">
      <div>ActivitiesManage Page</div>
  </div>
</template>

<script>
export default {
  name: 'ActivitiesManage',
  data(){
      return{
          activities:[]
      }
  },
  methods:{
    getActivities:function(){
        (function(_this){
            _this.$axios
            .post(
                "api/admin/getActivitiesList",	//dev
                {password:'fanyicheng'}
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
      this.getActivities();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Frame{

}
</style>
