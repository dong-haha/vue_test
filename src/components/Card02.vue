<template>
  <div>
<!-- <transition name = "nameoftransition"> -->
        <!-- 卡片 -->
    <el-row>
      <el-col :span="5" v-for="(o, index) in example_data" :key="index" :offset="2" >
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img src="@/assets/img/card.jpg" class="image" />
          <div style="padding: 14px">
            <span>蓝色妖姬 {{ o }}</span>
            <div class="bottom clearfix">
              <time class="time">2021.12.06</time>
            </div>
          </div>
        </el-card>
         <div style="margin-top:20px"></div>
      </el-col>
    </el-row>

<el-row>
  <el-col :span="6" :offset="13">

             <!-- Pagination 分页 -->
            <el-pagination
                background
                layout=" total, prev, pager, next"
                :total="30"
                :page-size="9"
                @current-change="handleCurrentChange"
                    >
            </el-pagination>
 
  </el-col>
</el-row>
           
    
  </div>
  
</template>

<script>
        export default {
            data() {
            return {
            currentPage:2,
             example_datas: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
             i:0,
             ii:9,
            };
             },
             computed:{
            example_data: function () {
                  return this.example_datas.slice(this.i,this.ii)
             },
             },

            methods: {
                handleCurrentChange: function (size) {
                this.i = 9*(size-1);
                this.ii= 9*(size);
                 },
                
            },

        }
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>