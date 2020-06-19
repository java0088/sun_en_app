<template>
	<view class="community">
		<!-- 分类 -->
		<view class="nav_cate cate_box">
			<view class="cate_item" :class="index===currentCate?'active':''" v-for="(item,index) in cates" :key="item.id" @tap="handleCateClick(index)">{{item.title}}</view>
		</view>
		<!-- 拍视频按钮 -->
		<Player></Player>
		<!-- 轮播切换 -->
		<view class="swiper_box">
			 <swiper class="swiper" :current="currentCate" @change="handleChange">
			  <swiper-item>
			       <Attention :lovelist="loveList" :attentionData="attentionData"></Attention>
			      </swiper-item>
			      <swiper-item>
			          <WorkArea></WorkArea>
			      </swiper-item>
			      <swiper-item>
			          <TallyBook></TallyBook>
			      </swiper-item>
			  </swiper>                    
		</view>
	</view>
</template>

<script>
	import Attention from '@/components/Attention.vue'
	import WorkArea from '@/components/WorkArea.vue'
	import TallyBook from '@/components/TallyBook.vue'
	import Player from '@/components/Player.vue'
	export default {
		components:{
			Attention,
			WorkArea,
			TallyBook,
			Player
		},
		onLoad() {console.log('community--onLoad')},
		onShow() {console.log('community--onShow')},
		onHide() {console.log('community--onHide')},
		data() {
			return {
				cates:[
					{id:1,title:'关注',opt:''},
					{id:2,title:'作品区',opt:''},
					{id:3,title:'记录本',opt:''},
				],
				loveList:[{id:123}],
				attentionData:'关注',
				currentCate:0
			}
		},
		methods: {
			// 点击切换
			handleCateClick(index) {
				this.currentCate = index
			},
			// 滑动轮播
			handleChange(e) {
				// console.log(e)
				this. currentCate = e.detail.current
			}
		}
	}
</script>

<style lang="less" scoped>
.community {
	padding-top: 180rpx;
}
.nav_cate {
	padding-left: 30rpx;
	.cate_item {
		font-size: 30rpx;
	}
}
.swiper_box {
	width: 100%;
	height: 100vh;
	background-color: #f9f9f9;
	.swiper {
		width: 100%;
		height: 100%;
	}
}
</style>
