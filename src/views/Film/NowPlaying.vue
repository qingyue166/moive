<template>
    <div>
        <FilmList :list="list" :type="type" :key="'film' + list.length"></FilmList>
    </div>
</template>

<script>
// 导入正在热映的请求方法
import {nowPlayingListData} from '@/api/api'
import FilmList from '@/components/FilmList'
export default {
    data(){
        return {
            pageNum: 1,
            list:[],
            type: 1, //当前传递的数据为正在热映的电影数据
        }
    },
    components: {
        FilmList
    },
    // axios 是异步请求
    async mounted(){
        let ret =  await nowPlayingListData(this.pageNum)
        console.log(ret.data.data.films)
        this.list = ret.data.data.films
    }
}
</script>