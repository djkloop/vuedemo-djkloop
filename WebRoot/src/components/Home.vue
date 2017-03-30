<template>
	<div id="home">
		<headerView :class='{blackHeader:blackHeaderIsTrue,greenHeader:greenHeaderIsTrue}'></headerView>
		<router-view></router-view>
		<footerview></footerview>
		<djkloop-loding v-show='loading'></djkloop-loding>
		<djkloop-backTop></djkloop-backTop>
	</div>
</template>
<script>
	import headerView from './common_components/header.vue'
	import footerview from './common_components/footer.vue'
	import * as types from '../store/types.js'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				top: 0,
				flag: false,
				Path: null
			}
		},
		components: {
			headerView,
			footerview
		},
		computed: mapGetters([
			'loading',
			'blackHeaderIsTrue',
			'greenHeaderIsTrue'
		]),
		watch: {
			//可以监听路由
			$route(to, from) {
				//				if(to.path == '/home/Support') {
				//					this.$store.dispatch(types.BLACKHEADERISTRUE)
				//				} else {
				//					this.$store.dispatch(types.BLACKHEADERISFALSE)
				//				}
				this.Path = to.path;
				this.changeNav();
			}
		},
		mounted() {
			this.getPos();
			var This = this;
			//进行页面加载的时候进行初始化
			this.setTop();
			if(this.top == 0) {
				$(".backTop").css('display', 'none');
			}
			this.Path = this.$route.path
			this.changeNav();
			window.onscroll = () => {
				This.setTop()
			}
		},
		methods: {
			...mapActions([

			]),
			changeNav() {
				switch(this.Path) {
					case "/home/Support":
						this.$store.dispatch(types.ALLHEADERISFALSE)
						this.$store.dispatch(types.BLACKHEADERISTRUE)
						break;
					case "/home/Company":
						this.$store.dispatch(types.ALLHEADERISFALSE)
						this.$store.dispatch(types.GREENHEADERISTRUE)
						break;
					default:
						this.$store.dispatch(types.ALLHEADERISFALSE)
						break;
				}
			},
			getPos() {
				var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
				var homeHeight = document.getElementById("home").offsetHeight;
				var footer = document.getElementById("footer");
				//如果content组件没有内容让中间空出来
				if(clientHeight >= homeHeight) {
					footer.style.bottom = 0 + 'rem';
					footer.style.width = 100 + '%';
					footer.style.position = 'absolute'
				}
			},
			setTop() {
				let top = document.body.scrollTop || document.documentElement.scrollTop;
				let scrollTop = document.documentElement.scrollHeight;
				let scrollHeight = document.documentElement.clientHeight + top;
				this.top = top;
				//如果大于400触发返回顶部
				if(this.top > 400) {
					//防止多次触发onscroll事件
					$("#banner").fadeOut(600);
					if(this.flag == true) {
						return
					}
					this.flag = true;
					//判断到底部触发返回顶部
					if(scrollTop > scrollHeight || scrollHeight == screenTop || this.top < scrollHeight || screenTop == 0) {
						$(".backTop").slideDown('fast').animate({ 'right': "3%" }, 1000)
					}
				} else {
					//防止0-400的时候多个动画重叠问题
					let nowTop = this.top;
					if($(".backTop").is(':animated')) {
						if(nowTop > 400) {
							$("#banner").css("display", 'none');
							$(".backTop").slideDown().animate({ 'right': '3%' }, 500);
						} 
						return false;
					} else {
						this.flag = false;
						$("#banner").css("display", 'block');
						$(".backTop").animate({ 'right': 0 }, 1000).slideUp();
					}
				}
			}
		}
	}
</script>