<template>
<div>
    <el-card  v-for="item in card_data" :key="item.index" class="box-card" shadow="hover" style="margin-top:5px;text-indent: 2em">
    <div slot="header" class="clearfix">
        <span>{{item.card_name}}</span>
    </div>
    <!-- 遍历内容中的每一段 -->
    <div v-for="i in item.card_text" :key="i.index" class="text item">
        <p>{{i}}</p>
    </div>
    </el-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            card_data:[ { card_name: "卡片名称",
                         card_text:["Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries",],
                         },
                         {
                         card_name: "Basic introduction",
                         card_text:["Brassica napus (B. napus, AACC, 2n=38) is one of the most important global oil crops. But, the fundamental research of B. napus is relatively backward , in particuluar genes that regulating various agronomic traits have not been clearly understood, severely limiting breeding process.",  "Expression database can facilitate the identification of gene functions,which is greatly needed in rapeseed. Here we present a highly comprehensive temporal-resolution study of developmental transcriptomes by using data from eight different tissues covering ZS11 ( Zhong shuang 11 ) 3 distinct developmental stages during its life cycle, including cotyledon,root,stem peel,leaf,bud,flower,silique,silique wall and seed. Especially ,there exist 26 and 23 time points in seed and silique wall respectively and 24 leaf developmental time points , with 2 day intervals. Based on analysis of these transcriptome data , we develop BnTIR (http://yanglab.hzau.edu.cn/BnTIR) , and provide function modules like eFP, JBrower, Blast , co-expression,Gene Index conversion and other features. Besides, in our data page some extensive linkouts can be clicked to other B. napus resources.",],   
                         }
            ]
        }
    },

}
</script>

<style>
.el-card__header{
    background-color:#d9ead3 ;
}
</style>