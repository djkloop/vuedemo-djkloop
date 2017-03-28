<template>
    <div class="mt" id="EcologyCooperation">
        <div class="center pdtb-110110">
            <h1 class="eco-title">新疆旅游线程攻略</h1>
            <p class="eco-sub_title">新疆“山山有宝、盆盆有油、河河有鱼”，由此也形成无数反差强烈的绿洲风景区和荒漠风景区，是我国旅游业发展的重要地区之一。
            	《中国旅游资源普查规范》将旅游分为地文景观、水体景观等6大类，新疆就集6大类资源于一身。
            	在中国的68种资源类型中，新疆占56种，居全国之首。目前，有全国重点文物保护单位41处、自治区级文物保护单位303处、县市级文物保护单位976处，初步查明文物点达4000余处，全疆共收藏文物116753件，其中，一级品706件。
            	著名的旅游点楼兰古城、高昌古城、交河故城、北庭古城等，均为国家级重点文物保护单位。与敦煌、云岗、龙门并称我国四大石窟的克孜尔千佛洞和库木吐拉千佛洞，对研究龟兹佛教艺术，具有极高的史料价值。丰富的文化遗产成为我国重要的人文景观旅游资源。那拉提草原上牛羊成群,新疆共有旅游景区（点）468处，其中，国家A级景区27处，包括4A级景区3个，3A级景区5个。形成了以“丝绸之路”为主线，以喀纳斯湖生态旅游区，天池、赛里木湖和博斯腾湖风景旅游区，吐鲁番、库车的古文化遗址旅游区，喀什的民俗风情旅游区，伊犁的塞外江南风光旅游区为重点的“五区三线”发展格局。
            	已开发了包括天池、喀纳斯、葡萄沟、南山、金沙滩等一批在国内外有较大影响的旅游产品。</p>
        </div>
        <section class="eco-cont pdtb-5555">
            <div class="center clearfix">
                <div class="eco-res-title col-100 f-l">
                    <h2>北疆-旅游景点</h2>
                </div>
                <div class="col-30 f-l img-pos" v-for="item in imgList">
                    <div class="img-list" >
                        <a class="img-a" :href=item.aHerf>
                            <img class="img-res" :src=item.imgSrc alt="">
                        </a>
                        <h2 class="describe">
                            <a :href=item.aHerf>{{item.describe}}</a>
                        </h2>
                    </div>
                </div>
                <div class="eco-res-title col-100 f-l">
                    <h2>南疆-旅游景点</h2>
                </div>
                <div class="col-30 f-l img-pos" v-for="item in imgList2">
                    <div class="img-list" >
                        <a class="img-a" :href=item.aHerf>
                            <img class="img-res" :src=item.imgSrc alt="">
                        </a>
                        <h2 class="describe">
                            <a :href=item.aHerf>{{item.describe}}</a>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
    @import "../../assets/css/child_componentsCss/ecologycooperation.css";
</style>
<script>
    export default {
        data(){
            return {
                imgList:[
                    {aHerf:'javascript:;',imgSrc:'../src/assets/imgs/dbz.jpg',describe:'七牛娱乐产业支持计划'},
                    {aHerf:'javascript:;',imgSrc:'../src/assets/imgs/tc.jpg',describe:'七牛娱乐产业支持计划'},
                    {aHerf:'javascript:;',imgSrc:'../src/assets/imgs/nlt.jpg',describe:'七牛娱乐产业支持计划'},
                    {aHerf:'javascript:;',imgSrc:'../src/assets/imgs/xyc.bmp',describe:'七牛娱乐产业支持计划'},
                    {aHerf:'javascript:;',imgSrc:'../src/assets/imgs/tsdxg.jpg',describe:'七牛娱乐产业支持计划'},
                    {aHerf:'javascript:;',imgSrc:'../src/assets/imgs/kns.jpg',describe:'七牛娱乐产业支持计划'},
                    {aHerf:'javascript:;',imgSrc:'../src/assets/imgs/kkth.jpg',describe:'七牛娱乐产业支持计划'},
                    {aHerf:'javascript:;',imgSrc:'../src/assets/imgs/bhb.jpg',describe:'七牛娱乐产业支持计划'},
                    {aHerf:'javascript:;',imgSrc:'../src/assets/imgs/wcw.jpg',describe:'七牛娱乐产业支持计划'}
                ],
                imgList2:[
                    {aHerf:'javascript:;',imgSrc:'../src/assets/imgs/n_ht.jpg',describe:'七牛娱乐产业支持计划'},
                    {aHerf:'javascript:;',imgSrc:'../src/assets/imgs/n_hyl.jpg',describe:'七牛娱乐产业支持计划'},
                    {aHerf:'javascript:;',imgSrc:'../src/assets/imgs/n_klklh.jpg',describe:'七牛娱乐产业支持计划'}
                ]
            }
        }
    }
</script>