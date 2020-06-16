
<script>
	export default {
		globalData:{
			shareData:[
				{id:1,title:'喜欢',icon:'icon-love',num:1369,en_name:'love'},
				{id:2,title:'消息',icon:'icon-message_1',num:52,en_name:'message'},
				{id:3,title:'分享',icon:'icon-zhuanfa',num:152,en_name:'share'}
			]
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	@import url("./static/fonts/iconfont.css");
	/* 主题颜色 */
	view,text,image,input{
		box-sizing: border-box;
	}
	.color_fff {
		color: #ffffff;
	}
	.theme_color {
		color: #fc3530;
	}
	/* 字体颜色 */
	.black_color {
		color: #222;
	}
	.gray_color {
		color: #969599;
	}
	.yellow_color {
		color: #febe1e;
	}
	/* flex布局 */
	.flex_between {
		display: flex;
		justify-content: space-between;
	}
	.flex_center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.flex_bea {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.flex_align {
		display: flex;
		align-items: center;
	}
	/* 小标签 */
	.tag {
		/* display: inline-block; */
		padding:4rpx 8rpx;
		border-radius:6rpx;
		background-color: #6b4cd6;
		margin-right: 12rpx;
	}
	.tit {
		font-size: 30rpx;
		color: #222;
		font-weight: 700;
	}
	
	/* 用户头像 */
	.avatar {
		position: relative;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-top: 12rpx;
		background-color: #eee9ef;
		// background-color: #fff;
		.iconfont {
			position: absolute;
			color: #fff;
			font-weight: 700;
			font-size: 13px;
		}
		.day {
			position: absolute;
			right: -40%;
			bottom: -10rpx;
			// swidth: 50px;
			background-color: #fc3530;
			color: #fff;
			font-size: 10rpx;
			padding: 0px 4rpx;
		}
	}
	// 分类公共样式
	.cate_box {
		display: flex;
		font-size: 28rpx;
		background-color: #fff;
		.cate_item {
			position: relative;
			padding: 30rpx;
			color: #94959a;
			font-weight: 700;
			&::after {
				position: absolute;
				content: '';
				top: 50%;
				transform: translateY(-50%);
				right: 0;
				width: 2rpx;
				height: 26rpx;
				border-radius: 2rpx;
				background-color: #d6d7d9;
			}
			
		}
		.cate_item:nth-child(3) {
			&::after {
				background-color: rgba(0,0,0,0);
			}
		}
		.active {
			color: #222;
		}
	}
	// find页面的公共样式
	.v_item {
		position: relative;
		width: 31%;
		height: 260rpx;
		border-radius: 12rpx;
		overflow: hidden;
		margin-bottom: 20rpx;
		.item_src {
			width: 100%;
			height: 100%;
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
			bottom: 12rpx;
			left: 12rpx;
			color: #fff;
			.iconfont {
				font-size: 28rpx;
			}
			.num {
				font-size: 22rpx;
				margin-left: 8rpx;
				font-weight: normal;
			}
		}
	}
	// 新标签
	.new_tag {
		position: absolute;
		top: 0;
		right: 0;
		border-radius: 50% 0 50% 0;
		background-color: #da4a27;
		color: #fff;
		padding: 3rpx 8rpx;
		font-size: 22rpx;
	}
</style>
