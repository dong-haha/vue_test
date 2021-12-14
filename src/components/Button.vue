<template>
    <div>
          <el-button  @click="dosomething" type="primary" round>按钮</el-button>
    </div>
  
</template>

<script>
export default {
    name:'Button',
    data() {
        return {
            
        }
    },
    methods: {
        dosomething: function(){
            this.$http.get('/query/one?which=number&data=2019301211011')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },

}
</script>

<style>

</style>