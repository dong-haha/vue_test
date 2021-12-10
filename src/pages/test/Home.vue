<template>
<div>
    <Card01/>
           <div style="margin-top:20px"></div>
    <Table/>
            <div style="margin-top:20px"></div>
    <Card02/> 
             <div style="margin-top:20px"></div>
    <Timeline/>
            <div style="margin-top:20px"></div>
</div>

  
</template>

<script>
import Card01  from "../../components/Card01"
import Table  from "../../components/Table"
import Card02 from "../../components/Card02"
import Timeline from "../../components/Timeline"
export default {
  components:{
        Card01,
        Table,
        Card02,
        Timeline,
  }

}
</script>

<style>

</style>