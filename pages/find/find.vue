<template>
	<view class="find">
		<!-- 中间轮播图和导航链接 -->
		<scroll-view class="scroll_box" scroll-y="true"  @scroll="handleScroll1" :refresher-threshold="20">
				<view class="middle">
					<!-- 宣传轮播图 -->
					<view class="find_swipe">
						<swiper class="swiper" :circular="true" :indicator-dots="true" indicator-color="rgba(255,255,255,0.4)" indicator-active-color="#e9481a">
							<swiper-item>
									<image src="../../static/imgs/study1.jpg" mode=""></image>
						    </swiper-item>
						    <swiper-item>
									<image src="../../static/imgs/study2.jpg" mode=""></image>
						    </swiper-item>
						    <swiper-item>
									<image src="../../static/imgs/study3.png" mode=""></image>
						    </swiper-item>
						</swiper>                       
					</view>
					
					<!-- 导航链接 -->
					<view class="nav_link flex_bea">
						<view class="link topic flex_bea">
							<view class="icon flex_center">
								<text class="iconfont icon-huati"></text>
							</view>
							<view class="text">话题</view>
						</view>
						<view class="link primer flex_bea">
							<view class="icon flex_center">
								<text class="iconfont icon-gongandunpai"></text>
							</view>
							<view class="text">入门</view>
						</view>
						<view class="link vocabulary flex_bea">
							<view class="icon flex_center">
								<text class="iconfont icon-adn"></text>
							</view>
							<view class="text">词汇</view>
						</view>
						<view class="link phrase flex_bea">
							<view class="icon flex_center">
								<text class="iconfont icon-shuxingliebiaoxiangqing2"></text>
							</view>
							<view class="text">短语</view>
						</view>
					</view>
				</view>
				
				<!-- 推荐视频 -->
				<view class="latest">
					<view class="title">最新视频推荐</view>
					<view class="list">
						<view class="v_item" v-for="index in 5" :key="index">
							<image class="item_src" src="../../static/imgs/study1.jpg"></image>
							<view class="love">
								<text class="iconfont icon-xihuan"></text>
								<text class="num">123456</text>
							</view>
							<view class="play_btn flex_center">
								<text class="iconfont icon-bofang"></text>
							</view>
						</view>
					</view>
				</view>
				
				<!-- 贡献者 -->
				<view class="owner">
					<view class="title">来和这些贡献者互动吧</view>
					
					<scroll-view class="owner_scroll" scroll-x="true" @scroll="handleScroll2">
						<view class="list">
							<view class="o_item flex_align" v-for="index in 3" :key="index">
								<view class="user_icon">
									<image src="../../static/imgs/user.jpg"></image>
								</view>
								<view class="info">
									<view class="name">大幂幂~~</view>
									<view class="work">
										<text>349个作品</text>
										<text>2867个粉丝</text>
									</view>
									<view class="attention_btn">
										+ 关注
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
			
				</view>
				
				<!-- 视频分类 -->
				<view class="cate_list">
					<!-- 普通的分类 -->
					<view class="cate_item">
						<view class="top flex_between">
							<view class="title">主题播单: 万圣节</view>
							<view class="more">查看更多<text class="iconfont icon-you"></text></view>
						</view>
						<view class="list flex_between">
							<view class="v_item" v-for="index in 3" :key="index">
								<image class="item_src" src="../../static/imgs/study1.jpg"></image>
								<view class="love">
									<text class="iconfont icon-xihuan"></text>
									<text class="num">123456</text>
								</view>
								<view class="play_btn flex_center">
									<text class="iconfont icon-bofang"></text>
								</view>
							</view>
						</view>
					</view>
					
					<!-- 普通的分类 -->
					<view class="cate_item">
						<view class="top flex_between">
							<view class="title">主题播单: 万圣节</view>
							<view class="more">查看更多<text class="iconfont icon-you"></text></view>
						</view>
						<view class="list flex_between">
							<view class="v_item" v-for="index in 3" :key="index">
								<image class="item_src" src="../../static/imgs/study1.jpg"></image>
								<view class="love">
									<text class="iconfont icon-xihuan"></text>
									<text class="num">123456</text>
								</view>
								<view class="play_btn flex_center">
									<text class="iconfont icon-bofang"></text>
								</view>
							</view>
						</view>
					</view>
					
					<!-- 最活跃的用户 -->
					<view class="owner_active">
						<view class="title">大幂幂~最新很活跃哟</view>
						<view class="con">
							<view class="top">
								<view class="user_icon">
									<image src="../../static/imgs/user2.jpg"></image>
								</view>
								<view class="info flex_between">
									<view class="name">大幂幂~</view>
									<view class="hobbies">
										<view>Lingulist</view>
										<view>Dog Lover</view>
									</view>
									<view class="nums flex_between">
										<view><text class="bold">12345</text>视频</view>
										<view><text class="bold">1234</text>粉丝</view>
										<view><text class="bold">1245</text>获赞</view>
									</view>
								</view>
							</view>
							<view class="work flex_between">
								<view class="v_item" v-for="index in 4" :key="index">
									<image class="item_src" src="../../static/imgs/user.jpg"></image>
									<view class="love">
										<text class="iconfont icon-xihuan"></text>
										<text class="num">123456</text>
									</view>
									<view class="play_btn flex_center">
										<text class="iconfont icon-bofang"></text>
									</view>
								</view>
							</view>
						</view>
					</view>
					
					<!-- 普通的分类 -->
					<view class="cate_item">
						<view class="top flex_between">
							<view class="title">主题播单: 万圣节</view>
							<view class="more">查看更多<text class="iconfont icon-you"></text></view>
						</view>
						<view class="list flex_between">
							<view class="v_item" v-for="index in 3" :key="index">
								<image class="item_src" src="../../static/imgs/study1.jpg"></image>
								<view class="love">
									<text class="iconfont icon-xihuan"></text>
									<text class="num">123456</text>
								</view>
								<view class="play_btn flex_center">
									<text class="iconfont icon-bofang"></text>
								</view>
							</view>
						</view>
					</view>
					
					<!-- 推荐用户的新作品 -->
					<view class="owner_new">
						<view class="title">大幂幂~又有新作品啦!</view>
						<scroll-view class="owner_new_scroll" scroll-x="true" >
							<view class="work flex_between">
								<view class="first flex_align">
									<view class="user_icon">
										<image src="../../static/imgs/user2.jpg"></image>
									</view>
									<view class="bold">大幂幂~</view>
									<view class="attention_btn">
										+ 关注
									</view>
								</view>
								<view class="v_item" v-for="index in 6" :key="index">
									<image class="item_src" src="../../static/imgs/user.jpg"></image>
									<view class="love">
										<text class="iconfont icon-xihuan"></text>
										<text class="num">123456</text>
									</view>
									<view class="play_btn flex_center">
										<text class="iconfont icon-bofang"></text>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		onLoad() {console.log('find--onLoad')},
		onShow() {console.log('find--onShow')},
		onHide() {console.log('find--onHide')},
		data() {
			return {
				
			}
		},
		methods: {
			handleScroll2() {
				console.log('yes')
			},
			handleScroll1() {
				console.log('yes')
			}
		}
	}
</script>

<style lang="less" scoped>
.find {
	width: 750rpx;
	background-color: #f8f8f8;
}
.scroll_box {
	height: 100vh;
	// padding-top: 180rpx;
}
.middle {
	width: 100%;
	// height: 600rpx;
	background-color: #fafafa;
	padding: 210rpx 30rpx 30rpx;
}
.find_swipe {
	width: 100%;
	height: 280rpx;
	border-radius: 12rpx;
	overflow: hidden;
	box-shadow: 0rpx 2rpx 4rpx rgba(255,255,255,0.2);
	.swiper {
		height: 280rpx;
		
		swiper-item {
			width: 100%;
			image {
				width: 100%;
				height: 280rpx;
			}
		}
	}
}

.nav_link {
	margin-top: 22rpx;
	.link {
		width: 25%;
		height: 160rpx;
		flex-direction: column;
		.icon {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			.iconfont {
				font-size: 50rpx;
				color: #fff;
			}
		}
		.text {
			font-size: 30rpx;
			color: #222;
		}
	}
	.topic .icon {
		background-color: #7456da;
		box-shadow: 0rpx 4rpx 16rpx rgba(100,73,241,0.8);
	}
	.primer .icon {
		background-color: #88b12d;
		box-shadow: 0rpx 4rpx 16rpx rgba(136,177,45,0.8);
		.iconfont {
			font-size: 56rpx;
		}
	}
	.vocabulary .icon {
		background-color: #fd682e;
		box-shadow: 0rpx 4rpx 16rpx rgba(253,144,46,0.8);
	}
	.phrase .icon {
		background-color: #fea12a;
		box-shadow: 0rpx 4rpx 16rpx rgba(245,161,42,0.8);
		.iconfont {
			font-size: 42rpx;
		}
	}
	
}

// 推荐视频
.latest {
	width: 750rpx;
	padding: 30rpx;
	background-color: #fff;
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.v_item:nth-child(1) {
			width: 65%;
		}
	}
}

.owner {
	width: 100%;
	background-color: #f8f8f8;
	padding: 30rpx;
	.list {
		display: flex;
		width: 200%;
	}
	.owner_scroll {
		width: 100%;
	}
}

// 最活跃的用户
.owner_active {
	.title {
		padding:14rpx 30rpx 30rpx;
	}
	.con {
		background-color: #fff;
		padding:30rpx;
	}
	.top {
		display: flex;
		.info {
			flex-direction: column;
			.name {
				font-size: 32rpx;
				font-weight: 700;	
			}
			.hobbies {
				display: flex;
				font-size: 26rpx;
				
				view {
					margin-right: 10rpx;
				}
			}
			.nums {
				width: 460rpx;
				font-size: 22rpx;
				color: #5f6366;
			}
		}
	}
	.work {
		margin-top: 20rpx;
	}
	.v_item {
		width: 23%;
		height: 200rpx;
	} 
}
// 推荐用户的新作品
.owner_new {
	width: 100%;
	.title {
		padding:14rpx 30rpx 30rpx;
	}
	
	.owner_new_scroll {
		width: 100%;
	}
	.work {
		background-color: #fff;
		width: 200%;
		padding: 30rpx;
		.v_item {
			width: 240rpx;
			margin-right: 20rpx;
		}
		.first {
			height: 220rpx;
			width: 210rpx;
			flex-direction: column;
			.bold {
				margin: 16rpx 0;
			}
		}
	}
}


.o_item {
	width: 64%;
	height: 160rpx;
	background-color: #fff;
	border-radius: 12rpx;
	padding: 18rpx;
	margin-right: 16rpx;
	.info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 120rpx;
		.name {
			font-size: 28rpx;
			font-weight: 700;
		}
		.work {
			font-size: 22rpx;
			color: #a3a3a3;
			text {
				margin-right: 10rpx;
			}
		}
	}
}
.title {
	font-size: 30rpx;
	font-weight: 700;
	padding-bottom: 16rpx;
}

// 分类
.cate_item {
	padding: 30rpx;
	background-color: #fff;
	margin: 16rpx 0;
	.more {
		font-size: 28rpx;
		color: #cdccd1;
		.icon-you {
			font-size: 28rpx;
		}
	}
	.list {
		margin-top: 10rpx;
	}
}

// 用户头像
.user_icon {
	width: 120rpx;
	height: 120rpx;
	margin-right: 20rpx;
	image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
	}	
}
// 加粗
.bold {
	font-size: 28rpx;
	font-weight: 700;
	color: #222;
	padding-right: 10rpx;	
}
// 关注按钮
.attention_btn {
	font-size: 22rpx;
	// padding: 0 16rpx;
	width: 120rpx;
	color: #fff;
	background-color: #fc4a1a;
	border-radius: 8rpx;
	padding-left: 20rpx;
		// border-radius: 6rpx;
}
</style>
