<template>
    <div class="layout">
        <div class="left-control">
            <p
                class="left-control-item"
                v-for="(item, index) in leftControlData"
                :key="item.id"
                @click="selectControl(item)"
            >
                <img :src="item.icon" />
            </p>
        </div>
        <div class="center-selects">
            <div class="center-selects-header"></div>
            <div class="center-selects-content"></div>
        </div>
        <div class="right-container">
            <div class="right-container-header"></div>
            <div class="right-container-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import videoImg from '@resources/video.png'
import { useRouter } from 'vue-router'
var router = useRouter()
var leftControlData = ref([{ text: '', icon: videoImg, id: '01', pagePath: '/video' }])
var currentSelectControl = ref('')
function selectControl(e) {
    currentSelectControl.value = e.id
    router.push(e.pagePath)
}
</script>
<style lang="scss" scoped>
.layout {
    width: 100vw;
    height: 100vh;
    display: flex;
}
.left-control {
    width: 70px;
    height: 100%;
    background-color: black;
    .left-control-item {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 25px;
            height: 25px;
        }
    }
}
.center-selects {
    width: 300px;
    height: 100%;
}
.center-selects-header {
    width: 100%;
    height: 80px;
    background-color: #f5f5f5;
    border: 1px solid #e7e7e7;
    -webkit-app-region: drag; //使得该部分区域可以拖拽控制窗口位置
}
.center-selects-content {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 80px);
    padding: 40px;
    background-color: #ebeaea;
    border: 1px solid #e7e7e7;
}
.right-container {
    width: calc(100% - 370px);
}
.right-container-header {
    width: 100%;
    height: 80px;
    background-color: #f5f5f5;
    border: 1px solid #e7e7e7;
    -webkit-app-region: drag; //使得该部分区域可以拖拽控制窗口位置
}
.right-container-content {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 80px);
    padding: 40px;
    background-color: var(--color-neutral-2);
}
</style>
