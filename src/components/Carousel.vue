<template>
  <div style="margin-top:20px;margin-bottom:10px">
    <el-carousel indicator-position="none"  height="250px" type="card" loop="true" interval="2000">
    <el-carousel-item v-for="item in images" :key="item.index">
       <img :src="item.src" alt="无图片" width="100%" height="100%" object-fit="cover">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
    name: 'Carousel',
    data(){
        return{
        images: [
      {
          src: require('@/assets/img/carousel/1.jpg')
      }, {
          src: require('@/assets/img/carousel/2.jpg')
      }, {
          src:require('@/assets/img/carousel/3.jpg')
      }, {
          src: require('@/assets/img/carousel/4.jpg')
      }, {
          src: require('@/assets/img/carousel/5.jpg')
      }
                 ],
   }
    }

}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>