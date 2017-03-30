<template>
    <footer class="footer" id="footer">
        <div class="footer_center clearfloat">
            <div class="footer_logo col-15">
                <router-link class="" to='/home'>
                    <img src="../../assets/imgs/logo_2.png" height="64" width="64">
                </router-link>
            </div>
            <nav class="footer_nav clearfloat">
                <ul>
                    <li>
                        <a>特色文化</a>
                        <ul class="sub_nav">
                            <router-link tag="li" to="/home/CustomerCase">
                                <a>新疆多元素特色文化</a>
                            </router-link>
                            <router-link tag="li" to="/home/CustomerCase">
                                <a>新疆民族文化介绍</a>
                            </router-link>
                            <router-link tag="li" to="/home/CustomerCase">
                                <a>新疆民族舞蹈</a>
                            </router-link>
                            <router-link tag="li" to="/home/CustomerCase">
                                <a>新疆本地公司企业</a>
                            </router-link tag="li">
                        </ul>
                    </li>
                    <li>
                        <a>团结模范</a>
                        <ul class="sub_nav">
                            <router-link tag="li" to="/home/Price">
                                <a>新疆民族团结一家亲</a>
                            </router-link>
                            <router-link tag="li" to="/home/Price">
                                <a>新疆道德模范人物</a>
                            </router-link>
                            <router-link tag="li" to="/home/Price">
                                <a>民族团结是新疆发展根本</a>
                            </router-link>
                            <router-link tag="li" to="/home/Price">
                                <a>大美新疆,道德高地</a>
                            </router-link tag="li">
                        </ul>
                    </li>
                    <li>
                        <a>旅游路线</a>
                        <ul class="sub_nav">
                            <router-link tag="li" to="/home/EcologyCooperation">
                                <a>新疆国际大巴扎</a>
                            </router-link>
                            <router-link tag="li" to="/home/EcologyCooperation">
                                <a>新疆天池五A级风景区</a>
                            </router-link>
                            <router-link tag="li" to="/home/EcologyCooperation">
                                <a>新疆那拉提五A级风景区</a>
                            </router-link>
                            <router-link tag="li" to="/home/EcologyCooperation">
                                <a>新疆喀纳斯五A级景区</a>
                            </router-link tag="li">
                            <router-link tag="li" to="/home/EcologyCooperation">
                                <a>天山大峡谷五A级风景区</a>
                            </router-link>
                        </ul>
                    </li>
                    <li>
                        <a>美食发现</a>
                        <ul class="sub_nav">
                            <router-link tag="li" to="/home/Support">
                                <a>大盘系列</a>
                            </router-link>
                            <router-link tag="li" to="/home/Support">
                                <a>干果鲜果</a>
                            </router-link>
                            <router-link tag="li" to="/home/Support">
                                <a>精美小吃</a>
                            </router-link>
                            <router-link tag="li" to="/home/Support">
                                <a>烤串系列</a>
                            </router-link tag="li">
                            <router-link tag="li" to="/home/Support">
                                <a>各地区美食攻略</a>
                            </router-link tag="li">
                        </ul>
                    </li>
                    <li>
                        <a>参赛人员</a>
                        <ul class="sub_nav">
                            <router-link tag="li" to="/home/Company">
                                <a>关于我们</a>
                            </router-link>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div class="copyright-info">
                <div class="copyright">
                    Copyright © 2017
                    <router-link to="/home">
                        张建磊
                    </router-link>
                    Inc.
                </div>
                <ul>
                    <router-link tag="li" to="/home">
                        <a>
                            用户协议
                        </a>
                    </router-link>
                    <router-link tag="li" to="/home">
                        <a>
                            SLA
                        </a>
                    </router-link>
                    <router-link class="last" tag="li" to="/home">
                        <a>
                            健康状态
                        </a>
                    </router-link>
                </ul>
                <div class="ISO">
                    <router-link class="verify-logo" to="/home"></router-link>
                    <router-link class="ISO_2017" to="/home"></router-link>
                </div>
            </div>
            <div class="web-record">
                <router-link to="/home">
                    沪公网安备 888888888888888 号
                </router-link>
                <router-link to="/home">
                    沪 ICP 备 888888888 号-8
                </router-link>
            </div>
        </div>
    </footer>
</template>
<style>
    @import '../../assets/css/components_css/footer.css'
</style>
<script>
export default {
    mounted(){

    },
    methods:{

    }
}
</script>