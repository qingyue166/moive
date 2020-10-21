<template>
  <div>
    <div class="title">{{film.name}}</div>
    <div class="film-header">
      <div class="goBack" @click="goBack()">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt
        />
      </div>
      <div class="title">我和我的家乡</div>
      <!---->
    </div>
    <div class="detail scroll" :style="{height: height + 'px'}">
      <div class="img">
        <img v-lazy="film.poster" />
      </div>
      <div class="all-text">
        <div class="name">{{ film.name }}</div>
        <div class="film-category">{{ film.category }}</div>
        <div class="film-premiere-time">{{ film.premiereAt | parsePremiereAt }}上映</div>
        <div class="film-nation-runtime">{{ film.nation }} | {{ film.runtime }} 分钟</div>
        <div class="film-synopsis">{{ film.synopsis }}</div>
        <div class="toggle">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
            alt
            class
          />
        </div>
      </div>

      <!-- 空白处 -->
      <div class="space"></div>

      <div class="actors">
        <p class="actors-title-text">演职人员</p>
        <Swiper :key="'actors_' + film.actors.length">
          <!-- 循环输出图片信息 -->
          <div v-for="(item, index) in film.actors" :key="index" class="swiper-slide">
            <img v-lazy="item.avatarAddress" alt />
            <p class="actors-name">{{item.name}}</p>
            <p class="actors-role">{{item.role}}</p>
          </div>
        </Swiper>
      </div>

      <!-- 空白处 -->
      <div class="space"></div>
      <div class="actors" id="phone">
        <div class="photos-title-bar">
          <span class="photos-title-text">剧照</span>
          <span class="photos-to-all">
            全部(5)
            <i style="font-size: 13px;">&gt;</i>
          </span>
        </div>
        <Swiper :key="'actors_' + film.actors.length" >
          <!-- 循环输出图片信息 -->
          <div v-for="(item, index) in film.photos" :key="index" class="swiper-slide">
            <img v-lazy="item" alt />
          </div>
        </Swiper>
      </div>
    </div>

    <div class="goSchedule">选座购票</div>
  </div>
</template>

<script>
import { moiveDetailData } from "@/api/api";
// 引入moment
import moment from "moment";
import Swiper from "@/components/Swiper";
// 引入加载更多模块
import BScroll from "better-scroll";
export default {
  data() {
    return {
      film: { actors: [] },

      //   加载更多
      height: 0,
      bs: null
    };
  },

  // 加载更多
  mounted() {
    // 获取可视高度
    this.height = document.documentElement.clientHeight - 100;
    this.$nextTick(() => {
      this.bs = new BScroll(".scroll", {
        // 激活上滑动的事件监听
        pullUpLoad: true,
        // 激活下滑的事件监听
        pullDownRefresh: true,
        // 默认情况下使用bs后，它会禁止浏览器的点击事件
        click: true
      });
      // 上拉刷新
      this.bs.on("pullingUp", () => {
        // 获取数据
        //本次pullup动作已经完成，继续准备下一次pullup
        this.bs.finishPullUp();
      });
      this.bs.on("pullingDown", () => {
        // 获取数据
        //本次pulldown动作已经完成，继续准备下一次pulldown
        this.bs.finishPullDown();
      });
    });
  },
  beforeDestroy() {
    // 节约资源
    this.bs = null;
  },

  async mounted() {
    let ret = await moiveDetailData(this.$route.params.filmId);
    this.film = ret.data.data.film;
  },
  filters: {
    parsePremiereAt: function(value) {
      // 时间戳的单位是秒，需要乘以1000转化成毫秒进行处理
      return moment(value * 1000).format("YYYY-MM-DD");
    }
  },
  components: {
    Swiper
  },
  created() {
    // 发起通知，通知app.vue组件移除底部菜单
    this.eventBus.$emit("footernav", false);
  },
  beforeDestroy() {
    // 发起通知，通知app.vue组件恢复底部菜单
    this.eventBus.$emit("footernav", true);
  },
  methods: {
    // 返回上一页
    goBack: function() {
      this.$router.go(-1);
    }
  },

};
</script>

<style lang="scss" scoped>
.title{
  font-size: 17px;
    line-height: 44px;
    width: 100%;
    text-align: center;
    display: none;
}
.film-header {
  position: fixed;
  background-color: hsla(0, 0%, 100%, 0);
  color: transparent;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: 100vw;
  height: 44px;
  z-index: 1;

  .goBack img {
    width: 30px;
    margin-top: 5px;
    margin-left: 5px;
  }
}

.detail {
  background-color: #fff;
  .all-text {
    padding: 15px;
  }
  .film-category,
  .film-premiere-time,
  .film-nation-runtime {
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
  }

  .film-synopsis {
    // height: 38px !important;
    // overflow: hidden;
    -webkit-transition: height 0.5s ease;
    -o-transition: height 0.5s ease;
    transition: height 0.5s ease;
    margin-top: 12px !important;
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
  }
  .toggle {
    text-align: center;
    display: block;
    height: auto;
    width: 20px;
    margin: auto;
    line-height: normal;
  }

  .swiper-slide {
    img {
      width: 80px;
    }
  }

  .name {
    color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    margin-right: 7px;
  }

  .img {
    width: 100%;
    height: 260px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.actors {
  text-align: center;

  .actors-title-text {
    font-size: 16px;
    text-align: left;
    color: #191a1b;
    padding: 15px;
  }

  .actors-name {
    padding-top: 6px;
    font-size: 12px;
    color: #191a1b;
    width: 85px;
    height: 18px;
    display: block;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .actors-role {
    font-size: 10px;
    color: #797d82;
  }

  .photos-title-bar {
    width: 100%;
    padding: 15px;
    overflow: hidden;
  }
  .photos-title-bar .photos-title-text {
    font-size: 16px;
    color: #191a1b;
    float: left;
  }
  .photos-title-bar .photos-to-all {
    font-size: 16px;
    color: #191a1b;
    float: right;
    margin-right: 20px;
  }
}

.space {
  width: 100% !important;
  height: 10px;
  margin: 10px 0 10px 0;
  background: rgb(236, 239, 240);
}

.goSchedule {
  padding: 1px;
  height: 49px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 16px;
  line-height: 49px;
  z-index: 9000;
}
#phone {
  margin-bottom: 60px;
  img{
    width: 80px;
    height: 50px;
    display: inline-block;
  }
}
</style>
