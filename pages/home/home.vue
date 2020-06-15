<template>
	<view class="home">
		<!-- 头部导航 -->
		<Header @change="change" :currenNav="currentPage"></Header>
		<!-- 首页轮播 -->
		<view class="home_swipe">
			<swiper class="swiper"  :current="currentPage" @change="handleSwipeChange">
			    <swiper-item>
					 <Find></Find>
			    </swiper-item>
			    <swiper-item>
					<Context></Context>	
			    </swiper-item>
				<swiper-item>
			       <Community></Community>
				</swiper-item>
			</swiper>                   
		</view>
	</view>
</template>
<script>
	import Header from '@/components/Header.vue'
	import Context from '@/pages/context/context.vue'
	import Community from '@/pages/community/community.vue'
	import Find from '@/pages/find/find.vue'
	export default {
		components:{Header,Context,Community,Find},
		onLoad() {console.log('home--onLoad')},
		onShow() {console.log('home--onShow')},
		onHide() {console.log('home--onHide')},
		data() {
			return {
				currentPage:0
			}
		},
		methods: {
			handleSwipeChange(e) {
				this.currentPage = e.target.current
			},
			change(index) {
				this.currentPage = index
			}
		},
		onPullDownRefresh() {
			setTimeout(function(){
				uni.stopPullDownRefresh();
				
			},1000)
		}
	}
</script>
<style lang="less" scoped>
.home_swipe {
	width: 750rpx;
	height: 100vh;
	
	.swiper {
		width: 750rpx;
		height: 100vh;
	}
	
}
.lala {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 1000;
	}
</style>
