<template>
    
    <nut-grid :column-num="4" :border="border">
        <nut-grid-item  class="grid-item-box" v-for="item in sortArray" :key="item">
            <sort :sort="item" />
        </nut-grid-item>
    </nut-grid>
    <!-- <view class="line"></view> -->

</template>

<script>
import sort from "./item.vue"
import { reactive, toRefs } from 'vue';
// 引入静态资源
import Sign from '@/static/images/Sign.png'
export default {
    props: {
        border: {
            type: Boolean,
            default: false
        }
    },
    components: {
        sort
    },
    setup() {
        const sortArray = reactive(
            [
                {
                    icon: Sign,
                    iconName: '签到'
                },
                {
                    icon: Sign,
                    iconName: '签到'
                },
                {
                    icon: Sign,
                    iconName: '签到'
                },
                {
                    icon: Sign,
                    iconName: '签到'
                }
            ]
        )
        console.log(sortArray);
        return { sortArray }
    }
}
</script>

<style lang="scss" scoped>
::v-deep(nut-grid-item) {
    .sort-icon {
        font-size: 40rpx;
    }

    .sort-name {
        font-size: 20rpx;
    }
}
</style>