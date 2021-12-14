<template>
  <div  style="text-align:center;width:60%;margin-left:25%;font-size:14px">
        <el-row>
        <el-col :span="3"><div style="color:#7BA7AB">Gene ID</div></el-col>
        <el-col :span="15" >
            <div><el-input placeholder="" v-model="input1" :disabled=" input2==''?false:true"></el-input></div>
        </el-col>
        <el-col :span="1"><div><h4 style="color: #136649;font-family: Comic Sans MS;" title="You can enter a single Arabidopsis name, a single or multiple rapeseed gene number (ending in ZS), a single or multiple Arabidopsis gene number">?</h4></div></el-col>
        </el-row>

        <el-row>
            <el-col :span="10" :offset="1"><div>
                         例如：   <el-link  @click ="click1" style="color:#8fd5ff;margin-right:15px;">test1 </el-link> 
                                  <el-link  @click ="click2" style="color:#8fd5ff;margin-right:15px;">test2</el-link>
                        </div></el-col>
        </el-row>
        <el-row>
        <el-col :span="3"><div style="color:#7BA7AB">Gene Index</div></el-col>
        <el-col :span="15"><div>
            <el-input placeholder="" v-model="input2" :disabled=" input1==''?false:true"></el-input></div>
        </el-col>
        <el-col :span="1"><div><h4 style="color: #136649;font-family: Comic Sans MS;margin-left:5px" title="You can enter a single Arabidopsis name, a single or multiple rapeseed gene number (ending in ZS), a single or multiple Arabidopsis gene number">?</h4></div></el-col>
        </el-row>

        <el-row>
            <el-col :span="8" :offset="1"><div>
                         例如：   <el-link  @click ="click3" style="color:#8fd5ff">test3</el-link>
                        </div></el-col>
        </el-row>

        <!-- 两个按钮 -->
        <el-row>
            <el-col :span="10" :offset="3">
                  <el-button @click="submit" type="success" style="padding:10px">submit</el-button>
                   <el-button @click="reset" type="info" style="padding:10px;margin-left:20px">reset</el-button>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
    data() {
        return {
            input1:'',
            input2:'',
            state1:false,
            state2:false,     
        }
    },
    methods: {
        click1: function(){
            this.input2=''
            this.input1="test1"
        },
         click2: function(){
             this.input2=''
            this.input1="test2"
        },
        click3: function(){
            this.input1=''
            this.input2="test3"
        },
        reset: function(){
            this.input1=''
            this.input2=''
        } ,
        submit:function(){
            if(this.input1=='' && this.input2==''){
                        this.$message({
                        showClose: true,
                        message: '请输入值',
                        type: 'warning'
                });
            }

            else if(!(this.input1=='test1' || this.input1=='test2' || this.input2=='test3')){
                        this.$message({
                        showClose: true,
                        message: '请输入正确的值，如test1',
                        type: 'warning'
                 });
            }
            else{
                if(this.input1==''){this.$bus.$emit("efp_data",this.input2);}
                else{this.$bus.$emit("efp_data",this.input1)}
                
            }
    
        }  
        
    },

}
</script>

<style>
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;


  }
</style>