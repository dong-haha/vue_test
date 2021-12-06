<template>
  <el-table :data="tableData" stripe style="width: 100%"> 
    <el-table-column prop="date" label="Tissue" width="180"> </el-table-column>
    <el-table-column prop="name" label="Tissue*Period*Replicate" > </el-table-column>
    <el-table-column prop="address" label="Samples"> </el-table-column>
    <el-table-column prop="name" label="Tissue*Period*Replicate" > </el-table-column>
    <el-table-column prop="address" label="Samples"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
        tableData: [{
          date: 'Root',
          name: '1*1*3',
          address: '3'
        }, {
          date: 'Stem',
          name: '3*1*3',
          address: '9'
        }, {
          date: 'Leaf',
          name: '25*1*3',
          address: '75'
        }, {
          date: 'Bud',
          name: '2*1*3',
          address: '6'
        }]
    };
  },
  methods: {

    
          },
};
</script>

<style>

/* 奇数行颜色 */
.el-table__row {
  background-color: #fafafa !important;
}
/* 偶数行颜色 */
.el-table__row--striped td {
  background-color: #fff5ee !important;
}
</style>