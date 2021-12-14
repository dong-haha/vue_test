<template>
<div>
  <div  v-show="value1" class="spinner-border text-primary" style="display:block;margin:0 auto;"></div>
  <div  v-show="value"  id="my_echarts_map"  style="width:1000px;height:700px;"></div>
</div>
</template>

<script>

export default {

    data () {
    return {
		// 测试数据
      efp_data1: [{"name":"cotyledon_0h","value":0},{"name":"root_0h","value":0.04},{"name":"vegetative_rosette","value":0},{"name":"root","value":0},{"name":"upper_stem_peel","value":341.24},{"name":"middle_stem_peel","value":198},{"name":"lower_stem_peel","value":52},{"name":"leaf_1","value":518.9},{"name":"leaf_2","value":577.6},{"name":"leaf_3","value":628.9},{"name":"leaf_4","value":650.13},{"name":"leaf_5","value":723.28},{"name":"leaf_6","value":794.1},{"name":"leaf_7","value":889.06},{"name":"leaf_8","value":894.21},{"name":"leaf_9","value":1085.51},{"name":"leaf_10","value":1049.75},{"name":"leaf_11","value":837.92},{"name":"leaf_12","value":879.64},{"name":"leaf_13","value":938.62},{"name":"leaf_14","value":901.23},{"name":"leaf_15","value":782.17},{"name":"leaf_16","value":716.41},{"name":"leaf_17","value":505.32},{"name":"leaf_18","value":738.3},{"name":"leaf_19","value":601.08},{"name":"leaf_20","value":590.37},{"name":"leaf_21","value":417.53},{"name":"leaf_22","value":406.55},{"name":"leaf_23","value":137.41},{"name":"bud_2mm","value":0.5},{"name":"bud_4mm","value":6.72},{"name":"sepal","value":113.56},{"name":"petal","value":1.09},{"name":"filament","value":3.32},{"name":"pollen","value":0.51},{"name":"silique_2DAF","value":1.22},{"name":"silique_4DAF","value":0.39},{"name":"silique_6DAF","value":2.15},{"name":"silique_8DAF","value":10.44},{"name":"silique_10DAF","value":24.99},{"name":"silique_12DAF","value":90.73},{"name":"silique_wall_14DAF","value":106.66},{"name":"silique_wall_16DAF","value":372.42},{"name":"silique_wall_18DAF","value":402.74},{"name":"silique_wall_20DAF","value":569.7},{"name":"silique_wall_22DAF","value":518.88},{"name":"silique_wall_24DAF","value":642.23},{"name":"silique_wall_26DAF","value":904.2},{"name":"silique_wall_28DAF","value":841.35},{"name":"silique_wall_30DAF","value":1002.34},{"name":"silique_wall_32DAF","value":1024.25},{"name":"silique_wall_34DAF","value":1143.56},{"name":"silique_wall_36DAF","value":1896.69},{"name":"silique_wall_38DAF","value":858.25},{"name":"silique_wall_40DAF","value":927.05},{"name":"silique_wall_42DAF","value":972.57},{"name":"silique_wall_44DAF","value":757.8},{"name":"silique_wall_46DAF","value":1477.26},{"name":"silique_wall_48DAF","value":1449.22},{"name":"silique_wall_50DAF","value":511.82},{"name":"silique_wall_52DAF","value":350.27},{"name":"silique_wall_54DAF","value":26.5},{"name":"silique_wall_56DAF","value":3.23},{"name":"silique_wall_58DAF","value":1.75},{"name":"silique_wall_60DAF","value":0.43},{"name":"seed_14DAF","value":0.1},{"name":"seed_16DAF","value":0},{"name":"seed_18DAF","value":0.1},{"name":"seed_20DAF","value":0.1},{"name":"seed_22DAF","value":0.17},{"name":"seed_24DAF","value":1.15},{"name":"seed_26DAF","value":14.53},{"name":"seed_28DAF","value":6.94},{"name":"seed_30DAF","value":0.49},{"name":"seed_32DAF","value":1.37},{"name":"seed_34DAF","value":0.33},{"name":"seed_36DAF","value":0.51},{"name":"seed_38DAF","value":0},{"name":"seed_40DAF","value":1.96},{"name":"seed_42DAF","value":1.4},{"name":"seed_44DAF","value":2.44},{"name":"seed_46DAF","value":1.04},{"name":"seed_48DAF","value":0.06},{"name":"seed_50DAF","value":0.04},{"name":"seed_52DAF","value":0},{"name":"seed_54DAF","value":0.17},{"name":"seed_56DAF","value":0.44},{"name":"seed_58DAF","value":0},{"name":"seed_60DAF","value":0.44},{"name":"seed_62DAF","value":0.32},{"name":"seed_64DAF","value":0.21}],
      efp_data2: [{"name":"cotyledon_0h","value":2.27},{"name":"root_0h","value":2.03},{"name":"vegetative_rosette","value":3.52},{"name":"root","value":3.27},{"name":"upper_stem_peel","value":11.03},{"name":"middle_stem_peel","value":14.39},{"name":"lower_stem_peel","value":8.82},{"name":"leaf_1","value":6.21},{"name":"leaf_2","value":4.08},{"name":"leaf_3","value":5.93},{"name":"leaf_4","value":6.24},{"name":"leaf_5","value":6.49},{"name":"leaf_6","value":6.8},{"name":"leaf_7","value":7.46},{"name":"leaf_8","value":6.73},{"name":"leaf_9","value":4.1},{"name":"leaf_10","value":5.64},{"name":"leaf_11","value":5.08},{"name":"leaf_12","value":4.89},{"name":"leaf_13","value":4.71},{"name":"leaf_14","value":3.6},{"name":"leaf_15","value":6.08},{"name":"leaf_16","value":6.71},{"name":"leaf_17","value":6.27},{"name":"leaf_18","value":8.43},{"name":"leaf_19","value":3.69},{"name":"leaf_20","value":6.7},{"name":"leaf_21","value":2.59},{"name":"leaf_22","value":6.39},{"name":"leaf_23","value":3.79},{"name":"bud_2mm","value":2.52},{"name":"bud_4mm","value":1.25},{"name":"sepal","value":0.18},{"name":"petal","value":0.22},{"name":"filament","value":0.66},{"name":"pollen","value":0},{"name":"silique_2DAF","value":0.09},{"name":"silique_4DAF","value":4},{"name":"silique_6DAF","value":3.12},{"name":"silique_8DAF","value":4.38},{"name":"silique_10DAF","value":5.57},{"name":"silique_12DAF","value":7.06},{"name":"silique_wall_14DAF","value":3.88},{"name":"silique_wall_16DAF","value":4.18},{"name":"silique_wall_18DAF","value":4.27},{"name":"silique_wall_20DAF","value":4.57},{"name":"silique_wall_22DAF","value":4.13},{"name":"silique_wall_24DAF","value":7.61},{"name":"silique_wall_26DAF","value":3.11},{"name":"silique_wall_28DAF","value":6.06},{"name":"silique_wall_30DAF","value":7.64},{"name":"silique_wall_32DAF","value":6.49},{"name":"silique_wall_34DAF","value":6.33},{"name":"silique_wall_36DAF","value":8.88},{"name":"silique_wall_38DAF","value":2.46},{"name":"silique_wall_40DAF","value":8.14},{"name":"silique_wall_42DAF","value":5.37},{"name":"silique_wall_44DAF","value":6.36},{"name":"silique_wall_46DAF","value":2.93},{"name":"silique_wall_48DAF","value":5.43},{"name":"silique_wall_50DAF","value":6.46},{"name":"silique_wall_52DAF","value":5.49},{"name":"silique_wall_54DAF","value":9.57},{"name":"silique_wall_56DAF","value":2.09},{"name":"silique_wall_58DAF","value":1.17},{"name":"silique_wall_60DAF","value":0},{"name":"seed_14DAF","value":8.08},{"name":"seed_16DAF","value":8.34},{"name":"seed_18DAF","value":8.31},{"name":"seed_20DAF","value":7.09},{"name":"seed_22DAF","value":5.64},{"name":"seed_24DAF","value":2.69},{"name":"seed_26DAF","value":6.71},{"name":"seed_28DAF","value":7.36},{"name":"seed_30DAF","value":5.16},{"name":"seed_32DAF","value":5},{"name":"seed_34DAF","value":3.54},{"name":"seed_36DAF","value":3.8},{"name":"seed_38DAF","value":2.65},{"name":"seed_40DAF","value":2.43},{"name":"seed_42DAF","value":2.94},{"name":"seed_44DAF","value":2.43},{"name":"seed_46DAF","value":3},{"name":"seed_48DAF","value":1.67},{"name":"seed_50DAF","value":2.96},{"name":"seed_52DAF","value":2.35},{"name":"seed_54DAF","value":2.53},{"name":"seed_56DAF","value":2.43},{"name":"seed_58DAF","value":2.58},{"name":"seed_60DAF","value":2.78},{"name":"seed_62DAF","value":1.36},{"name":"seed_64DAF","value":0.97}],
	  efp_data3: [{"name":"cotyledon_0h","value":0},{"name":"root_0h","value":0.62},{"name":"vegetative_rosette","value":0},{"name":"root","value":0.34},{"name":"upper_stem_peel","value":0.87},{"name":"middle_stem_peel","value":0.97},{"name":"lower_stem_peel","value":0.65},{"name":"leaf_1","value":0.14},{"name":"leaf_2","value":0.26},{"name":"leaf_3","value":0.04},{"name":"leaf_4","value":0.19},{"name":"leaf_5","value":0.04},{"name":"leaf_6","value":0.1},{"name":"leaf_7","value":0.21},{"name":"leaf_8","value":0},{"name":"leaf_9","value":0.06},{"name":"leaf_10","value":0.22},{"name":"leaf_11","value":0.11},{"name":"leaf_12","value":0.08},{"name":"leaf_13","value":0.17},{"name":"leaf_14","value":0.2},{"name":"leaf_15","value":0.04},{"name":"leaf_16","value":0.17},{"name":"leaf_17","value":0},{"name":"leaf_18","value":0.06},{"name":"leaf_19","value":0.04},{"name":"leaf_20","value":0},{"name":"leaf_21","value":2.76},{"name":"leaf_22","value":0.15},{"name":"leaf_23","value":0.08},{"name":"bud_2mm","value":1.06},{"name":"bud_4mm","value":1.27},{"name":"sepal","value":35.04},{"name":"petal","value":60.26},{"name":"filament","value":57.53},{"name":"pollen","value":0.07},{"name":"silique_2DAF","value":0.53},{"name":"silique_4DAF","value":0.22},{"name":"silique_6DAF","value":0.32},{"name":"silique_8DAF","value":0.81},{"name":"silique_10DAF","value":0.57},{"name":"silique_12DAF","value":0.47},{"name":"silique_wall_14DAF","value":0.66},{"name":"silique_wall_16DAF","value":0},{"name":"silique_wall_18DAF","value":0},{"name":"silique_wall_20DAF","value":0.33},{"name":"silique_wall_22DAF","value":0.08},{"name":"silique_wall_24DAF","value":0.09},{"name":"silique_wall_26DAF","value":0.09},{"name":"silique_wall_28DAF","value":0.16},{"name":"silique_wall_30DAF","value":0.26},{"name":"silique_wall_32DAF","value":2.82},{"name":"silique_wall_34DAF","value":0.56},{"name":"silique_wall_36DAF","value":2.35},{"name":"silique_wall_38DAF","value":1.99},{"name":"silique_wall_40DAF","value":0.26},{"name":"silique_wall_42DAF","value":0.99},{"name":"silique_wall_44DAF","value":0.49},{"name":"silique_wall_46DAF","value":0.48},{"name":"silique_wall_48DAF","value":1.32},{"name":"silique_wall_50DAF","value":1.32},{"name":"silique_wall_52DAF","value":0.84},{"name":"silique_wall_54DAF","value":2.65},{"name":"silique_wall_56DAF","value":0.55},{"name":"silique_wall_58DAF","value":0.11},{"name":"silique_wall_60DAF","value":0.09},{"name":"seed_14DAF","value":0.8},{"name":"seed_16DAF","value":1.92},{"name":"seed_18DAF","value":0.83},{"name":"seed_20DAF","value":0.95},{"name":"seed_22DAF","value":1.47},{"name":"seed_24DAF","value":1.45},{"name":"seed_26DAF","value":3.33},{"name":"seed_28DAF","value":3.49},{"name":"seed_30DAF","value":7.72},{"name":"seed_32DAF","value":8.5},{"name":"seed_34DAF","value":9.12},{"name":"seed_36DAF","value":7.09},{"name":"seed_38DAF","value":7.3},{"name":"seed_40DAF","value":3.71},{"name":"seed_42DAF","value":4.6},{"name":"seed_44DAF","value":2.92},{"name":"seed_46DAF","value":2.99},{"name":"seed_48DAF","value":0.85},{"name":"seed_50DAF","value":1.07},{"name":"seed_52DAF","value":0.27},{"name":"seed_54DAF","value":0.07},{"name":"seed_56DAF","value":0},{"name":"seed_58DAF","value":0},{"name":"seed_60DAF","value":0.04},{"name":"seed_62DAF","value":0},{"name":"seed_64DAF","value":0.04}],
      max:[2000,60,14],
	  value:false,
	  value1:false,
  }
  },
  mounted(){
		
	this.$bus.$on('efp_data',(data)=>{

		this.value=true;
		this.value1=true;

		if(data=='test1'){this.drawLine([this.efp_data1,this.max[0]]);}
		if(data=='test2'){this.drawLine([this.efp_data2,this.max[1]]);}
		if(data=='test3'){this.drawLine([this.efp_data3,this.max[2]]);}
	})
		
  },
  methods: {
    drawLine(test_data){

        var efp_data = test_data[0]
		var max = test_data[1]
        //console.log(this)
        let echarts = require('echarts');
        var chartDom = document.getElementById('my_echarts_map');
			//初始化echarts实例
			var myChart = echarts.init(chartDom);
			var option;
            this.$http.get('./BnTIR.svg')
            .then((svg) =>{
                // console.log(this) 注意 this不是vue  //已修改，在axios中this为undefined，需要写为箭头函数.then((svg) =>{})
                 // 首先向 echarts 注册 SVG 字符串或解析过的 SVG DOM
			   echarts.registerMap('efp', {svg: svg.data})     //注意  这里要写svg.data，svg是一个对象，
                                                                //    还有头文件。具体数据在data中				
				option = {
				        tooltip: {  //配置提示信息
				        },
				        visualMap: {
				            right: '10%',
							top: '2%',
							min: 1,					//指定 visualMapContinuous 组件的允许的最小值
           				    max: max,
							orient: 'horizontal',
							realtime: true, 	 	//拖拽时，是否实时更新
							calculable: true,  		//是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
							text:[null, 'TPM'],   //两端的文本
							inRange: {
								color: ['#FFFF00', '#FF8000', '#FF0000']
				            }
				        },
				        series: [{
				            name: 'expression',
				            type: 'map',    // 系列图表类型
				            map: 'efp',
				            //roam: true,   // 启用缩放和平移
				            emphasis: {
				                label: {
				                    show: false
				                }
				            },
				            selectedMode: false,   //是否支持多个选中
				            data: efp_data,
				        }]
				    };

				 this.value1=false;
				 // 使用刚指定的配置项和数据显示图表
				 myChart.setOption(option);
				 
                
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
  }

}
</script>

<style>

</style>