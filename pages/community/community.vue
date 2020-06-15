<template>
	<view class="community">
		社区
	</view>
</template>

<script>
	export default {
		onLoad() {console.log('community--onLoad')},
		onShow() {console.log('community--onShow')},
		onHide() {console.log('community--onHide')},
		data() {
			return {
				downOption:{},
				upOption:{}
			}
		},
		methods: {
			mescrollInit(e) {
				// console.log(e)
			},
			downCallback(e) {
				// console.log(e)
			},
			upCallback(e) {
				// console.log(e)
				console.log(e)
				e.num++
			},
		}
	}
</script>

<style lang="less" scoped>
.community {
	width: 750rpx;
	height: 100vh;
	background-color: #f05a18;
	padding-top: 180rpx;
}
</style>
