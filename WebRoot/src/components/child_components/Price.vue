<template>
	<section class="mt" id="Price">
		<section class="Price pdtb-110110 bg-04">
			<div class="center">
				<h1 class="col-55">新疆民族团结一家亲</h1>
				<p class="price-p ftw-400 col-70">民族团结是中华民族伟大复兴的强大动力。实现中华民族伟大复兴，是近代以来中国人民不懈追求的目标。</p>
				<p class="price-p ftw-400 col-70">民族团结是一种精神、一种思想整合力量、一种追求，它对凝聚人心、整合社会起着重要作用。我国是一个统一的多民族国家。民族团结关系到中华民族的生死存亡，关系到国家的安危和各族人民的根本利益。</p>
			</div>
		</section>
		<section class="price-tabs pdtb-110110">
			<div class="center">
				<div class="price-img clearfix">
					<h1 class="f-l price-img-h1">新疆道德模范人物</h1>
					<img class="f-r" src="../../assets/imgs/wd.jpg"/>
				</div>
				<el-tabs class="tabs" id="tabs" v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="助人为乐" class="clearfloat" name="first">
						<div class="tabs-pos col-50">
							<h4 class="ftw-400 hove_title">助人为乐<i></i><span>周丽娜</span></h4>
							<p class="ftw-400">
								评为全国助人为乐模范的阿图什市上阿图什镇亚维勒克双语幼儿园园长周丽娜,从辽宁沈阳到新疆阿图什,从一句维吾尔语都不懂到成为当地维吾尔族孩子离不开的双语教师。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/zln.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="见义勇为" class="clearfloat" name="second">\
						<div class="tabs-pos col-50">
							<h4 class="ftw-400 hove_title">见义勇为<i></i><span>阿不力孜·买买提尼牙孜</span></h4>
							<p class="ftw-400">
								评为全国见义勇为模范的和田市残疾人工贸发展中心董事长阿不力孜·买买提尼牙孜,24年来在火海中、公路边先后救助了70多名遇险群众。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/ablz.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="孝老爱亲" class="clearfloat" name="third">
						<div class="tabs-pos col-50">
							<h4 class="ftw-400 hove_title">孝老爱亲<i></i><span>陈明</span></h4>
							<p class="ftw-400">
								评为全国孝老爱亲模范的兵团第三师四十一团社区政工员陈明,20多年来克服重重困难,照顾瘫痪在床、患重病的父亲,父子俩不离不弃、血脉相连,书写了人间大爱。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/cm.jpg" alt="">
						</div>
					</el-tab-pane>
					<el-tab-pane label="敬业奉献" class="clearfloat" name="fourth">
						<div class="tabs-pos col-50">
							<h4 class="ftw-400 hove_title">敬业奉献<i></i><span>沙吾尔·芒力克</span></h4>
							<p class="ftw-400">
评为全国敬业奉献模范的尉犁县兴平乡达西村党支部书记沙吾尔·芒力克,带领村民把达西村从一个昔日生活靠救济、生产靠贷款的贫困村建成“口袋鼓囊囊、精神亮堂堂”的“南疆第一村”。
							</p>
						</div>
						<div class="tabs-img col-33">
							<img src="../../assets/imgs/swe.jpg" alt="">
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</section>
		<section class="pdtb-110110 bg-gray">
			<div class="center">
				<div class="clearfix">
					<img class="f-l" src="../../assets/imgs/girl.jpg"/>
					<h2 class="f-r xz-h2">习近平:民族团结是新疆发展根本基石</h2>
				</div>
				<div class="xz-describe">
					<p>
						习近平指出,我国是统一的多民族国家，一部中华民族史就是一部各民族团结凝聚、共同奋进的历史。
						民族团结是各族人民的生命线，是新疆发展进步的根本基石，也是13亿多中国人民的共同意志。
						要维护民族团结，加强军政团结、军民团结、警民团结、兵地团结，筑牢各族人民共同维护祖国统一、维护民族团结、维护社会稳定的钢铁长城。
						要全面贯彻党的民族政策，高举各民族大团结旗帜，引导各族群众增强对伟大祖国、中华民族、中华文化、中国共产党、中国特色社会主义的认同，像爱护自己的眼睛一样爱护民族团结，像珍视自己的生命一样珍视民族团结，像石榴籽那样紧紧抱在一起。要持续开展好“民族团结一家亲”和民族团结联谊活动，把民族团结落实到日常生活工作学习中，贯穿到学校教育、家庭教育、社会教育各环节各方面，让民族团结之花常开长盛。
					</p>
				</div>
			</div>
		</section>
		<section class="pdtb-110110 bg-white">
			<div class="center">
				<div class="clearfix">
					<img class="f-r" src="../../assets/imgs/cqg.jpg"/>
					<h2 class="f-l xz-h2">陈全国:民族团结一家亲</h2>
				</div>
				<div class="xz-describe">
					<p>
						陈全国指出，要充分认识开展“民族团结一家亲”活动的重大意义，统一思想、统一行动。
						在全区开展“民族团结一家亲”活动，是贯彻落实以习近平同志为总书记的党中央确定的社会稳定和长治久安总目标的重要举措，是贯彻落实习近平总书记重要讲话精神的实际步骤，是进一步巩固发展民族团结的有力抓手，是被实践证明了的促进各民族交往交流交融的成功经验，是做好群众工作的必然要求，是推进脱贫攻坚的有效途径，是转变干部作风的现实需要。
						要充分认识做好民族团结工作的重要性和必要性，切实增强开展“民族团结一家亲”活动的责任感和紧迫感。
					</p>
				</div>
			</div>
		</section>
		<section class="pad-clas bg-03 pdtb-110110">
			<div class="center mTop-50">
				<h4>大美新疆，道德高地</h4>
				<h2 class="col-65">新疆精神,道德模范激扬正能量</h2>
				<p class="content_text">
					层出不穷的道德模范代表着新疆人的价值追求，他们是爱国爱疆、团结奉献、勤劳互助、开放进取“新疆精神”的集中体现。
					他们的感人事迹生动地展现着新疆精神文明建设的丰硕成果，展示着新时期新疆人的新形象。
					道德模范评选活动已经成为促进我区民族团结，推进长治久安、社会和谐稳定的有力抓手。
				</p>
				<div class="new_register">
					<div class="regsiter_row margb clearfloat">
						<li>
							<span>道德模范评选50人选票达</span>
							<h2>551.9461万</h2>
						</li>
						<li class="w_middle">
							<span>我评议最美新疆人活动,全年投票总数达</span>
							<h2>4281万</h2>
						</li>
						<li class="right_text">
							<span>31省中当选道德模范人数</span>
							<h2>新疆居全国之首</h2>
						</li>
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