<template>
	<section class="productservice" id="ProductService">
		<section class="mt pdtb-110280 productserviceTop">
			<div class="center">
				<!-- 这个地方的数据可以后台加载Obj.title -->
				<div class="title-box">
					<h1 class="col-50 title-h1 ftw-400">
                    新疆印象,走进新疆
                </h1>
					<div class="f-r title-img">
						<img src="../../assets/imgs/dbl.jpg" />
					</div>
				</div>
				<!-- 这个地方的数据可以后台加载Obj.text -->
				<p class="product_text ftw-400 col-70">
					新疆的博大、新疆的美丽、新疆的许多不可思,那冰山雪峰的绝顶崇高, 火洲盆地的彻底塌陷,草原的抚媚秀丽,戈壁的粗砺坦荡,打磨的雄浑神秘, 绿洲的田园风光,湖泊的澄清柔和,上演的铁硬突兀,果园的丰饶富有,废垒的荒凉凄清...这一切的一切矛盾而又和谐, 只有新疆才可以承载这样厚重的独特。
				</p>
				<p class="product_text ftw-400 col-70">
					新疆印象现提供,旅行路线,旅行攻略,美食发现,特色文化等。如有需要请
					<a class="ftw-500 tel-a" href="javascripe:;">点击咨询</a>
				</p>
				<router-link to="/home/productService" class='btn btn-normal btn-objSave btn_text_2'>
					点击查看更多资讯
				</router-link>
				<a class="ftw-500 tel-a" href="javascript:;">点击咨询私人订制旅游路线服务</a>
			</div>
		</section>
		<section class="product center mgt-150">
			<div class="product_block clearfloat">
				<ul class="clearfloat">
					<!--  这一块的列表数据可以从后台获取然后前台循环出来 -->
					<div class="col-list clearfloat">
						<li class="col-50">
							<img class="img-res product-img" src="../../assets/imgs/xiao.jpg" alt="">
							<div class="product-context col-65">
								<h4 class="ftw-400">孝老爱亲</h4>
								<p>长存仁孝心,则天下凡不可为者,皆不忍内,所以孝居百行之先。</p>
							</div>
						</li>
						<li class="col-50">
							<img class="img-res product-img" src="../../assets/imgs/li.jpg" alt="">
							<div class="product-context col-65">
								<h4 class="ftw-400">礼仪之邦</h4>
								<p>忠信,礼之本也;义理,礼之本也。无本不立,无文不行。</p>
							</div>
						</li>
					</div>
					<div class="clearfloat">
						<li class="col-50">
							<img class="img-res product-img" src="../../assets/imgs/xue.jpg" alt="">
							<div class="product-context col-65">
								<h4 class="ftw-400">学无止境</h4>
								<p>学知不足,业精于勤,聪明在于学习,天才在于积累,所谓天才,实际上是依靠学习。</p>
							</div>
						</li>
						<li class="col-50">
							<img class="img-res product-img" src="../../assets/imgs/zhi.jpg" alt="">
							<div class="product-context col-65">
								<h4 class="ftw-400">志存高远</h4>
								<p>志不立,天下无可成之事。天下无可成之事,虽百工技艺,未有不本于志者。</p>
							</div>
						</li>
					</div>
				</ul>
			</div>
		</section>
		<section class="UseSence bg-gray pdtb-110110">
			<div class="center">
				<div class="clearfix">
					<h4 class="ftw-300">走进新疆</h4>
					<h2 class="mgtb-1025 ftw-400 col-50 f-l">
						新疆印象著名风景区简要介绍
						<p class="fj_his">
							在古代丝绸之路上,有一片美丽富饶的土地,这就是占中国面积1/6的新疆维吾尔自治区。
							新疆自治区成立于1955年,下辖5个州和8个地区以及3个省辖市。
							新疆风光壮美,同时具有雪山、草原、沙漠、盆地、河谷等自然景观;不仅如此,昔日繁华的丝绸之路又给新疆带来了多姿多彩的生活...
						</p>
					</h2>
					<img class="f-r" src="../../assets/imgs/kns_bd.jpg" alt="" />
				</div>
				<!-- 这个地方完全可以从后台获取数据 -->
				<el-tabs class="tabs" id="tabs" v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="乌鲁木齐" class="clearfloat" name="first">
						<div class="tabs-pos col-55">
							<h4 class="ftw-400 hove_title">乌鲁木齐<i></i><span>天山大峡谷</span></h4>
							<p class="ftw-400">
								乌鲁木齐天山大峡谷位于乌鲁木齐南山板房沟乡走进天山大峡谷,您可以感受到陡峭险峻的山峰、神秘的原始森林、碧绿的山谷草原、 壮观的雪岭冰川、秀美的湖光山色、幽深的山涧峡谷、奔腾的溪流、浓郁的哈萨克风情。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/Urumqi.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="吐鲁番" class="clearfloat" name="second">\
						<div class="tabs-pos col-55">
							<h4 class="ftw-400 hove_title">吐鲁番<i></i><span>葡萄沟</span></h4>
							<p class="ftw-400">
								葡萄沟于吐鲁番市东北7公里处,南北走向,横穿火焰山,沟内流水潺潺,瓜果飘香,凉爽宜人,是吐鲁番旅游避暑胜地的好去处。 火焰山位于吐鲁番盆地的中部盆地,神话小说《西游记》里有孙悟空三借芭蕉扇扑灭火焰山烈火的故事讲述就是火焰山。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/Turpan.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="阿克苏" class="clearfloat" name="third">
						<div class="tabs-pos col-55">
							<h4 class="ftw-400 hove_title">阿克苏<i></i><span>托木尔大峡谷</span></h4>
							<p class="ftw-400">
								托木尔大峡谷是中国西部最震撼的地质奇观、中国最大的岩盐喀斯特地质胜景,媲美美国科罗拉多大峡谷。 托木尔大峡谷有中国罕见的远古岩盐地质绝景、中国西部奇特的雅丹地质怪景、中国独有的巨型岩溶蚀地质秘境, 堪称新疆“活的地质演变史博物馆。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/aksu.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="阿勒泰" class="clearfloat" name="fourth">
						<div class="tabs-pos col-55">
							<h4 class="ftw-400 hove_title">阿勒泰<i></i><span>喀纳斯</span></h4>
							<p class="ftw-400">
								喀纳斯沿途欣赏驼劲湾、浪漫风情白桦林、神奇的卧龙湾、开阔的神仙湾、最富特色的月亮湾、野鸭出没的鸭泽湖。 贾登峪位于喀纳斯湖东南35公里处,它是一块长约2公里,宽约1.5公里的山间盆地,那里水草丰美,有牧民定居。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/Aletai.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="伊犁" class="clearfloat" name="fifth">
						<div class="tabs-pos col-55">
							<h4 class="ftw-400 hove_title">伊犁<i></i><span>解忧公主薰衣草园</span></h4>
							<p class="ftw-400">
								解忧公主薰衣草园,是中国唯一的薰衣草主产地,有“中国薰衣草之乡”的美称。 赛里木湖海拔2073米的赛里木湖湖水清碧如镜,湖畔群山环绕,松柏参天,雪峰倒影;春、夏、秋季湖滨芳草如茵,风光秀丽。 果子沟风景秀丽,景观奇异,历来被视为新疆的名胜之地,素有伊犁“第一景”之美称。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/lli.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="喀什" name="sixth">
						<div class="tabs-pos col-55">
							<h4 class="ftw-400 hove_title">喀什<i></i><span>阿帕霍加墓</span></h4>
							<p class="ftw-400">
								阿帕霍加墓又名香妃墓,始建于公元1640年前后,距今已350年,是一座典型的伊斯兰式古老的陵墓建筑。 喀什噶尔-----新疆唯一的国家级历史文化名城,参观户您可以亲眼目睹到传统维吾尔居民家庭生活、民族风情、民族手工艺民族家访可以让您品尝到丰富的民族饮食。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/Kashgar.jpg" alt="">
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</section>
		<section class="Helper bg-white pdtb-110110">
			<div class="center clearfloat">
				<!-- 可以json数据循环出来 -->
				<h2 class="help-h2 col-25 ftw-400">新疆印象带您发现美食</h2>
				<nav class="help-nav col-65">
					<ul class="col-33">
						<li>
							<h4 class="ftw-400 help-h4">新疆大盘系列</h4>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								大盘鸡
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								辣子鸡
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								椒麻鸡
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								大盘肚
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								大盘牛肉
							</a>
						</li>
						<li>
							<a class="ftw-500 helper-dev helper-dev-more d-ib" href="javascript:;">
								更多大盘美食
							</a>
						</li>
					</ul>
					<ul class="col-33">
						<li>
							<h4 class="ftw-400 help-h4">干果鲜果</h4>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								巴达木
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								开心果
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								薄皮核桃
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								长寿果
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								哈密瓜
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								西瓜
							</a>
						</li>
						<li>
							<a class="ftw-500 helper-dev helper-dev-more d-ib" href="javascript:;">
								更多干果鲜果
							</a>
						</li>
					</ul>
					<ul class="col-33">
						<li>
							<h4 class="ftw-400 help-h4">特色美食</h4>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								烤全羊
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								抓饭羊腿
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								九碗三行子
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								馕包肉
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								羊杂碎
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								伊犁马肠子
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								熏马肉
							</a>
						</li>
						<li>
							<a class="ftw-500" href="javascript:;">
								酸奶疙瘩
							</a>
						</li>
						<li>
							<a class="ftw-500 helper-dev helper-dev-more d-ib" href="javascript:;">
								更多特色美食
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</section>
		<section class="Question bg-gray pdtb-55110">
			<div class="center clearfloat">
				<!-- 可以从后台传过来数据 -->
				<div class="clearfix">
					<h2 class="ftw-400 f-l culture">新疆印象文化长廊</h2>
					<img class="f-r culture_img" src="../../assets/imgs/flower.png" alt="" />
				</div>
				<ul class="col-40">
					<li>
						<a class="ques-link ftw-500" href="javascript:;">
							丝绸之路的文化
						</a>
					</li>
					<li>
						<a class="ques-link ftw-500" href="javascript:;">
							以佛教为代表的新疆文化
						</a>
					</li>
					<li>
						<a class="ques-link ftw-500" href="javascript:;">
							游牧民族的文化
						</a>
					</li>
					<li>
						<a class="ques-link ftw-500" href="javascript:;">
							新疆名族服饰文化
						</a>
					</li>
				</ul>
				<ul class="col-45 ques-left">
					<li>
						<a class="ques-link ftw-500" href="javascript:;">
							新疆春节和民族节日文化
						</a>
					</li>
					<li>
						<a class="ques-link ftw-500" href="javascript:;">
							新疆四大名刀文化
						</a>
					</li>
					<li>
						<a class="ques-link ftw-500" href="javascript:;">
							新疆规模最大的清真寺
						</a>
					</li>
					<li>
						<a class="ques-link ftw-500" href="javascript:;">
							做工考究新疆英吉沙小刀
						</a>
					</li>
				</ul>
				<a class="btn btn-normal btn_text_2" href="javascript:;">更多文化详解</a>
			</div>
		</section>
		<!-- 这个就写死吧不用后台传了 -->
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
	</section>
</template>
<style>
	@import "../../assets/css/child_componentsCss/productservice.css";
	.el-tabs__content {
		margin-top: 0.45rem;
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
		overflow: hidden;
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
		box-shadow: 0px 0px 10px rgba(0, 0, 0, .6);
		border-radius: 5px;
	}
</style>
<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				activeName: 'first'
			};
		},
		mounted() {

		},
		methods: {
			handleClick(tab, event) {

			},
			getTabs() {
				console.log($("#tabs div.is-active").attr('label'));
			}
		}
	};
</script>