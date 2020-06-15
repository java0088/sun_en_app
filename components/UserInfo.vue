<template>
	<view class="userinfo">
		<view class="top">
			<view class="avatar flex_center">
				<cmd-progress stroke-color="#fc3530" :show-info="false" :width="42" type="circle" :percent="75"></cmd-progress>
				<text class="iconfont icon-user"></text>
				<view class="day">第3天</view>
			</view>
			<view class="username tit">小桶</view>
			<view class="more flex_align">
				<view>查看更多</view>
				<text class="iconfont icon-you"></text>
			</view>
		</view>
		<!-- 经验和口语练习 -->
		<view class="extra flex_bea">
			<view class="experience">听力经验值{{tingli}}</view>
			<view class="exercise">口语练习{{kouyu}}</view>
		</view>
		
		<!-- 分类管理  -->
		<view class="cate_list">
			<view class="cate_item">
				<view class="item">
					<text class="iconfont icon-shijianzhongbiao"></text>
					<view>目标与进度</view>
				</view>
				<view class="item">
					<text class="iconfont icon-xunzhang1"></text>
					<view>成就与勋章</view>
				</view>
				<view class="item">
					<text class="iconfont icon-integral"></text>
					<view class="circle">我的积分</view>
				</view>
				<view class="item">
					<text class="iconfont icon-tianjiajiahaoyoutianjiapengyou"></text>
					<view>邀请好友</view>
				</view>
			</view>
			<view class="cate_item">
				<view class="item">
					<text class="iconfont icon-xiaoxi"></text>
					<view class="circle">我的消息</view>
				</view>
				<view class="item">
					<text class="iconfont icon-aixin"></text>
					<view>我的收藏</view>
				</view>
			</view>
			<view class="cate_item">
				<view class="item">
					<text class="iconfont icon-icon_jiaohuan"></text>
					<view>难度调整</view>
				</view>
			</view>
		</view>
	
		<!-- 底部系统设置 -->
		<view class="set_box flex_bea">
			<view class="set_item flex_align">
				<text class="iconfont icon-shezhi"></text>
				<view>系统设置</view>
			</view>
			<view class="set_item flex_align">
				<text class="iconfont icon-fankui"></text>
				<view>意见反馈</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tingli:12345,
				kouyu:12458,
			};
		}
	}
</script>

<style lang="less" scoped>
.top {
	position: relative;
	display: flex;
	// height: 160rpx;
	.username {
		margin:10rpx 20rpx;
	}
	.more {
		position: absolute;
		right: 0;
		bottom: -10rpx;
		font-size: 20rpx;
		color: #b6b5b9;
	}
}
.extra {
	width: 100%;
	margin-top: 60rpx;
	view {
		// height: 60rpx;
		border-radius: 8rpx;
		padding: 6rpx 18rpx;
		font-size: 24rpx;
	}
	.experience {
		background-color: #fbe3e1;
		color: #f85c5f;
	}
	.exercise {
		background-color: #f2fac1;
		color: #fac800;
	}
}

// 分类管理
.cate_list {
	padding-top: 30rpx;
	.cate_item {
		margin-top: 50rpx;
	}
	.item {
		
		display: flex;
		align-items: center;
		padding-left: 50rpx;
		height: 100rpx;
		.iconfont {
			font-size: 50rpx;
			color: #343339;
			width: 80rpx;
		}
		// .icon-xunzhang1 {
		// 	font-size: 55rpx;
		// }
		view {
			position: relative;
			font-size: 32rpx;
			color: #222;
			padding-right: 40rpx;
			// margin-left: 30rpx;
		}
		.circle{
			&::after{
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				width: 16rpx;
				height: 16rpx;
				background-color: #ff1618;
				border-radius: 50%;
			}
		}
		.icon_img {
			width: 50rpx;
			height: 50rpx;
		}
	}
}
// 系统设置
.set_box {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 200rpx;
	// background-color: red;
	.set_item {
		flex-direction: column;
		width: 50%;
		.iconfont {
			font-size: 50rpx;
			color: #343339;
		}
		view {
			margin-top: 20rpx;
			font-size: 32rpx;
		}
	}
}
</style>
