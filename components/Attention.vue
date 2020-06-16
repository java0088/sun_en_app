<template>
	<view class="attention_box">
		<!-- 如果没有数据 -->
		<view class="no_more" v-if="!lovelist.length||lovelist.length<0">快去社区中关注几个努力的大神吧!</view>
		 <!-- 有数据 -->
		 <scroll-view class="list_scroll" scroll-y="true">
				<view class="list">
					<view class="item" v-for="index in 4" :key="index">
						<!-- 用户信息 -->
						<view class="user flex_align">
							<view class="user_icon">
								<image src="../static/imgs/user2.jpg" mode=""></image>
							</view>
							<view class="username tit">小裴</view>
						</view>
						<!-- 个人特长 -->
						<view class="skill">
							<text>#模仿#</text>dog
						</view>
						
						<!-- 视频 信息-->
						<view class="play_box">
							<!-- 视频 -->
							<view class="v_item">
								<image class="item_src" src="../static/imgs/user2.jpg"></image>
								<view class="play_btn flex_center">
									<text class="iconfont icon-bofang"></text>
								</view> 
							</view>
							<!-- 工具条 -->
							<view class="tool_box">
								<view class="flex_bea">
									<view class="time">21小时前</view>
									<view class="tools flex_bea">
										<view class="flex_align">
											<text class="iconfont icon-share"></text>
											分享
										</view>
										<view class="flex_align">
											<text class="iconfont icon-pinglun"></text>
											评论
										</view>
										<view class="flex_align">
											<text class="iconfont icon-xihuan"></text>
											点赞
										</view>
									</view>
								</view>
								<view class="num">1人赞过</view>
							</view>
							
							<!-- 评论区 -->
							<view class="comment">
								<view class="look_com">查看1条评论</view>
								<view class="input_box">
									<text class="iconfont icon-fankui"></text>
									<input type="text" placeholder="看了有啥想说的,写下来吧 !" placeholder-style="color:#c6c4c4">
								</view>
							</view>
						</view>
					</view>
				</view>
					
		  </scroll-view>                 
	</view>
</template>

<script>
	export default {
		props:['lovelist','attentionData'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
.no_more {
	font-size: 30rpx;
	color: #929292;
	text-align: center;
	padding-top: 300rpx;
}
.list {
	width: 100%;
	.item {
		width: 100%;
		padding: 30rpx;
		background-color: #fff;
		margin-top: 20rpx;
		.user {
			// width: 80rpx;
			height: 80rpx;
			.user_icon {
				image {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
				}
			}
			.username {
				margin-left: 20rpx;
			}
		}
		.skill {
			font-size: 30rpx;
			color: #222;
			margin-top: 20rpx;
			text {
				color: #f8d974;
				margin-right: 10rpx;
			}
		}
	}
}

.play_box {
	font-size: 28rpx;
	.v_item {
		width: 100%;
		height: 660rpx;
		margin: 20rpx 0;
	}
	.item_src {
		width: 100%;
	}
	
	.tool_box {
		margin-top: 40rpx;
		.time {
			color: #a09fa4;
		}
		.tools {
			width: 55%;
			.iconfont {
				font-size: 42rpx;
				margin-right: 10rpx;
			}
		}
	}
	.num {
		color: #525659;
		padding: 16rpx 0;
		border-bottom: 1rpx solid #eee;
	}
	.comment {
		.look_com {
			color: #85838b;
			margin: 16rpx 0;
		}
		.input_box {
			position: relative;
			width: 100%;
			height: 60rpx;
			input {
				box-sizing: border-box;
				width: 100%;
				height: 70rpx;
				border-radius: 10rpx;
				background-color: #f3f3f3;
				font-size: 16rpx;
				padding-left: 60rpx;
			}
			.iconfont {
				position: absolute;
				top: 50%;
				left: 16rpx;
				transform: translateY(-40%);
				color: #c6c4c4;
			}
		}
	}
}
.list_scroll {
	height: 1050rpx;
}
</style>
