<template>
	<view class="search">
		<!-- 搜索框 -->
		<view class="search_box">
			<view class="input_box">
				<text class="iconfont icon-search1"></text>
				<input ref="inputBox" type="text" v-model="searchText" placeholder="搜索词汇/话题/用户" placeholder-class="holder" />
				 <icon @tap="handleClearClick" class="clear" type="clear" size="16" color="#c1c2c6"/>
			</view>
			<view class="cancel" @click="handleBack">
				取消
			</view>
		</view>
	
		<!-- 搜索分类 -->
		<view class="search_cate cate_box">
			<view class="cate_item" :class="index===currentCate?'active':''" v-for="(item,index) in cates" :key="item.id" @tap="handleCateClick(index)">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentCate:0,
				searchText:'',
				cates:[
					{id:1,title:'词/字',opt:''},
					{id:2,title:'话题',opt:''},
					{id:3,title:'用户',opt:''},
				]
			}
		},
		methods: {
			// 点击搜索分类
			handleCateClick(index) {
				this.currentCate = index
			},
			// 点击返回
			handleBack() {
				uni.navigateBack()
			},
			// 点击清空
			handleClearClick() {
				this.searchText = ''
				console.log(this.$refs.inputBox)
				this.$refs.inputBox.focus = true
			}
		}
	}
</script>

<style lang="less" scoped>
.search {
	background-color: #f9f9f9;
		width: 100%;
		height: 100vh;
}
.search_box {
	display: flex;
	align-items: center;
	padding:30rpx 30rpx 0;
	width: 100%;
	height: 100rpx;
	background-color: #fff;
	.input_box {
		position: relative;
		width: 580rpx;
		height: 100%;
		.iconfont {
			position: absolute;
			top: 50%;
			left: 22rpx;
			transform: translateY(-50%);
			font-size: 32rpx;
			font-weight: 700;
			color: #b0b2b8;
		}
		input {
			width: 580rpx;
			height: 100%;
			box-sizing: border-box;
			// border: 1rpx solid #ccc;
			border-radius: 10rpx;
			background-color: #f3f3f3;
			padding-left: 70rpx;
			font-size: 28rpx;
			caret-color: #e04728;
		}
		.clear {
			position: absolute;
			top: 50%;
			right: 16rpx;
			transform: translateY(-50%);
			font-size: 22rpx;
		}
	}
	.cancel {
		font-size: 32rpx;
		color: #e04728;
		margin-left: 30rpx;
	}
}
.holder {
	color: #c1c2c6;
	font-weight: 700;
	// caret-color: #e04728;
}
</style>
