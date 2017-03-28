<template>
    <footer class="footer" id="footer">
        <div class="footer_center clearfloat">
            <div class="footer_logo">
                <router-link class="" to='/home'>
                    <img src="../../assets/imgs/logo_2.png" height="64" width="64">
                </router-link>
            </div>
            <nav class="footer_nav clearfloat">
                <ul>
                    <li>
                        <a>产品与服务</a>
                        <ul class="sub_nav">
                            <router-link tag="li" to="/home">
                                <a>对象储存</a>
                            </router-link>
                            <router-link tag="li" to="/home">
                                <a>融合CDN</a>
                            </router-link>
                            <router-link tag="li" to="/home">
                                <a>直播云</a>
                            </router-link>
                            <router-link tag="li" to="/home">
                                <a>数据处理</a>
                            </router-link tag="li">
                            <router-link tag="li" to="/home">
                                <a>价格</a>
                            </router-link>
                        </ul>
                    </li>
                    <li>
                        <a>支持</a>
                        <ul class="sub_nav">
                            <router-link tag="li" to="/home">
                                <a>开发者中心</a>
                            </router-link>
                            <router-link tag="li" to="/home">
                                <a>问答社区</a>
                            </router-link>
                            <router-link tag="li" to="/home">
                                <a>技术博客</a>
                            </router-link>
                            <router-link tag="li" to="/home">
                                <a>架构师实践日</a>
                            </router-link tag="li">
                            <router-link tag="li" to="/home">
                                <a>工单</a>
                            </router-link>
                        </ul>
                    </li>
                    <li>
                        <a>生态与合作</a>
                        <ul class="sub_nav">
                            <router-link tag="li" to="/home">
                                <a>牛扶持</a>
                            </router-link>
                            <router-link tag="li" to="/home">
                                <a>牛生态</a>
                            </router-link>
                            <router-link tag="li" to="/home">
                                <a>开发合作</a>
                            </router-link>
                            <router-link tag="li" to="/home">
                                <a>渠道合作</a>
                            </router-link tag="li">
                            <router-link tag="li" to="/home">
                                <a>友情链接</a>
                            </router-link>
                        </ul>
                    </li>
                    <li>
                        <a>公司</a>
                        <ul class="sub_nav">
                            <router-link tag="li" to="/home">
                                <a>关于我们</a>
                            </router-link>
                            <router-link tag="li" to="/home">
                                <a>加入我们</a>
                            </router-link>
                            <router-link tag="li" to="/home">
                                <a>联系我们</a>
                            </router-link>
                            <router-link tag="li" to="/home">
                                <a>媒体报道</a>
                            </router-link tag="li">
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