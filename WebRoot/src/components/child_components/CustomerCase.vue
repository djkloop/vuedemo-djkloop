<template>
	<div class="mt" id="CustomerCase">
		<section class="pdtb-110280 customercase bg-05">
			<div class="center pdtb-110110">
				<div class="pos_cs clearfix">
					<h1 class="col-55 cs_h1">新疆文化 活力新疆 魅力新疆
                <br>
                传承弘扬新疆文化
                </h1>
					<p class="content_text ftw-400 col-45">
						---  新疆文化历史悠久。在古代被称为西域，也是古代丝绸之路的核心之地。
					</p>
				</div>
			</div>
		</section>
		<section class="pdb-110 bg-gray">
			<div class="clearMarginRepeat">
				<div class="Slider-case">
					<div class="center">
						<div class="Slider-warp">
							<ul class="clearfloat" id="move">
								<li v-for="(item,index) in dataList" @click='change(index)' :key="item.id">
									<img :src=item.Case_Show_Img :title=item.title :alt=item.title>
								</li>
							</ul>
						</div>
					</div>
					<div class="btn-case-next" @click='next' v-show="show"></div>
				</div>
			</div>
			<div class="center">
				<div class="case-liner"></div>
			</div>
			<div class="case-user center clearfloat">
				<div class="projectBg col-50">
					<h4>新疆民族文化介绍</h4>
					<p class="col-85" v-for="(item,index) in dataList" :key="item.id">
						{{item.Case_Show_ProjectBackground}}
					</p>
					<a class="btn btn-normal btn_text_4" href="javascript:;">查看更多新疆文化资料</a>
				</div>
				<div class="projectBg col-50">
					<h4>新疆文化资料详情</h4>
					<ul>
						<li v-for="(item,index) in titleList" :key="item.id">
							<span>{{item.title}}</span>
							<br />
							<br />
							<a class="ftw-500" :href=item.titleSrc>{{item.titleSrc}}</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section class="pdtb-110110 bg-white">
			<div class="center">
				<h2>带动新疆文化发展的本土企业</h2>
				<el-tabs class="tabs">
					<el-tab-pane :label=item class="clearfloat" v-for='(item,index) in tabTitleList' :key="item.id">
						<div class='case'>
							<ul v-for="(item,index) in ImgList" :key="item.id">
								<li class="case-item">
									<a href="javascrit:;">
										<img :src=item width='70%' height="50%" />
									</a>
								</li>
							</ul>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</section>
		<section class="DevLink pdtb-110110">
			<div class="center">
				<div class="link flex">
					<div>
						<img src="../../assets/imgs/icon-developer-community.png" alt="">
						<a href="javascript:;">开发者中心</a>
					</div>
					<div>
						<img src="../../assets/imgs/icon-customer-case.png" alt="">
						<a href="javascript:;">客户案例</a>
					</div>
					<div>
						<img src="../../assets/imgs/icon-product-price.png" alt="">
						<a href="javascript:;">产品价格</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<style>
	@import "../../assets/css/child_componentsCss/customercase.css";
	.el-tabs__content {
		margin-top: 0.45rem;
	}
	
	.tabs {
		margin-top: 0.68rem;
	}
	
	.tabs .el-tabs__item {
		font-weight: 500;
		color: #333;
	}
	
	.tabs .tabs-pos {
		margin-right: 1rem;
	}
	
	.tabs .tabs-pos h4 {
		font-size: 0.22rem;
		color: #333;
		line-height: 0.33rem;
		margin-bottom: 0.25rem;
	}
	
	.tabs-pos,
	.tabs-img {
		float: left;
	}
	
	.tabs .tabs-pos p {
		font-size: 0.16rem;
		color: #333;
		line-height: 0.28rem;
	}
	
	.tabs .tabs-img img {
		float: left;
		width: 3rem;
		height: 2.1rem;
	}
</style>
<script>
	export default {
		data() {
			//后台请求的数据现在先用假数据顶替下
			return {
				dataList: [],
				ImgList: [],
				tabTitleList: [],
				imgTabList: [],
				titleList: [
					{ title: '新疆丝绸之路文化', titleSrc: 'http://baike.sogou.com/v83480983.html' },
					{ title: '新疆清真寺文化', titleSrc: 'http://baike.sogou.com/v361729.htm#title' },
					{ title: '新疆传统节日', titleSrc: 'http://baike.sogou.com/v9310850.htm' },
					{ title: '新疆游牧名族文化', titleSrc: 'https://wenku.baidu.com/view/021a67f869dc5022abea002d.html' },
					{ title: '新疆服饰名族文化', titleSrc: 'http://baike.sogou.com/v72639198.htm' }
				],
				contSrc: [
					{ imgSrc: "/case/camera360" },
					{ imgSrc: "/case/camera360" },
					{ imgSrc: "/case/camera360" },
					{ imgSrc: "/case/camera360" },
					{ imgSrc: "/case/camera360" }
				],
				//              activeName: 'first',
				UlWidth: 0,
				iNow: 0,
				show: true
			}
		},
		mounted() {
			this.fetchData();
		},
		updated() {
			this.initFn();
		},
		methods: {
			fetchData() {
				var _this = this;
				this.$http.get("http://localhost:8080/Res/reJsonCase").then(function(res) {
					var arrImgList = [];
					var arrTitleList = [];
					var ImgList = [];
					var imgTabList = [];
					for(var i = 0; i < res.data.length; i++) {
						//把对应页面的数据进行循环
						if(res.data[i].Case_tabs_title != null && res.data[i].Case_tabs_title != ' ' && res.data[i].Case_tabs_title != '') {
							arrTitleList.push(res.data[i].Case_tabs_title);
						}

						arrImgList.push(res.data[i].Case_tabs_cont_community);
						if(res.data[i].Page == 4 && res.data[i].Case_Show_ProjectBackground != ' ' && res.data[i].Case_Show_ProjectBackground != null && res.data[i].Case_Show_ProjectBackground != '')
							ImgList.push(res.data[i]);

					}
					_this.tabTitleList = arrTitleList;
					_this.ImgList = arrImgList;
					_this.dataList = ImgList;
				}).catch(function(err) {

				})
			},
			initFn() {
				this.getUlStyle('#move', 'li');
				$(".projectBg p").fadeOut();
				$(".projectBg p").eq(this.iNow).fadeIn();
				$("#move").css({
					width: this.UlWidth + 'px'
				});

			},
			next() {
				if($('#move').is(":animated")) {
					return false
				} else {
					this.iNow++;
					if(this.iNow > $("#move li").length - 1) {
						this.iNow = 0;
					}
					this.move(this.iNow);
				}
			},
			move(index) {
				var LiWidth = $('#move li').outerWidth();
				if($('#move').is(":animated")) {
					return false
				} else {
					$("#move").animate({
						left: -(LiWidth * index) + 'px'
					}, 1000);
					$(".projectBg p").slideUp();
					$(".projectBg p").eq(index).slideDown();
				}
			},
			change(index) {
				this.iNow = index;
				this.move(this.iNow);
			},
			getUlStyle(parentEle, childNode) {
				var ImgW = $(parentEle).find(childNode).outerWidth();
				var ImgNum = $(parentEle).find(childNode).length;
				var UlWidth = ImgW * ImgNum;
				this.UlWidth = UlWidth;
			}
		}
	}
</script>