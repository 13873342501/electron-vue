<template>
    <div class="video">
        <video autoplay ref="videoRef"></video>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
var videoRef = ref()
onMounted(() => {
    playVideo()
})

async function playVideo() {
    const sourceId = await window.electron.openVideo() //获取指定的且已经在电脑上打开的应用id

    const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: sourceId, //设置需要录制的应用屏幕id，例如打开的 是微信则只录制微信这一块屏幕的区域。如果返回的是整个屏幕显示应用的id，则录制整个屏幕的区域
                minWidth: 1280,
                maxWidth: 1280,
                minHeight: 720,
                maxHeight: 720
            }
        }
    })
    handleStream(stream)
}

function handleStream(stream) {
    const video = videoRef.value
    video.srcObject = stream
    video.onloadedmetadata = e => video.play()
}

function handleError(e) {
    console.log(e)
}
</script>
<style lang="scss" scoped>
.video {
    width: 100%;
    height: 100%;
    border: 1px solid red;
    video {
        width: 100%;
        height: 100%;
    }
}
</style>
