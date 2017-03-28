<template>
    <section id="login">
        <h3 class="clearfloat">VueTestDemo-Login</h3>
        <transition name="slideT">
            <div class="login-tip" v-show="tipFlag">
                用户名：test &nbsp&nbsp&nbsp&nbsp 密码：test
            </div>
        </transition>
        <div class="login-box">
            <div class="login-box-left">
                <h2>登陆</h2>
                <form action="" method="get">
                    <input class="inpt-user" v-model="username" type="text" placeholder="用户名">
                    <input class="inpt-pswd" v-model="password" @keyup.enter='login' type="password" placeholder="密码">
                    <div class="left-rember">
                        <router-link class="forgetPaswd" to="./forget">
                            忘记密码
                        </router-link>
                        <input type="checkbox">
                        <span>记住我!</span>
                    </div>
                    <input class="login-btn" type="button" value="登陆" @click="login">
                </form>
            </div>
            <div class="login-box-right">
                <h2>User-Logo</h2>
                <img src="../assets/imgs/login.png" title="这只是一个简单的头像" alt="这只是一个简单的头像">
            </div>
        </div>
        <p class="author">ZJL-DEMO-VUE-TEST</p>
        <djkloop-loding v-show="loadFlag"></djkloop-loding>
    </section>
</template>
<script>
    import AV from '../assets/js/av-min'
    import UserPassword from '../login/user-paswd.js'
    import '../assets/js/initLeanCloud.js'

    export default {
        data(){
            return {
                alert: {
                    content: ''
                },
                username: '',
                password: '',
                tipFlag: false,
                loadFlag:true
            }
        },
//        watch(){
//            changeRoute(){
//
//            }
//        },
        mounted(){
            this.loadFlag = false;
            this.tipFlag = true;
            setTimeout(function () {
                this.tipFlag = false;
            }.bind(this), 4000)
        },
        methods: {
            login(){
                var username = this.username;
                var pass = this.password;
                /*
                 	使用leancloud数据库
                 */
                AV.User.logIn(username, pass).then(function (loginedUser) {
                    setTimeout(function () {
                        this.$router.push({path: '/home'})
                    }.bind(this), 600)
                }.bind(this), function (error) {
                    alert('密码错误')
                }.bind(this));
            }
        }
    }
</script>
<style scoped>
@import "./login.css";
</style>