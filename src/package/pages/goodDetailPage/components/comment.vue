<template>
    <nut-comment imagesRows="multi" :images="cmt.images" :videos="cmt.videos" :info="cmt.info" :follow="cmt.follow"
        @clickImages="clickImages" @clickOperate="clickOperate" @click="handleComment">
    </nut-comment>


</template>
<script lang="ts">
import { ref, onMounted } from 'vue';
import Taro from '@tarojs/taro';
interface cmTypes {
    images: string;
    videos: string;
    info: string;
    follow: string;
}
export default {
    setup() {
        let cmt = ref({} as cmTypes);
        onMounted(() => {
            Taro.request({
                url: 'https://storage.360buyimg.com/nutui/3x/comment_data.json', //仅为示例，并非真实的接口地址
                success: function (res) {
                    cmt.value = res.data.Comment;
                }
            })
        })
        const clickImages = (imgs) => {
            console.log('进行图片展示', imgs)
        }
        const clickOperate = (value) => {
            console.log("点击底部操作按钮回调函数", value)
        }
        const handleComment = (comment) => {
            console.log("处理评论回调函数", comment)
        }
        return {
            cmt,
            clickImages,
            clickOperate,
            handleComment
        };
    }
}
</script>
