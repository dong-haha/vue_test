<template>
  <div id="my_echarts_map"  style="width:1000px;height:700px;"></div>
</template>

<script>

export default {

    data () {
    return {
      efp_data: [{"name":"cotyledon_0h","value":0},{"name":"root_0h","value":0.04},{"name":"vegetative_rosette","value":0},{"name":"root","value":0},{"name":"upper_stem_peel","value":341.24},{"name":"middle_stem_peel","value":198},{"name":"lower_stem_peel","value":52},{"name":"leaf_1","value":518.9},{"name":"leaf_2","value":577.6},{"name":"leaf_3","value":628.9},{"name":"leaf_4","value":650.13},{"name":"leaf_5","value":723.28},{"name":"leaf_6","value":794.1},{"name":"leaf_7","value":889.06},{"name":"leaf_8","value":894.21},{"name":"leaf_9","value":1085.51},{"name":"leaf_10","value":1049.75},{"name":"leaf_11","value":837.92},{"name":"leaf_12","value":879.64},{"name":"leaf_13","value":938.62},{"name":"leaf_14","value":901.23},{"name":"leaf_15","value":782.17},{"name":"leaf_16","value":716.41},{"name":"leaf_17","value":505.32},{"name":"leaf_18","value":738.3},{"name":"leaf_19","value":601.08},{"name":"leaf_20","value":590.37},{"name":"leaf_21","value":417.53},{"name":"leaf_22","value":406.55},{"name":"leaf_23","value":137.41},{"name":"bud_2mm","value":0.5},{"name":"bud_4mm","value":6.72},{"name":"sepal","value":113.56},{"name":"petal","value":1.09},{"name":"filament","value":3.32},{"name":"pollen","value":0.51},{"name":"silique_2DAF","value":1.22},{"name":"silique_4DAF","value":0.39},{"name":"silique_6DAF","value":2.15},{"name":"silique_8DAF","value":10.44},{"name":"silique_10DAF","value":24.99},{"name":"silique_12DAF","value":90.73},{"name":"silique_wall_14DAF","value":106.66},{"name":"silique_wall_16DAF","value":372.42},{"name":"silique_wall_18DAF","value":402.74},{"name":"silique_wall_20DAF","value":569.7},{"name":"silique_wall_22DAF","value":518.88},{"name":"silique_wall_24DAF","value":642.23},{"name":"silique_wall_26DAF","value":904.2},{"name":"silique_wall_28DAF","value":841.35},{"name":"silique_wall_30DAF","value":1002.34},{"name":"silique_wall_32DAF","value":1024.25},{"name":"silique_wall_34DAF","value":1143.56},{"name":"silique_wall_36DAF","value":1896.69},{"name":"silique_wall_38DAF","value":858.25},{"name":"silique_wall_40DAF","value":927.05},{"name":"silique_wall_42DAF","value":972.57},{"name":"silique_wall_44DAF","value":757.8},{"name":"silique_wall_46DAF","value":1477.26},{"name":"silique_wall_48DAF","value":1449.22},{"name":"silique_wall_50DAF","value":511.82},{"name":"silique_wall_52DAF","value":350.27},{"name":"silique_wall_54DAF","value":26.5},{"name":"silique_wall_56DAF","value":3.23},{"name":"silique_wall_58DAF","value":1.75},{"name":"silique_wall_60DAF","value":0.43},{"name":"seed_14DAF","value":0.1},{"name":"seed_16DAF","value":0},{"name":"seed_18DAF","value":0.1},{"name":"seed_20DAF","value":0.1},{"name":"seed_22DAF","value":0.17},{"name":"seed_24DAF","value":1.15},{"name":"seed_26DAF","value":14.53},{"name":"seed_28DAF","value":6.94},{"name":"seed_30DAF","value":0.49},{"name":"seed_32DAF","value":1.37},{"name":"seed_34DAF","value":0.33},{"name":"seed_36DAF","value":0.51},{"name":"seed_38DAF","value":0},{"name":"seed_40DAF","value":1.96},{"name":"seed_42DAF","value":1.4},{"name":"seed_44DAF","value":2.44},{"name":"seed_46DAF","value":1.04},{"name":"seed_48DAF","value":0.06},{"name":"seed_50DAF","value":0.04},{"name":"seed_52DAF","value":0},{"name":"seed_54DAF","value":0.17},{"name":"seed_56DAF","value":0.44},{"name":"seed_58DAF","value":0},{"name":"seed_60DAF","value":0.44},{"name":"seed_62DAF","value":0.32},{"name":"seed_64DAF","value":0.21}]
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        var efp_data = this.efp_data
        //console.log(this)
        let echarts = require('echarts');
        var chartDom = document.getElementById('my_echarts_map');
			//初始化echarts实例
			var myChart = echarts.init(chartDom);
			var option;
            this.$http.get('./BnTIR.svg')
            .then(function (svg) {
                // console.log(this) 注意 this不是vue
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
           				    max: 2000,
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