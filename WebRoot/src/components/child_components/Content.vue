<template>
	<section id="content">
		<div id="Slider">
			<el-carousel height="6.2rem" indicator-position="outside" trigger="click" :interval="3500">
				<el-carousel-item v-for="(item,index) in arrList" :key="item.id">
					<img class="img-res" :src=item.CarouselImgSrc alt="">
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="main">
			<div id="container">
				<section class="pad-clas">
					<div class="center">
						<h4>核心宗旨与服务</h4>
						<h2 class="app">打造服务为核心的指南针化导航</h2>
						<p class="content_text">随着大美新疆的经济快速发展，民生不断改善，“塞外胜江南”的发展趋势以势不可挡，吸引着四面八方的友人来到这世外桃源。但又有多少人了解这大美新疆呢？新疆印象就是作为“指南针化导航”的平台,致力于打造新疆历史 ，文化 ，美食，旅游等服务。
						</p>
						<ul class="introduce clearfloat">
							<router-link :to=list.Cont_src tag="li" v-for='list in titleList'>
								<a>
									<img :src=list.ContentImgSrc alt="">
									<h4>
                                        		<span>{{list.Content_title}}</span>
                                        		<i class="arrow-right"></i>
                                    		</h4>
								</a>
								<p>{{list.Content}}</p>
							</router-link>
						</ul>
					</div>
				</section>
				<section class="cont pad-clas">
					<div class="center clearfloat">
						<div class="data-pic"></div>
						<div class="why-chose">
							<h4 class="why-chose-h4">大美新疆，道德高地</h4>
							<h2 class="why-chose-h2 app">新疆-全国道德模范评选表彰</h2>
							<ul class="why-chose-text">
								<li v-for="(item,index) in titleList" @click="open(index)" :key="item.id">
									<a class="link">{{item.List_title}}</a>
									<div class="why-chose-text-change">{{item.List_cont}}</div>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section class="pad-clas">
					<div class="center">
						<h4>玩转大美新疆</h4>
						<h2 class="app">新疆为您的旅途画上神秘的一笔</h2>
						<p class="content_text">
							羊肉串、葡萄干、哈密瓜，是我们印象中的新疆；巍峨的天山、挺立的胡杨、广阔的沙漠，是我们眼里的新疆。
						</p>
						<div class="new_register">
							<div class="regsiter_row margb clearfloat">
								<li>
									<span>乌鲁木齐</span>
									<h2>新疆拥有中国六分之一的国土，乌鲁木齐是中国新疆维吾尔自治区的首府，是新疆政治、经济、文化的中心，中国…</h2>
								</li>
								<li class="w_middle">
									<span>吐鲁番</span>
									<h2>新疆维吾尔自治区辖地区，人口52.5万，其中维族占71%，面积6.97万平方公里，辖1市2县，地区行署驻吐鲁番市…</h2>
								</li>
								<li>
									<span>喀纳斯</span>
									<h2>茫茫的草原包容着幽深的原始森林，神秘的湖怪共存着古朴的图瓦人民，美丽而神秘的喀纳斯</h2>
								</li>
							</div>
							<div class="regsiter_row clearfloat">
								<li>
									<span>喀什</span>
									<h2>喀什地区地处欧亚大陆中部，中华人民共和国西北部，新疆维吾尔自治区西南部。 地处在东经71°39′～79°52…</h2>
								</li>
								<li class="w_middle">
									<span>布尔津</span>
									<h2>布尔津，欧式的农庄，异域的风情，仿佛进入另一个世界，探秘中国的童话边城</h2>
								</li>
								<li>
									<span>哈密</span>
									<h2>哈密位于新疆的东部，东临甘肃，北接蒙古，自古被称作“西域襟喉，中国拱衙”，是新疆的东大门。哈密地区辖…</h2>
								</li>
							</div>
						</div>
						<router-link class="btn btn-normal btn_text_1" to="/home/CustomerCase">
							点击查看更多
						</router-link>
					</div>
				</section>
				<section class="pad-clas cont">
					<div class="center">
						<h4>他们都在用</h4>
						<h2 class="app">与500,000+旅者一起使用新疆印象</h2>
						<p class="content_text">
							新疆印象全力打造以服务为中心的导航平台,让每一位来到新疆的旅者将新疆印象留在眼里,更留在心里。
						</p>
						<div class="user_logo">
							<div class="logo_list margb clearfloat">
								<li>
									<div class="bg_com anl1"></div>
								</li>
								<li>
									<div class="bg_com anl2"></div>
								</li>
								<li>
									<div class="bg_com anl3"></div>
								</li>
								<li>
									<div class="bg_com anl4"></div>
								</li>
								<li>
									<div class="bg_com anl5"></div>
								</li>
							</div>
							<div class="logo_list margb clearfloat">
								<li>
									<div class="bg_com anl6"></div>
								</li>
								<li>
									<div class="bg_com anl7"></div>
								</li>
								<li>
									<div class="bg_com anl8"></div>
								</li>
								<li>
									<div class="bg_com anl9"></div>
								</li>
								<li>
									<div class="bg_com anl10"></div>
								</li>
							</div>
						</div>
						<router-link class="btn btn-normal btn_text_1" to="/home/CustomerCase">
							看看还有谁在用新疆印象
						</router-link>
					</div>
				</section>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				arrList: [],
				titleList: [],
				contSrcList: [],
				initFnLi: 0
			}
		},
		mounted(index) {
			this.fetchData();
		},
		updated() {
			this.initFn(this.initFnLi);
		},
		methods: {
			fetchData() {
				var _this = this;
				/*
				 	axios请求数据
				 * */
				this.$http.get('http://localhost:8080/Res/rejson').then(function(res) {
					var arrL = [];
					var arrText = [];
					var contSrc = [];
					/*
					 	循环出其他数组
					 * */
					/*
					 	对图片地址为空做处理
					 * */
					for(var i = 0; i < res.data.length; i++) {
						if(res.data[i].CarouselImgSrc != " " && res.data[i].CarouselImgSrc != null && res.data[i].CarouselImgSrc != "") {
							arrL.push(res.data[i])
						}
					}
					for(var i = 0; i < res.data.length; i++) {
						if(res.data[i].List_cont != " " && res.data[i].List_cont != null && res.data[i].List_cont != "") {
							arrText.push(res.data[i])
						}
					}
					for(var i = 0; i < res.data.length; i++) {
						if(res.data[i].Cont_src != " " && res.data[i].Cont_src != null && res.data[i].Cont_src != "") {
							contSrc.push(res.data[i])
						}
					}
					console.log(contSrc)
					_this.titleList = arrText;
					_this.arrList = arrL;
					_this.contSrcList = contSrc;
					console.log(_this.titleList)
				}).catch(function(err) {
					console.log('这是Home_Content的Axios-->错误提示.');
					console.log(err);
				})
			},
			initFn(num) {
				var $Div = $(".why-chose-text li div.why-chose-text-change");
				var $Li = $('.why-chose-text li');
				$Li.eq(num).attr('class', 'open');
				$Div.eq(num).slideDown('slow');
			},
			open(index) {
				var $Div = $(".why-chose-text li div.why-chose-text-change");
				var $Li = $('.why-chose-text li');
				if($Li.eq(index).attr('class') == 'open') {
					return false;
				} else {
					$Li.removeAttr('class', 'open');
					$Div.slideUp('slow');
					$Li.eq(index).attr('class', 'open');
					$Div.eq(index).slideDown('slow');
				}
			}
		}
	}
</script>
<style scoped>
	@import "../../assets/css/components_css/content.css";
	.el-carousel {
		margin-top: 0.77rem;
	}
	
	.el-carousel__indicator {
		background: #1989fa;
	}
</style>