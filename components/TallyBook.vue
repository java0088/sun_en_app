<template>
	<view class="tally_book">
		<scroll-view class="book_scroll" scroll-y="true" >
			<view class="list">
				<view class="item" v-for="i in 6" :key="i">
					<!-- 上面用户信息 -->
					<view class="top flex_align">
						<image class="icon" src="/static/imgs/user2.jpg"></image>
						<view class="name">
							<text class="tit">大裴裴</text>
							<text class="nic">的目标</text>
						</view>
					</view>
					<!-- 目标 -->
					<view class="goal tit">这是我的目标</view>
					<!-- 视频区 -->
					<scroll-view class="plays_scroll" scroll-x="true" >
						<view class="play_list">
							<view class="v_item" v-for="index in 6" :key="index">
								<image class="item_src" src="../static/imgs/study1.jpg"></image>
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
					<!-- 口语练习和经验值 -->
					<view class="accumulated flex_align">
						<view class="kouyu">累计获取<text class="yellow_color">123</text>听力经验值</view>
						<view class="kouyu">口语练习<text class="yellow_color">123</text>次</view>
					</view>
				</view>
				<view class="item"></view>
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
.tally_book {
	width: 100%;
	.list {
		width: 100%;
	}
}
.item {
	width: 100%;
	// height: 300rpx;
	background-color: #fff;
	margin-top: 20rpx;
	padding: 20rpx;
	.top {
		height: 100rpx;
		.icon {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}
		.tit {
			margin: 0 20rpx;
		}
		.nic {
			font-size: 32rpx;
			color: #ffdb7c;
			font-weight: 700;
		}
	}
	.goal {
		margin: 16rpx 0;
	}
	.play_list {
		display: flex;
		width: 150%;
		background-color: #fff;
		.v_item {
			width: 160rpx;
			height: 220rpx;
			margin-right: 20rpx;
		}
	}
	.plays_scroll {
		width: 750rpx;
		background-color: #fff;
	}
	.kouyu {
		font-size: 26rpx;
		color: #acabb2;
		margin-right: 20rpx;
	}
}
.book_scroll {
	height: 1100rpx;
}
</style>
