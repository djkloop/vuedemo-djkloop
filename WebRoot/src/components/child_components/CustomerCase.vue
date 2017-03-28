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
						--- 新疆文化历史悠久。在古代被称为西域，也是古代丝绸之路的核心之地。
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
				<div class="culture_title">
					<h2>新疆多元素特色文化</h2>
					<p class="culture_title_text">新疆文化多元性的古代元素———多民族文化的演进</p>
				</div>
				<div class="culture_cont">
					<div class="culture_cont_text">
						<p class="culture_cont_text_p">
							新疆古称西域,自进入有史的时期以来,就是一个多种部落、部族、民族共存,多种语言、文字同在,多种宗教并列的多元文化的区域。从先秦开始至清代,在西域生活和活动的有过众多部落、部族和民族。它们主要是:古代的塞人、汉人、匈奴人、羌人、乌孙人、大月氏人、吐火罗人、鲜卑人、柔然人、突厥人、回鹘人、吐蕃人、蒙古人以及清代以来形成的维吾尔、汉、哈萨克、柯尔克孜等民族。 古代的游牧部落、部族进入天山以南绿洲农耕区后,转变成了农耕定居居民,其生产生活方式及习俗都发生了根本变化。
						</p>
					</div>
					<div class="culture_title">
						<p class="culture_title_text">新疆文化多元性的现代元素———多民族文化的定型</p>
						<p class="culture_cont_text_p">
							解放后,国家积极支援边疆经济社会文化建设,并投入了大量人力、物力和财力,新疆多元民族文化的现实容貌基本确定。1949年底,中国人民解放军进驻新疆,随后很多解放军官兵(绝大多数是汉族)就地转业,分布于新疆各地,组建为新疆军区生产建设兵团的10余个师和100多个农牧团场(这也是现在的兵团雏形),这是解放后首次大批汉族人迁入新疆。如今几十年过去了,汉民族群众在新疆地位的稳固,不仅有力地支援了边疆经济建设,而且随着汉族与其他民族的杂居和频繁往来,又丰富着新疆文化民族文化多元性和多样性的内容。这些就是推动新疆民族文化多元的现代元素,由于这一时期多元文化的发展成绩斐然,因此也将这一时期称之为“黄金时期”。
						</p>
					</div>
					<div class="culture_title">
						<p class="culture_title_text">新疆多元民族文化的文化元素构成分析</p>
						<p class="culture_cont_text_p">
							现今,新疆多元民族文化已经在各个方面有所展现,而本文所谈到的新疆多元民族文化,不仅包括以维吾尔族为主导的伊斯兰传统文化,还包括以汉文化、其他少数民族的文化等,这些文化的交流、并存,融为一体但又不丧失民族传统和民族特色,才是新疆多元民族文化的真实内涵,当然这一文化内涵也在不断地发展和变迁,要论证和研究这些问题,就必须对影响文化多元的几个元素———民族意识、宗教信仰、语言文字、族际交往、民族节日和民族风俗等进行分析,进而才能得出在当代新疆民族文化是多元民族文化这一结论。
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class="pdtb-110110 bg-gray">
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
		<section class="pdtb-110110 bg-yh">
			<div class="center clearfix">
				<div class="ym_culture f-r">
					<h2 class="ym_culture_h2 f-l col-100">新疆游牧民族</h2>
					<p class="col-45  ym_culture_p f-r">
						游牧民族被称为马背上的民族，他们的许多活动如：举行婚礼、赛马、射箭和摔跤等都要在马背上进行，匈奴、鲜卑、突厥、回鹘等少数民族从汉时起就与中原有的千丝万缕的联系，传承了游牧民族的文明和历史，而其与汉族形成融合，又共同演绎了不屈不挠的中华民族。
					</p>
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