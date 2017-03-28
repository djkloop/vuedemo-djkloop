<template>
	<header class="banner_top" id="banner">
		<div class="center_banner clearfloat">
			<a class="logo" href="/home" title="Logo">
				<img src="../../assets/imgs/logo.png" height="64" width="64" alt="">
			</a>
			<nav class="banner_nav">
				<ul>
					<template v-for='(item,index) in arrList' >
						<router-link class="nav_list" tag="li" :to=item.header_src >
							<a>{{item.header_nav}}</a>
						</router-link>
					</template>
				</ul>
			</nav>
			<div id="app2">
				<ul class="xb-login">
					<router-link tag="li" to="/login">
						<a class="login">登陆</a>
					</router-link>
					<router-link tag="li" to="/reg">
						<a class="reg">注册</a>
					</router-link>
				</ul>
			</div>
		</div>
		<div id="submenu">
			<ul class="bg-white submenu col-100">
				<div class="center center-submenu clearfloat">
					<li v-for="item in submenu">
						<a :href='item.subImg' :class='item.className'>{{item.sublist}}</a>
					</li>
				</div>
			</ul>
		</div>
	</header>
</template>
<script>
	export default {
		data(index) {
			return {
				arrList: [],
				submenu: [
					{ sublist: '大盘系列', subImg: '#Nuts', className: 'developer-center submenuA' },
					{ sublist: '干果鲜果', subImg: '/home/Support', className: 'qa-community submenuA' },
					{ sublist: '精美小吃', subImg: '/home/Support', className: 'blog submenuA' },
					{ sublist: '烤串系列', subImg: '/home/Support', className: 'architect submenuA' },
					{ sublist: '各地美食攻略', subImg: '/home/Support', className: 'work-order submenuA' }
				],
				title:$('title').html()
			}
		},
		mounted() {
			this.fetchData();
		},
		updated() {
			this.initFn();
		},
		watch:{
			$route(to,form){
				console.log(to.path)
			}
		},
		methods: {
			fetchData() {
				var _this = this;
				/*
				 	axios请求数据
				 * */
				this.$http.get('http://localhost:8080/Res/rejson').then(function(res) {
					var arrL = [];
					for(var i = 0; i < res.data.length; i++) {
						if(res.data[i].header_nav != " " && res.data[i].header_nav != null && res.data[i].header_nav != "") {
							arrL.push(res.data[i])
						}
					}
					_this.arrList = arrL;
					console.log(_this.arrList)
				}).catch(function(err) {
					console.log('这是Header的Axios-->错误提示.');
					console.log(err);
				})
			},
			initFn() {
				var navLength = this.arrList.length;
				var htmlTemp = document.getElementById('submenu');
					for(var i = 0; i < navLength; i++) {
						if(this.arrList[i].header_nav == '美食发现') {
							$(".nav_list").eq(i).find('a').after(htmlTemp);
						}
					}
			}
		}
	}
</script>
<style>
	@import '../../assets/css/components_css/header.css';
</style>