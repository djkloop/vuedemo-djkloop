<template>
	<div class="backTop" @click='backTop'>
		返回顶部
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: true
			}
		},
		methods: {
			backTop() {
				var _this = this;
				var speed = 1000;
				let top = document.body.scrollTop || document.documentElement.scrollTop;
				let scrollTop = document.documentElement.scrollHeight;
				let scrollHeight = document.documentElement.clientHeight + top;
				if(this.flag == true) {
					this.flag = false
					$('body,html').animate({ scrollTop: 0 }, speed);
					$('.backTop').animate({ right: 0 }, speed, function() {
						$(".backTop").slideUp();
						$("#banner").fadeIn();
						_this.flag = true;
					})
				}
			}
		}
	}
</script>

<style scoped>
	.backTop {
		position: fixed;
		right: 0;
		width: 0.5rem;
		height: 0.5rem;
		background: #0065D0;
		color: #FFFFFF;
		bottom: 30%;
		text-align: center;
		line-height: 0.5rem;
		font-size: 0.12rem;
		cursor: pointer;
		z-index: 999;
	}
</style>