<template>
    <nut-tabs v-model="tab1value" title-scroll title-gutter="10" name="tab4value" background="#fff">
        <template v-slot:titles>
            <div class="nut-tabs__titles-item" @click="tab1value = item.key" :class="{ active: tab1value == item.key }"
                :key="'tabs__titles' + item.key" v-for="item in list">
                <span class="nut-tabs__titles-item__text">{{ item.title }}</span>
                <span class="nut-tabs__titles-item__line"></span>
            </div>
        </template>
        <nut-tab-pane v-for="item in list" :pane-key="item.key">
            <content :key="item.key" :date="date" />
        </nut-tab-pane>
    </nut-tabs>
</template>
<script lang="ts">
import content from "../content/index.vue"
import { reactive, toRefs} from 'vue';
export default {
    components: {
        content
    },
    setup() {
        const state = reactive({
            date:[],
            tab1value: 0,
            list: [
                {
                    title: "新品尝鲜",
                    key: 0,
                },
                {
                    title: "送亲子",
                    key: 1,
                },
                {
                    title: "送长辈",
                    key: 2,
                },
                {
                    title: "生日",
                    key: 3,
                },
                {
                    title: "聚会",
                    key: 4,
                },
                {
                    title: "下午茶",
                    key: 5,

                }
            ]
        });

        return { ...toRefs(state) };
    }
};
</script>
<style lang="scss">
.line {
    border: none;
}

.nut-tabs__titles-item__line {
    background: $themesColorOwner !important;
}

.active {
    font-size: $font34 !important;
}
</style>
