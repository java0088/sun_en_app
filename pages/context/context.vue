<template>
	<!-- 语境页面 -->
	<view class="context">
		<!-- 轮播页面 -->
		 <swiper class="context_swiper" :vertical="true" >
			<swiper-item v-for="(item,index) in list" :key="item.id">
				<!-- 视频标签 -->
		         <image @click="handlePlayClick" class="swipe_img" :src="item.imgSrc"></image>
				 <!-- 底部组件 -->
				 <Tabbar></Tabbar>
				 <!-- 右边组件 -->
				 <SideNav @showCaption="handleShowCaption"></SideNav>
				<!-- 字幕 -->
				 <view class="centence" v-show="showCaption">
					 {{item.centence}}
				 </view>
				 <!-- 用户姓名和话题 -->
				<view class="conver_box">
					<view class="word flex_bea">
						<text class="tag" :style="{backgroundColor:item.color}">{{item.tag}}</text>{{item.words}}
					</view>
					<view class="conver">
						<view class="username">@ {{item.username}}</view>
						<view class="topic">{{item.topic}}</view>				
					</view>	
				</view>
				<!-- 播放按钮 -->
				<view class="play_btn" v-show="isPlay" @click.stop="handlePlayClick">
					<text class="iconfont icon-bofang"></text>
				</view>
				
		     </swiper-item>
		</swiper>                      
	</view>
</template>

<script>
	import Header from '@/components/Header.vue'
	import Tabbar from '@/components/Tabbar.vue'
	import SideNav from '@/components/SideNav.vue'
	export default {
		onLoad() {console.log('context--onLoad')},
		onShow() {console.log('context--onShow')},
		onHide() {console.log('context--onHide')},
		components:{Header,Tabbar,SideNav},
		data() {
			return {
				title: 'Hello',
				isPlay:false,
				showCaption:false,
				list:[
					{id:1,imgSrc:'../../static/imgs/lun5.jpg',
					username:'黄万通',centence:'english is an international language, do you think about it.',
					words:'先来5000个句子再说',
					tag:'黄',
					color:'#c518f0',
					topic:'13aklshdfksjab',
					shareList:[{id:1,title:'喜欢',icon:'icon-love',num:1369,en_name:'love'},
							{id:2,title:'消息',icon:'icon-message_1',num:52,en_name:'message'},
							{id:3,title:'分享',icon:'icon-zhuanfa',num:152,en_name:'share'}]
					},
					{id:2,imgSrc:'../../static/imgs/lun4.jpg',
					username:'黄万通',centence:'english is an international language, do you think about it.',
					words:'先来5000个句子再说',
					topic:'13aklshdfksjab',
					tag:'裴',
					color:'#2df1d3',
					shareList:[{id:1,title:'喜欢',icon:'icon-love',num:1369,en_name:'love'},
							{id:2,title:'消息',icon:'icon-message_1',num:52,en_name:'message'},
							{id:3,title:'分享',icon:'icon-zhuanfa',num:152,en_name:'share'}]
					},
					{id:3,imgSrc:'../../static/imgs/lun3.jpg',
					username:'黄万通',centence:'english is an international language, do you think about it.',
					words:'先来5000个句子再说',
					topic:'13aklshdfksjab',
					tag:'男',
					color:'#18f045',
					shareList:[{id:1,title:'喜欢',icon:'icon-love',num:1369,en_name:'love'},
							{id:2,title:'消息',icon:'icon-message_1',num:52,en_name:'message'},
							{id:3,title:'分享',icon:'icon-zhuanfa',num:152,en_name:'share'}]
					},
					{id:4,imgSrc:'../../static/imgs/lun2.jpg',
					username:'黄万通',centence:'english is an international language, do you think about it.',
					words:'先来5000个句子再说',
					topic:'13aklshdfksjab',
					tag:'女',
					color:'#f56437',
					shareList:[{id:1,title:'喜欢',icon:'icon-love',num:1369,en_name:'love'},
							{id:2,title:'消息',icon:'icon-message_1',num:52,en_name:'message'},
							{id:3,title:'分享',icon:'icon-zhuanfa',num:152,en_name:'share'}]
					},
					{id:5,imgSrc:'../../static/imgs/lun1.jpeg',
					username:'黄万通',centence:'english is an international language, do you think about it.',
					words:'先来5000个句子再说',
					topic:'13aklshdfksjab',
					tag:'歌',
					color:'#6b4cd6',
					shareList:[{id:1,title:'喜欢',icon:'icon-love',num:1369,en_name:'love'},
							{id:2,title:'消息',icon:'icon-message_1',num:52,en_name:'message'},
							{id:3,title:'分享',icon:'icon-zhuanfa',num:152,en_name:'share'}]
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			// 播放功能
			handlePlayClick() {
				this.isPlay = !this.isPlay
			},
			// 是否显示字幕
			handleShowCaption(showCaption) {
				this.showCaption = showCaption
				console.log('yes')
			}
		}
	}
</script>

<style lang="less">
	.context {
		width: 750rpx;
		height: 100vh;
		overflow: hidden;
		color: #fff;
		font-size: 26rpx;
	}
	.context_swiper {
		width: 100%;
		height: 100%;
		.swiper-item {
			width: 100%;
			height: 100%;
			background-color: #fc3530;
		}
		.swipe_img {
			width: 750rpx;
			height: 100vh;
		}
	}
	.conver_box {
		position: absolute;
		bottom: 160rpx;
		left: 26rpx;
		width: 300rpx;
		height: 200rpx;
		.word {
			padding: 16rpx;
			border-radius: 10rpx;background-color: rgba(0,0,0,0.3);
		}
		.conver {
			margin-top: 26rpx;
			padding-left: 12rpx;
			.username {
				font-weight: 700;
				margin-bottom: 16rpx;
			}
		} 
	}
	.centence {
		position: absolute;
		left: 50%;
		top: 55%;
		width: 360rpx;
		transform:translateX(-50%);
		text-align: center;
		line-height: 50rpx;
		font-size: 30rpx;
	}
	// 播放按钮
	.play_btn {
		position: absolute;
		left: 50%;
		top: 48%;
		transform: translate(-50%,-50%);
		color: rgba(255,255,255,0.7);
		.icon-bofang {
			font-size: 80rpx;
		}	
	}
</style>
