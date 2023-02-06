<template>
    <nut-category class="clasification" :category="category" @change="change">
        <nut-category-pane :categoryChild="categoryChild" @onChange="onChange">
        </nut-category-pane>
    </nut-category>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue';
import { categoryInfo, categoryChild } from "./data"

export default {
    setup() {
        const data = reactive({
            category: [{}],
            categoryChild: [{}],
            categoryInfo: {}
        });

        onMounted(() => {
            data.categoryInfo = categoryInfo;
            data.category = categoryInfo.category;
            data.categoryChild = categoryChild;

        });

        const change = (index: any) => {
            let dataCategoryInfo = data.categoryInfo as any
            data.categoryChild = [].concat(dataCategoryInfo.category[index].children as any);
        };
        const onChange = () => {
            console.log("当前分类数据");
        }
        return {
            onChange,
            change,
            ...toRefs(data)
        }
    }
};
</script>
<style lang="scss">
.clasification {
    width: 100vw;
    height: 100vh;


    .nut-category-pane__cateListRight {
        height: 100vh;
        overflow-y: auto;
        padding-bottom: 180rpx;
    }
}
</style>
