<template>
	<view class="tabbar flex_bea">
		<view class="user_box">
			<image class="icon" src="../static/imgs/lun4.jpg"></image>
			<view class="add flex_center">
				<text class="iconfont icon-add"></text>
			</view>
		</view>
		<view class="share flex_bea">
			<view class="item" :class="currentShare===index?'active':''" v-for="(item,index) in shareData" :key="item.id" @click="handleShareClick(item.id,index)">
				<text class="iconfont" :class="item.icon"></text>
				<text class="num">{{item.num}}</text>
			</view >
		</view>
		<div class="camera">
			<image src="../static/imgs/camera.png"></image>
			<text class="iconfont icon-bofang"></text>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shareData:[],
				currentShare:8
			};
		},
		created() {
			this.getUserData()
		},
		methods:{
			getUserData() {
				this.shareData = getApp().globalData.shareData
			},
			handleShareClick(id,index) {
				if(this.currentShare===index) {
					this.currentShare = 8
					this.shareData[index].num--
					getApp().globalData.shareData = this.shareData
					this.getUserData()
				}else {
					this.currentShare = index
					this.shareData[index].num++
					getApp().globalData.shareData = this.shareData
					this.getUserData()
				}
			}
		}
	}
</script>

<style lang="less" scoped>
.tabbar {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 140rpx;
	padding:0 26rpx 30rpx;
	// background-color: red;
}
.user_box {
	position: relative;
	width: 100rpx;
	height: 100rpx;
	.icon {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}
	.add {
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 40rpx;
		height: 40rpx;
		transform: translate(-50%,50%);
		border-radius: 50%;
		background-color: #e6442b;
		.icon-add {
			font-size: 12rpx;
		}
	}
}

.camera {
	position: relative;
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
	background-color: rgba(0,0,0,0.4);
	image {
		position: absolute;
		width: 70rpx;
		height: 70rpx;
		left: 30rpx;
		top: 20rpx;
	}
	.icon-bofang {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-60%,-30%) rotate(180deg);
		font-size: 16rpx;
	}
}

.share {
	width: 55%;
	.item {
		position: relative;
		width: 20%;
		height: 46rpx;
	}
	.active {
		.iconfont {
			color: #fc3530;
		}
	}
	.iconfont {
		font-size: 55rpx;
		color: #fff;
	}
	.num {
		position: absolute;
		font-size: 16rpx;
		bottom: -28rpx;
		left: 50%;
	}
}
</style>
