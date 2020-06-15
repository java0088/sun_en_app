<template>
	<view class="side_nav">
		<view class="item" @click="handleShowCaption">
			<text class="iconfont" :class="showCaption?'icon-guanbi-yanjing':'icon-yanjing'"></text>
			<view>字幕</view>
		</view>
		<view class="item">
			<text class="iconfont icon-zshangyishou"></text>
			<view>上一句</view>
		</view>
		<view class="item">
			<text class="iconfont icon-comment"></text>
			<view>详情</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showCaption:false
			};
		},
		methods:{
			handleShowCaption() {
				this.showCaption = !this.showCaption
				this.$emit('showCaption',this.showCaption)
			}
		}
	}
</script>

<style lang="less" scoped>
.side_nav {
	position: absolute;
	width: 80rpx;
	height: 360rpx;
	bottom: 170rpx;
	right: 26rpx;
	.item {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 120rpx;
		.iconfont {
			font-size: 42rpx;
			font-weight: 700;
		}
		view {
			font-size: 26rpx;
		}
	}
}
</style>
