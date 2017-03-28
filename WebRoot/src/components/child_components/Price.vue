<template>
	<section class="mt" id="Price">
		<section class="Price pdtb-110110 bg-gray">
			<div class="center">
				<h1 class="col-55">七牛云价格方案</h1>
				<p class="price-p ftw-400 col-70">七牛云为您提供的不止优秀的产品，还有极具竞争力的产品定价。</p>
			</div>
		</section>
		<section class="price-tabs pdtb-5555">
			<div class="center">
				<el-tabs class="tabs" id="tabs" v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="乌鲁木齐" class="clearfloat" name="first">
						<div class="tabs-pos col-50">
							<h4 class="ftw-400">乌鲁木齐</h4>
							<p class="ftw-400">
								乌鲁木齐天山大峡谷位于乌鲁木齐南山板房沟乡走进天山大峡谷,您可以感受到陡峭险峻的山峰、神秘的原始森林、碧绿的山谷草原、 壮观的雪岭冰川、秀美的湖光山色、幽深的山涧峡谷、奔腾的溪流、浓郁的哈萨克风情。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/Urumqi.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="吐鲁番" class="clearfloat" name="second">\
						<div class="tabs-pos col-50">
							<h4 class="ftw-400">吐鲁番</h4>
							<p class="ftw-400">
								葡萄沟于吐鲁番市东北7公里处,南北走向,横穿火焰山,沟内流水潺潺,瓜果飘香,凉爽宜人,是吐鲁番旅游避暑胜地的好去处。 火焰山位于吐鲁番盆地的中部盆地,神话小说《西游记》里有孙悟空三借芭蕉扇扑灭火焰山烈火的故事讲述就是火焰山。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/Turpan.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="阿克苏" class="clearfloat" name="third">
						<div class="tabs-pos col-50">
							<h4 class="ftw-400">阿克苏</h4>
							<p class="ftw-400">
								托木尔大峡谷是中国西部最震撼的地质奇观、中国最大的岩盐喀斯特地质胜景,媲美美国科罗拉多大峡谷。 托木尔大峡谷有中国罕见的远古岩盐地质绝景、中国西部奇特的雅丹地质怪景、中国独有的巨型岩溶蚀地质秘境, 堪称新疆“活的地质演变史博物馆。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/aksu.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="阿勒泰" class="clearfloat" name="fourth">
						<div class="tabs-pos col-50">
							<h4 class="ftw-400">阿勒泰</h4>
							<p class="ftw-400">
								喀纳斯沿途欣赏驼劲湾、浪漫风情白桦林、神奇的卧龙湾、开阔的神仙湾、最富特色的月亮湾、野鸭出没的鸭泽湖。 贾登峪位于喀纳斯湖东南35公里处,它是一块长约2公里,宽约1.5公里的山间盆地,那里水草丰美,有牧民定居。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/Aletai.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="伊犁" class="clearfloat" name="fifth">
						<div class="tabs-pos col-50">
							<h4 class="ftw-400">伊犁</h4>
							<p class="ftw-400">
								解忧公主薰衣草园,是中国唯一的薰衣草主产地,有“中国薰衣草之乡”的美称。 赛里木湖海拔2073米的赛里木湖湖水清碧如镜,湖畔群山环绕,松柏参天,雪峰倒影;春、夏、秋季湖滨芳草如茵,风光秀丽。 果子沟风景秀丽,景观奇异,历来被视为新疆的名胜之地,素有伊犁“第一景”之美称。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/lli.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="喀什" name="sixth">
						<div class="tabs-pos col-50">
							<h4 class="ftw-400">喀什</h4>
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
		<section class="pad-clas bg-gray pdtb-110110">
			<div class="center">
				<h4>免费注册，即可享有</h4>
				<h2 class="col-65">给新用户的好礼</h2>
				<p class="content_text">
					立即注册成为七牛云用户，并完成实名认证，即可成为标准用户。成为标准用户您将获得：10 GB 永久免费空间，每月 10 GB 下载流量等诸多免费额度。
				</p>
				<div class="new_register">
					<div class="regsiter_row margb clearfloat">
						<li>
							<span>永久免费空间</span>
							<h2>10 GB</h2>
						</li>
						<li class="w_middle">
							<span>每月 HTTP 下载流量（国内＋海外）</span>
							<h2>10 GB + 10 GB</h2>
						</li>
						<li class="right_text">
							<span>每月 Put / Delete</span>
							<h2>10 万次</h2>
						</li>
					</div>
					<div class="regsiter_row clearfloat">
						<li>
							<span>每月 get</span>
							<h2>100 万次</h2>
						</li>
						<li class="w_middle">
							<span>每月 MPS</span>
							<h2>20 元</h2>
						</li>
						<li class="right_text">
							<span>每月 m0c1</span>
							<h2>750 小时</h2>
						</li>
					</div>
				</div>
				<router-link class="btn btn-normal btn_text_3" to="/home/index">
					立即免费体验
				</router-link>
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
	</section>
</template>
<style>
	@import "../../assets/css/child_componentsCss/prive.css";
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