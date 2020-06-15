<template>
	<view class="header flex_between" :class="currenNav===1?'color_fff':'bg_color'">
		<view class="avatar flex_center" @click="handleShowInfo">
			<cmd-progress stroke-color="#fc3530" :show-info="false" :width="42" type="circle" :percent="75"></cmd-progress>
			<text class="iconfont icon-user"></text>
			<view class="day">第3天</view>
		</view>
		<view class="nav flex_bea">
			<view class="item" :class="currenNav===index?'active':''" v-for="(item,index) in navList" :key="item.id" @click="handleNavClick(index)">
				{{item.title}}
			</view>
		</view>
		<view class="search">
			<text class="iconfont icon-search1"></text>
		</view>
		<!-- 左边滑条 -->
		<view class="slide" @touchstart="handleShowInfo"></view>
		<!-- 弹出层 -->
		<uni-drawer mode="left" ref="popUp" :width="260">
		    <view style="padding:30rpx;">
		        <Userinfo></Userinfo>
		    </view>
		</uni-drawer>
	</view>
</template>

<script>
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue";
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue";
	import Userinfo from '@/components/UserInfo.vue'
	export default {
		components:{cmdProgress,uniDrawer,Userinfo},
		props:['currenNav'],
		data() {
			return {
				navList:[
					{id:1,title:'发现'},
					{id:2,title:'语境'},
					{id:3,title:'社区'}
				],
				// currenNav:0
			};
		},
		methods:{
			handleNavClick(index) {
				// this.currenNav = index
				this.$emit('change',index)
			},
			handleShowInfo() {
				this.$refs.popUp.open()
			}
		}
	}
</script>

<style lang="less" scoped>
	.bg_color {
		background-color: #fff;
		color: #000;
		.nav {
			color: #9e9e9e;
			.active {
				color: #222;
			}
		}
	}
	.header {
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		width: 100%;
		height: 180rpx;
		padding: 60rpx 26rpx 0;
		.nav {
			width: 400rpx;
			font-size: 30rpx;
			.item {
				position: relative;
				padding-bottom: 16rpx;
			}
				
			.active {
				&::after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
					width: 36rpx;
					height: 6rpx;
					background-color: #fc3530;
					border-radius: 6rpx;
				}
			}
		}
		.search {
			margin-top: 26rpx;
			text {
				font-size: 40rpx;
			}
		}
	}
.slide {
	position: fixed;
	top: 0;
	left: 0;
	width: 20rpx;
	height: 100vh;
	z-index: 1000;
	background-color: rgba(0,0,0,0);
}
</style>
