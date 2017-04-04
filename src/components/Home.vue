<template>
    <div>
        <div class="content">
            <SliderView></SliderView>
            <div class="newsList">
                <ul>
                    <li v-for="(item,index) in arrList">
                        <router-link :to="'/article/'+item.id">
                            <h2>{{item.title}}</h2>
                            <p>{{item.detail}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import SliderView from './Slider.vue'

    export default{
        data(){
            return {
                arrList:[]
            }
        },
        components:{
            SliderView
        },
        mounted(){
            //获取数据
            this.fetchData();
        },
        methods:{
            fetchData(){
                var _this=this;
                this.$http.get('src/data/index.data').then(function(res){
                    _this.arrList=res.data;
                }).catch(function(err){

                });
            }
        }
    }
</script>
<style scoped>
    @import '../assets/css/index.css';
</style>