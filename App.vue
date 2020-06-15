
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
	view,text,image{
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
</style>
