<template>
	<view class="player" @tap="goPage('/pages/film/film')">
		<image src="../static/imgs/camera3.png"></image>
		<text class="iconfont icon-bofang"></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.player {
		position: fixed;
		z-index: 1000;
		bottom: 60rpx;
		right: 40rpx;
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		background-color: #e44623;
		image {
			position: absolute;
			width: 60rpx;
			height: 60rpx;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
		.icon-bofang {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-80%,-50%) rotate(180deg);
			font-size: 16rpx;
			color: #e44623;
		}
	}
</style>
