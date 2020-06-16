<template>
	<view class="water-fill">
		<template v-if="waterList.length != 0">
			<view class="water-wrapper">
				<refreshView ref="refreshView" />
				<view class="water-box">
					<view class="water-sub" v-for="(items,index) in waterList" :key="index">
						<view class="water-item" v-for="(item,index) in items" :key="index">
							<view class="water-top">
								<image :src="item.cover" mode="widthFix"></image>
								<h3 v-html="item.title"></h3>
								<view class="play_btn flex_center">
									<text class="iconfont icon-bofang"></text>
								</view>
							</view>
							<view class="water-bottom">
								<view class="water-bottom-item">
									<view class="img-box">
										<image class="water-avatar" :src="item.photo" mode="widthFix"></image>
									</view>
									<text class="water-name" v-html="item.name"></text>
								</view>
								<view class="water-bottom-item">
									<text class="iconfont icon-xihuan"></text>
									<text v-html="item.likeCount"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</template>
		<view class="water-none" v-if="waterList.length == 0">
			<image src="/static/imgs/no_more2.png"></image>
			<text>暂时木有内容呀～～</text>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue';
	import refreshView from '../Refresh/Refresh.vue'
	export default {
		components: {
			refreshView
		},
		name: 'waterFill',
		data() {
			return {
				waterList: [],
				// errorimage: 'this.src="' + require('../../static/img/img_photo_default.png') + '"'
				 errorimage: ''
			}
		},
		methods: {
			// 将数组拆分成可使用状态,减少代码
			groupCut(array, subGroupLength) {
				let index = 0;
				let newArray = [];
				while (index < array.length) {
					newArray.push(array.slice(index, index += subGroupLength));
				}
				return newArray;
			},
			handleLoad(arr) {
				// 如果arr存在,即在父组件刷新的值  若不存在就是下拉请求刷新
				if (arr) {
					let length = arr.length;
					this.waterList = this.groupCut(arr, length / 2)
				} else {
					console.log('写请求数据接口，将数据赋值给waterList')
				}
				uni.showToast({
					title: '刷新啦'
				})
			},
			// // 监听页面下拉刷新
			// //触摸开始
			// handletouchstart: function(e) {
			// 	let that = this;
			// 	that.$refs.refreshView.handletouchstart(e)
			// },

			// //触摸移动
			// handletouchmove: function(e) {
			// 	let that = this;
			// 	that.$refs.refreshView.handletouchmove(e)
			// },
			// //触摸结束
			// handletouchend: function(e) {
			// 	let that = this;
			// 	that.$refs.refreshView.handletouchend(e);
			// 	that.handleLoad();
			// }
		},
	}
</script>

<style lang="less" scoped>
	.water-fill {
		.water-wrapper {
			.water-box {
				display: flex;
				width: 100%;
				box-sizing: border-box;
				font-size: 0;
				justify-content: space-between;
				background-color: #f5f8f9;
				padding: 10px 5px;

				.water-sub {
					display: flex;
					width: 49%;
					overflow: hidden;
					flex-direction: column;

					.water-item {
						width: 100%;
						border-radius: 12upx;
						overflow: hidden;
						background-color: #FFFFFF;
						margin-bottom: 20upx;

						.water-top {
							position: relative;
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
							image {
								width: 100%;
							}

							h3 {
								font-family: PingFangHK-Medium;
								font-size: 28upx;
								font-weight: 600;
								line-height: 40upx;
								color: #333333;
								text-align: justify;
								margin: 20upx;
								.n-ellipsis(2);
							}
						}

						.water-bottom {
							display: flex;
							justify-content: space-between;
							margin: 0 20upx 20upx 20upx;
							font-size: 24upx;

							.water-bottom-item {
								display: flex;
								align-items: center;

								.img-box {
									display: flex;
									align-items: center;
									justify-content: center;
									width: 50upx;
									height: 50upx;
									border-radius: 50%;
									overflow: hidden;

									.water-avatar {
										width: 50upx;
									}
								}

								.water-name {
									max-width: 160upx;
									overflow: hidden;
									white-space: nowrap;
									text-overflow: ellipsis;
								}

								text {
									line-height: 32upx;
									font-size: 24upx;
									color: #333;
									margin-left: 14upx;
								}

								image {
									width: 28upx;
								}
							}
						}
					}
				}
			}
		}

		.water-none {
			position: fixed;
			top: 100rpx;
			bottom: 0;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			image {
				width: 260rpx;
				height: 260rpx;
			}

			text {
				padding-top: 40upx;
				font-size: 24upx;
				color: #999;
			}
		}
	}


	//多行文本省略
	.n-ellipsis(@n) {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: @n;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		word-break: break-all;
	}
</style>
