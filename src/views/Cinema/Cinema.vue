<template>
  <div class="scroll">
    <div>
      <div class="header" :class="fixed ?  'fixed' : '' ">
        <div class="header-one">
          <span @click="goCity()">{{addr}}</span>
          <span>影院</span>
          <span>
            <img
              data-v-4070467a
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg=="
              width="18px"
              height="18px"
              alt
            />
          </span>
        </div>
        <div class="header-two">
          <span>
            全城
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              width="6px"
              height="3px"
              style
            />
          </span>
          <span>
            APP订票
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              width="6px"
              height="3px"
              style
            />
          </span>
          <span>
            最近去过
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              width="6px"
              height="3px"
              style
            />
          </span>
        </div>
      </div>

      <div class="middle-list" v-for="(item, index) in list" :key="index">
        <div class="middle-title">
          <span class="cinema-name">{{item.name}}</span>
          <span class="cinema-price">￥ {{item.lowPrice / 100}} 起</span>
        </div>
        <div class="middle--description">
          <span class="cinema-address">{{item.address}}</span>
          <span class="cinema-distance">距离未知</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入正在热映的请求方法
import { cinemaListData } from "@/api/api";
export default {
  data() {
    return {
      list: [],
      //定义一个参数做城市的初始值
      addr: "上海",
      fixed: false
    };
  },
  // axios 是异步请求
  async mounted() {
    let ret = await cinemaListData();
    this.list = ret.data.data.cinemas;
    //获取城市列表中所点击的城市数据信息
    this.addr = this.$store.state.city;

    // 固定定位
    window.addEventListener(
      "scroll",
      e => {
        let top = document.documentElement.scrollTop;
        if (top > 150) {
          // 吸顶
          this.fixed = true;
        } else {
          // 还原
          this.fixed = false;
        }
      },true);
  },
  methods: {
    goCity: function(cityName) {
      this.$router.push("/city");
      this.$store.commit("setCity", cityName);
    }
  }
};
</script>


<style lang="css" scoped>
.header {
  width: 100%;
}
.header-one,
.header-two {
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ededed;
}

.middle-list {
  height: 80px;
  border-bottom: 1px solid #ededed;
}

.middle-title {
  margin-top: 25px;
  margin-top: 10px;
}

.cinema-name {
  display: inline-block;
  width: 265px;
  color: #191a1b;
  font-size: 15px;
  padding-left: 10px;
  margin-top: 10px;
}
.cinema-price {
  display: inline-block;
  width: 70px;
  font-size: 15px;
  color: #ff5f16;
  float: right;
  text-align: center;
}

.middle--description {
  margin-top: 5px;
}

.cinema-address {
  display: inline-block;
  width: 220px;
  color: #797d82;
  font-size: 12px;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 10px;
}
.cinema-distance {
  width: 70px;
  float: right;
  display: block;
  font-size: 11px;
  color: #797d82;
  margin-top: 5px;
  text-align: center;
}
.fixed {
    position: fixed;
    top: 0;
    background: #ffffff;
}
</style>
