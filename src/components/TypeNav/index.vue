<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveshow" @mouseenter="show=true">
        <h2 class="all">全部商品分类</h2>
        <transition
          name="animate__animated animate__bounce"
          enter-active-class="animate__fadeIn"
          leave-active-class="animate__fadeOut"
        >
          <div class="sort" @click="goSearch" v-show="show">
            <div class="all-sort-list2">
              <div
                class="item"
                v-for="(categoryFirst,index) in categoryList"
                :key="categoryFirst.categoryId"
                :class="{currentStyle:index===currentIndex}"
              >
                <h3 @mouseenter="highLight(index)" @mouseleave="removeHighLight()">
                  <a
                    :data-categoryName="categoryFirst.categoryName"
                    :data-category1Id="categoryFirst.categoryId"
                  >{{categoryFirst.categoryName}}</a>
                </h3>
                <div class="item-list clearfix">
                  <div
                    class="subitem"
                    v-for="categorySecond in categoryFirst.categoryChild"
                    :key="categorySecond.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="categorySecond.categoryName"
                          :data-category2Id="categorySecond.categoryId"
                        >{{categorySecond.categoryName}}</a>
                      </dt>
                      <dd>
                        <em
                          v-for="categoryThird in categorySecond.categoryChild"
                          :key="categoryThird.categoryId"
                        >
                          <a
                            :data-categoryName="categoryThird.categoryName"
                            :data-category3Id="categoryThird.categoryId"
                          >{{categoryThird.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
//引入节流函数
import throttle from 'lodash/throttle'
export default {
  name: 'TypeNav',
  data() {
    return {
      //存储用户鼠标移上哪一个一级分类
      currentIndex: -1,
      //控制是否展示
      show: false,
    }
  },
  computed: {
    ...mapState('home', ['categoryList']),
  },
  methods: {
    //节流方式解决用户操作过快浏览器无法反应的问题
    highLight: throttle(function (value) {
      this.currentIndex = value
    }, 50),

    removeHighLight() {
      this.currentIndex = -1
    },
    goSearch(event) {
      //事件委派:通过在标签上添加属性来判断点击了哪个标签并且传值
      let element = event.target
      let { categoryname, category1id, category2id, category3id } =
        element.dataset
      if (categoryname) {
        let location = { name: 'search' }
        let query = { categoryName: categoryname }
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
        location.query = query
        if (this.$route.params) {
          location.params = this.$route.params
        }
        this.$router.push(location)
      }
    },

    leaveshow() {
      if (this.$route.path != '/home') {
        this.show = false
      }
    },
  },
  mounted() {
    if (this.$route.path === '/home') {
      this.show = true
    }
  },
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
  .currentStyle {
    background-color: skyblue;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
              cursor: pointer;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                  cursor: pointer;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                    cursor: pointer;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
