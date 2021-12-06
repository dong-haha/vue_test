<template>
  <div class="service">
    <a v-for="item in block_list" :key="item.id" :href="item.card_url" class="service-block">
      <div class="service-upblock">
        <div>
          <img :src="item.image_url" width="200" height="150" />
        </div>
      </div>
      <div class="service-downblock">
        <span>{{item.card_name }}</span>
      </div>
    </a>
  </div>
</template>

<script>

export default {
            name:'ServiceBlock',
            // props:['card_name','card_url','image_url'],
            data(){
		      	return {
                block_list:[
                  {id:0,card_url:"./linear_regression.html",image_url:require("@/assets/img/1.jpg"),card_name:"线性回归",},
                  {id:1,card_url:"./number.html",image_url:require("@/assets/img/2.jpg"),card_name:"手写数字识别",},
                  {id:2,card_url:"./flower.html",image_url:require("@/assets/img/3.jpg"),card_name:"花卉识别(待完成)",},
                  {id:3,card_url:"./plant.html",image_url:require("@/assets/img/4.jpg"),card_name:"植物识别",},
                  {id:4,card_url:"./insect.html",image_url:require("@/assets/img/5.jpeg"),card_name:"昆虫识别",},
                  {id:5,card_url:"./yolo3.html",image_url:require("@/assets/img/7.jpg"),card_name:"Yolo3目标物体检测",},
                ],
            }
		    },
         
            methods: {},  // 方法
            computed:{}, //计算属性

};
</script>

<style scoped>
.service {
        /* inherit form body */
        flex: 2;
        padding: 40px 64.27px;
        text-align: center;
        background-color: rgba(209, 254, 251, 0.8);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        /* allow flex elements wrap */
        flex-wrap: wrap;
        color: black;
        font-size: 18.54px;
        font-weight: bold;
    }
    .service-block {
        background-color: rgba(255, 255, 255, 0.7);
        margin: 16.18px;
        width: 25%;
        max-width: 400px;
        min-width: 220px;
        display: flex;
        flex-direction: column;
        border: none;
        border-radius: 9px;
        box-shadow: -2px 2px 9px rgba(36, 52, 86, 0.25);
        /* cutoff overflow part of input */
        overflow: hidden;
        transition: all 0.5s;
    }
    .service-block:hover {
        border-radius: 30px;
        box-shadow: -2px 2px 18px rgba(0, 0, 0, 0.25);
    }
    .service-upblock {
        padding: 30px 0px;
        border-radius: 9px 9px 0px 0px;

    }
    .service-downblock {
        min-height: 60px;
        padding: 11.45px 18.54px;
        background-color: rgba(36, 52, 86, 0.25);
        border-radius: 0px 0px 9px 9px;
        font-weight: lighter;
        text-align: center;
    }
    .service-upblock, .service-downblock {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .service a {
        color: black;
    }
    .service a:hover {
        color: rgb(28, 37 ,59);
    }

</style>