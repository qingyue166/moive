<template>
  <div id="app">
    <!-- 底部导航 -->
    <FooterNav v-if="is_show"></FooterNav>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
export default {
  data() {
    return {
      is_show: true
    }
  },
  components: {
    FooterNav,
  },
  created() {
    this.eventBus.$on('footernav',(mark) => {
      this.is_show = mark
    })
  }
}
</script>


<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
html,
body {
    touch-action: none;
    height: 100%;
    ul,
    li {
        list-style: none;
    }
}
</style>

