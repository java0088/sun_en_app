<template>
	<view class="work_area">
		<scroll-view class="work_scroll" scroll-y="true">
			<!-- 推荐话题 -->
			<view class="rec_topic">
				<view class="top flex_bea">
					<view class="tit">推荐话题</view>
					<view class="tit">更多话题<text class="iconfont icon-you"></text></view>
				</view>
				<view class="bom">
					<swiper class="work_swipe" :indicator-dots="true" indicator-color="rgba(0,0,0,0.2)" indicator-active-color="#f95a45">
						<swiper-item v-for="i in 2" :key="i">
							<view class="item_list">
								<view class="item flex_bea" v-for="index in 3" :key="index">
									<view class="left">
										<text class="tag">#</text>
										<text>来练练美式发音吧</text>
										<text class="new_tag">新</text>
									</view>
									<view class="right">参与</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
				
			<!-- 瀑布流数据展示 -->
			<view class="play_list">
				<view class="play_item">
					<view class="item">
						<image class="item_src" src="../static/imgs/user.jpg"></image>
						<view class="love">123456</view>
						<view class="play_btn flex_center">
							<text class="iconfont icon-bofang"></text>
						</view>
					</view>
					<view class="tit">#自由穿搭我在行</view>
					<view class="user flex_bea">
						<view class="user_info flex_align">
							<image class="icon" src="@/static/imgs/user2.jpg"></image>
							<view class="name">小小裴</view>
						</view>
						<view class="zan">
							<text class="iconfont icon-xihuan"></text>
							<text class="num">123</text>
						</view>
					</view>
				</view>
				<view class="play_item">
					<view class="item">
						<image class="item_src" src="../static/imgs/user.jpg"></image>
						<view class="love">123456</view>
						<view class="play_btn flex_center">
							<text class="iconfont icon-bofang"></text>
						</view>
					</view>
					<view class="tit">#自由穿搭我在行</view>
					<view class="user flex_bea">
						<view class="user_info flex_align">
							<image class="icon" src="@/static/imgs/user2.jpg"></image>
							<view class="name">小小裴</view>
						</view>
						<view class="zan">
							<text class="iconfont icon-xihuan"></text>
							<text class="num">123</text>
						</view>
					</view>
				</view>
				<view class="play_item">
					<view class="item">
						<image class="item_src" src="../static/imgs/user.jpg"></image>
						<view class="love">123456</view>
						<view class="play_btn flex_center">
							<text class="iconfont icon-bofang"></text>
						</view>
					</view>
					<view class="tit">#自由穿搭我在行</view>
					<view class="user flex_bea">
						<view class="user_info flex_align">
							<image class="icon" src="@/static/imgs/user2.jpg"></image>
							<view class="name">小小裴</view>
						</view>
						<view class="zan">
							<text class="iconfont icon-xihuan"></text>
							<text class="num">123</text>
						</view>
					</view>
				</view>
				<view class="play_item">
					<view class="item">
						<image class="item_src" src="../static/imgs/study3.png"></image>
						<view class="love">123456</view>
						<view class="play_btn flex_center">
							<text class="iconfont icon-bofang"></text>
						</view>
					</view>
					<view class="tit">#自由穿搭我在行</view>
					<view class="user flex_bea">
						<view class="user_info flex_align">
							<image class="icon" src="@/static/imgs/user2.jpg"></image>
							<view class="name">小小裴</view>
						</view>
						<view class="zan">
							<text class="iconfont icon-xihuan"></text>
							<text class="num">123</text>
						</view>
					</view>
				</view>
				<view class="play_item">
					<view class="item">
						<image class="item_src" src="../static/imgs/lun4.jpg"></image>
						<view class="love">123456</view>
						<view class="play_btn flex_center">
							<text class="iconfont icon-bofang"></text>
						</view>
					</view>
					<view class="tit">#自由穿搭我在行</view>
					<view class="user flex_bea">
						<view class="user_info flex_align">
							<image class="icon" src="@/static/imgs/user2.jpg"></image>
							<view class="name">小小裴</view>
						</view>
						<view class="zan">
							<text class="iconfont icon-xihuan"></text>
							<text class="num">123</text>
						</view>
					</view>
				</view>
				<view class="play_item">
					<view class="item">
						<image class="item_src" src="../static/imgs/lun5.jpg"></image>
						<view class="love">123456</view>
						<view class="play_btn flex_center">
							<text class="iconfont icon-bofang"></text>
						</view>
					</view>
					<view class="tit">#自由穿搭我在行</view>
					<view class="user flex_bea">
						<view class="user_info flex_align">
							<image class="icon" src="../static/imgs/study1.jpg"></image>
							<view class="name">小小裴</view>
						</view>
						<view class="zan">
							<text class="iconfont icon-xihuan"></text>
							<text class="num">123</text>
						</view>
					</view>
				</view>
				<view class="play_item">
					<view class="item">
						<image class="item_src" src="../static/imgs/lun2.jpg"></image>
						<view class="love">123456</view>
						<view class="play_btn flex_center">
							<text class="iconfont icon-bofang"></text>
						</view>
					</view>
					<view class="tit">#自由穿搭我在行</view>
					<view class="user flex_bea">
						<view class="user_info flex_align">
							<image class="icon" src="../static/imgs/lun3.jpg"></image>
							<view class="name">小小裴</view>
						</view>
						<view class="zan">
							<text class="iconfont icon-xihuan"></text>
							<text class="num">123</text>
						</view>
					</view>
				</view>
			</view>
				
		</scroll-view>
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
.rec_topic {
	width: 100%;
	.top {
		padding: 30rpx 20rpx;
	}
}
.work_scroll {
	height: 1050rpx;
}
.bom {
	width: 100%;
	background-color: #fff;
	.work_swipe {
		height: 340rpx;
	}
	.item_list {
		width: 100%;
		height: 340rpx;
		.item {
			padding:20rpx 30rpx ;
			font-size: 28rpx;
			margin-bottom: 16rpx;
			font-weight: 700;
			.tag {
				color: #fff;
			}
			.left {
				position: relative;
				padding-right: 50rpx;
			}
			.right {
				padding: 4rpx 30rpx;
				border-radius: 20rpx;
				color: #fff;
				background-color: #e6492a;
				font-size: 26rpx;
			}
		}
	}	
}

// 瀑布流数据展示
.play_list {
	// display: flex;
	// justify-content: space-between;
	// flex-wrap: wrap;
	width: 100%;
	padding: 0 16rpx;
	background-color: #f8f8f8;
}
.play_item {
	float: left;
	width: 48%;
	border-radius: 16rpx;
	overflow: hidden;
	margin-top: 20rpx;
	background-color: #fff;
	.item {
		position: relative;
		width: 100%;
		.item_src {
			width: 100%;
			// height: ;
		}
		.play_btn {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			width: 50rpx;
			height: 50rpx;
			border-radius: 50%;
			background-color: rgba(0,0,0,0.3);
			.iconfont {
				font-size: 20rpx;
				color: #fff;
			}
		}
		.love {
			position: absolute;
			bottom: 20rpx;
			left: 12rpx;
			color: #fff;
			background-color: rgba(0,0,0,0.3);
			border-radius: 16rpx;
			font-size: 22rpx;
			padding: 2rpx 22rpx;
			border: 1rpx solid rgba(255,255,255,0.6);
		}
	}
	.user {
		font-size: 26rpx;
		padding: 16rpx;
		color: #787878;
		.icon {
			width: 60rpx;
			height: 60rpx;
			border-radius: 50%;
		}
		.name {
			margin-left: 12rpx;
		}
	}
	.tit {
		margin: 12rpx;
	}
	.num {
		margin-left: 8rpx;
	}
}
</style>
