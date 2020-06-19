<template>
	<scroll-view class="user_scroll" scroll-y="true" @scroll="handleScroll">
		<view class="user_page">
			<!-- 头部导航 -->
			<uni-nav-bar class="nav_box" ref="navBox" v-show="showNav" left-icon="back" fixed="true" title="小通"></uni-nav-bar>
			<view class="nav_bar">
				<text @tap="handleBack" class="iconfont icon-zuo"></text>
			</view>
				<view class="user_box" ref="userBox">
					<view class="top">
						<!-- 用户个人信息 -->
						<view class="flex_align">
							<view class="user_icon flex_center">
								<text class="iconfont icon-user"></text>
							</view>
							<view class="info">
								<text class="tit">小通</text>
								<view class="hobby">英语学习者</view>
							</view>
						</view>
						<!-- 获赞详情 -->
						<view class="honor flex_align">
							<view><text class="tit">0</text>获感谢</view>
							<view><text class="tit">2</text>获赞</view>
							<view><text class="tit">1</text>关注</view>
							<view><text class="tit">6</text>粉丝</view>
						</view>
						
						<!-- 荣誉tag -->
						<view class="honor_tags flex_align">
							<view class="tag_p">勋章 9</view>
							<view class="tag_r">听力经验值 23654</view>
							<view class="tag_y">口语练习0次</view>
						</view>
						<view class="goal">订个目标吧!<text class="iconfont icon-fankui"></text></view>
							<!-- 图表 -->
							<view class="chart_box">
								<view class="">已记录7天</view>
								<scroll-view class="chart_scroll" scroll-x="true" >
								<view class="chart">
									<view class="months">
										<text>6月</text>
										<text>5月</text>
										<text>4月</text>
										<text>3月</text>
										<text>2月</text>
										<text>1月</text>
										<text>12月</text>
										<text>11月</text>
									</view>
									<view class="box">
										<view class="flex_align" v-for="index in 40">
											<text></text>
											<text class="active"></text>
											<text></text>
											<text></text>
											<text></text>
											<text></text>
											<text></text>
										</view>
									</view>
									<view class="left flex_align">
										<text>一</text>
										<text>三</text>
										<text>五</text>
										<text>日</text>
									</view>
								</view>
								</scroll-view>
							</view>
							<!-- 图例说明 -->
							<view class="explain flex_bea">
								<text>图例说明</text><text class="iconfont icon-you"></text>
							</view>
					</view>
					<view class="tab_box" :style="tabBoxStyle" ref="tabBox">
						<qsTab :tabs="tabList" defaultColor="#a2a0a0" minWidth="335" :current="tabCur" activeColor="#e54825" @change="handleTabChange"></qsTab>
					</view>
					<!-- 作品轮播图 -->
					<view class="work_swipe">
						<view class="dy_list" v-show="tabCur===0">
							<view class="d_item" v-for="index in 7" :key="index">
								<view class="item_t">
									<text class="tit">6月</text>
									<text>5日</text>
								</view>
								<view class="item_bom flex_align">
									<view class="left"></view>
									<view class="right">
										<view class="tit">获得1896输入经验值</view>
										<view class="desc">解锁新成就: 打卡7天</view>
									</view>
								</view>
							</view>
						</view>
						<view class="dy_list" v-show="tabCur===1">
							<view class="d_item" v-for="index in 7" :key="index">
								123456
							</view>
						</view>
					</view>
				</view>
		</view>
		</scroll-view>
</template>

<script>
	import qsTab from '@/components/QS-tabs/QS-tabs.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components:{qsTab,uniNavBar},
		data() {
			return {
				tabList:[{ name: '动态' }, { name: '作品' }],
				tabCur:0,
				scrollTop:0,
				showNav:false,
				userHeight:0,
				tabHeight:0,
				navHeight:0,
				tabBoxStyle:{}
			}
		},
		mounted() {
			 // let obj = uni.createSelectorQuery().select('.tab_box')
			 // 获取nabbar的高度
				uni.createSelectorQuery().select(".nav_box").boundingClientRect((res)=>{
					this.navHeight = res.height
				}).exec()
				// 获取nabbar的高度
				uni.createSelectorQuery().select(".tab_box").boundingClientRect((res)=>{
					this.tabHeight = res.top
				}).exec()
				// 获取用户盒子离顶部的距离
				uni.createSelectorQuery().select(".user_box").boundingClientRect((res)=>{
					this.userHeight = res.top
				}).exec()
			// // 获取用户盒子离顶部的距离
			// const userHeight = this.$refs.userBox.$el.getBoundingClientRect()
			// this.userHeight = userHeight.y
			// // 获取tab盒子离顶部的距离
			// const tabHeight = this.$refs.tabBox.$el.getBoundingClientRect()
			// this.tabHeight = tabHeight.y
			// console.log(this.tabHeight)
			// // 获取nabbar的高度
			// const navHeight = this.$refs.navBox.$el.getBoundingClientRect()
			// this.navHeight = navHeight.height
		},
		methods: {
			handleBack() {
				uni.navigateBack()
			},
			handleTabChange(index) {
				 this.tabCur = index
				 console.log(index)
			},
			handleScroll(e) {
				// this.$refs.btn.$el.getBoundingClientRect()
				console.log()
				
				const scrollTop = e.detail.scrollTop
				if(scrollTop>=this.userHeight) {
					this.showNav = true
				}else {
					this.showNav = false
				}
				// console.log(screenTop)
				if(scrollTop>=this.tabHeight) {
					console.log('yes')
					this.tabBoxStyle = {
						position: 'fixed',
						top:this.navHeight+35+'px',
						marginTop:10
						
					}
					
				}else {
					console.log('no')
					this.tabBoxStyle = {}
				}
			}
		},
	}
</script>

<style lang="less" scoped>
.user_page {
	position: relative;
	width: 100%;
	height: 100vh;
	background: url(../../static/imgs/bg1.jpeg) no-repeat;
}
.nav_bar {
	padding: 30rpx;
	.iconfont {
		font-size: 50rpx;
		color: #fff;
	}
}
.user_box {
	position: absolute;
	top: 300rpx;
	left: 0;
	width: 100%;
	height: 75%;
	background-color: #fff;
	border-radius: 26rpx 26rpx 0 0;
}
	
.top {
	font-size: 26rpx;
	color: #6d6d6d;
	padding: 30rpx;
	.info {
		font-size: 26rpx;
		margin-left: 20rpx;
		.tit {
			font-size: 36rpx;
			// margin-bottom: 16rpx;
		}
		.hobby {
			margin-top: 16rpx;
			color: #222;
		}
	}
}
.user_icon {
	height: 140rpx;
	width: 140rpx;
	border-radius: 50%;
	background-color: #eee9ef;
	.iconfont {
		color: #fff;
		font-size: 80rpx;
	}
}
.honor {
	height: 80rpx;
	.tit {
		margin-right: 8rpx;
	}
	view {
		margin-right: 30rpx;
	}
}
.honor_tags {
	view {
		padding: 6rpx 16rpx;
		border-radius: 10rpx;
		font-weight: 700;
		margin-right: 20rpx;
	}
	.tag_r {
		color: #e46a53;
		background-color: #ffe6e9;
	}
	.tag_y {
		color: #f1c400;
		background-color: #fcf7d7;
	}
	.tag_p {
		color: #4830aa;
		background-color: #e3dff6;
	}
}
.goal {
	margin: 30rpx 0;
	font-size: 32rpx;
	color: #222;
	font-weight: 700;
	.iconfont {
		color: #fef399;
		margin-left: 16rpx;
	}
}
.chart {
	position: relative;
	width: 100%;
	height: 320rpx;
	margin-top: 50rpx;
	.left {
		left: 0;
		top: 50rpx;
		position: absolute;
		flex-direction: column;
		font-size: 22rpx;
		width: 40rpx;
		text {
			height: 64rpx;
		}
	}
	.months {
		display: flex;
		position: absolute;
		top: 0;
		left: 50rpx;
		text {
			font-size: 22rpx;
			color: #bababa;
			width: 144rpx;
		}
	}
	.box {
		display: flex;
		position: absolute;
		top: 50rpx;
		left: 50rpx;
		width: 500rpx;
		view {
			flex-direction: column;
			margin-right: 4rpx;
			width: 26rpx;
			text {
				width: 20rpx;
				height: 20rpx;
				border-radius: 50%;
				background-color: #fff1f0;
				margin: 7rpx;
			}
			.active {
				background-color: #fb613b;
			}
		}
	}
}
.chart_scroll {
	width: 100%;
}
.explain {
	width: 180rpx;
	color: #fff;
	border-radius: 8rpx;
	padding: 3rpx 16rpx;
	background-color: #ffbd21;
	.iconfont {
		font-size: 20rpx;
		margin-top: 2rpx;
	}
}
.select_class {
	color: ;
}
.tab_box {
	margin-top: 20rpx;
	border-top: 20rpx solid #fafafa;
	background-color: #fff;
	width: 100%;
	z-index: 1000,
}

.work_swipe {
	width: 100%;
}
.dy_list {
	padding: 30rpx;
	background-color: #fafafa;
	.d_item {
		width: 100%;
		margin-top: 16rpx;
		.item_t {
			font-size: 28rpx;
			color: #222;
			font-weight: 700;
			.tit {
				font-size: 40rpx;
				margin-right: 16rpx;
			}
		}
		.item_bom {
			position: relative;
			margin-top: 16rpx;
			.right {	
				// height: 180rpx;
				width: 96%;
				padding: 20rpx;
				background-color: #fff;
				border-radius: 16rpx;
				margin-left: 50rpx;
				
				.desc {
					font-size: 26rpx;
					color: #39383d;
					margin-top: 8rpx;
				}
				&::after {
					position: absolute;
					top: 0;
					left: 0;
					content: '';
					width: 10rpx;
					height: 10rpx;
					background-color: #fff;
					border-radius: 50%;
					border: 6rpx solid #f2c039;
				}
				&::before {
					position: absolute;
					top: 0;
					left: 11rpx;
					content: '';
					width: 4rpx;
					height: 100%;
					background-color: #e5e5e5;
				}
			}
			
		}
	}
}
.user_scroll {
	height: 100vh;
}
</style>
