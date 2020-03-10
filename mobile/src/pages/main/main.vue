<template>
  <div class="wrap">
    <div class="header">
      <h1 class="tit_logo">
        <img src="@/assets/images/logo.png" class="img_logo" alt="">
      </h1>
      <div class="gnb_comm">
        <ul class="list_gnb">
          <li><a href="#none" class="link_gnb">Portfolio</a></li>
          <li><a href="#none" class="link_gnb">Search</a></li>
          <li><a href="#none" class="link_gnb">Reservation</a></li>
          <li><a href="#none" class="link_gnb">Shop</a></li>
          <li><a href="#none" class="link_gnb">Stroy</a></li>
        </ul>
      </div>
      <div class="snb_comm">
        <ul class="list_snb">
          <li><a href="#none" class="link_snb">NEW</a></li>
          <li><a href="#none" class="link_snb">BEST</a></li>
          <li><a href="#none" class="link_snb">CATAGORY</a></li>
          <li><a href="#none" class="link_snb">ARTIST</a></li>
          <li><a href="#none" class="link_snb">EVENT</a></li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="rank_portfolio">
        <strong class="tit_rank">RANK</strong>
        <div class="area_scroll">
          <ul class="list_rank">
            <li class="item_portfolio">
              <a href="#none">
                <div class="body_item">
                  <img src="@/assets/images/temp/temp_dummy2.jpg" class="img_g" alt="">
                </div>
                <div class="head_item">
                  <div class="profile_img">
                    <img src="@/assets/images/temp/temp_profile2.png" class="img_g" alt="">
                  </div>
                  <span class="profile_name">___y___k___y___</span>
                </div>
              </a>
            </li>
            <li class="item_portfolio">
              <a href="#none">
                <div class="body_item">
                  <img src="@/assets/images/temp/temp_dummy.jpg" class="img_g" alt="">
                </div>
                <div class="head_item">
                  <div class="profile_img">
                    <img src="@/assets/images/temp/temp_profile.jpg" class="img_g" alt="">
                  </div>
                  <span class="profile_name">inking_artist</span>
                </div>
              </a>
            </li>
            <li class="item_portfolio">
              <a href="#none">
                <div class="body_item">
                  <img src="@/assets/images/temp/temp_dummy3.png" class="img_g" alt="">
                </div>
                <div class="head_item">
                  <div class="profile_img">
                    <img src="@/assets/images/temp/temp_profile.jpg" class="img_g" alt="">
                  </div>
                  <span class="profile_name">inking_artist</span>
                </div>
              </a>
            </li>
            <li class="item_portfolio">
              <a href="#none">
                <div class="body_item">
                  <img src="@/assets/images/temp/temp_dummy2.jpg" class="img_g" alt="">
                </div>
                <div class="head_item">
                  <div class="profile_img">
                    <img src="@/assets/images/temp/temp_profile2.png" class="img_g" alt="">
                  </div>
                  <span class="profile_name">___y___k___y___</span>
                </div>
              </a>
            </li>
            <li class="item_portfolio">
              <a href="#none">
                <div class="body_item">
                  <img src="@/assets/images/temp/temp_dummy.jpg" class="img_g" alt="">
                </div>
                <div class="head_item">
                  <div class="profile_img">
                    <img src="@/assets/images/temp/temp_profile.jpg" class="img_g" alt="">
                  </div>
                  <span class="profile_name">inking_artist</span>
                </div>
              </a>
            </li>
            <li class="item_portfolio">
              <a href="#none">
                <div class="body_item">
                  <img src="@/assets/images/temp/temp_dummy3.png" class="img_g" alt="">
                </div>
                <div class="head_item">
                  <div class="profile_img">
                    <img src="@/assets/images/temp/temp_profile.jpg" class="img_g" alt="">
                  </div>
                  <span class="profile_name">inking_artist</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div :class="['list_portfolio', 'list_portfolio_align'+alignListType]">
        <div class="head_portfolio">
          <div class="area_right">
            <button v-if="alignListType != '1'" class="btn_align btn_align1" @click="onClickAlign1">
              <span class="ico_ink ico_align1"></span>
            </button>
            <button v-if="alignListType != '2'" class="btn_align btn_align2" @click="onClickAlign2">
              <span class="ico_ink ico_align2"></span>
            </button>
            <button v-if="alignListType != '3'" class="btn_align btn_align3" @click="onClickAlign3">
              <span class="ico_ink ico_align3"></span>
            </button>
          </div>
        </div>
        <div class="item_portfolio">
          <div class="head_item">
            <div class="profile_img">
              <img src="@/assets/images/temp/temp_profile.jpg" class="img_g" alt="">
            </div>
            <span class="profile_name">inking_artist</span>
          </div>
          <div class="body_item">
            <img src="@/assets/images/temp/temp_dummy.jpg" class="img_g" alt="">
          </div>
        </div>
        <div class="item_portfolio">
          <div class="head_item">
            <div class="profile_img">
              <img src="@/assets/images/temp/temp_profile.jpg" class="img_g" alt="">
            </div>
            <span class="profile_name">inking_artist</span>
          </div>
          <div class="body_item">
            <img src="@/assets/images/temp/temp_dummy3.png" class="img_g" alt="">
          </div>
        </div>
        <div class="item_portfolio">
          <div class="head_item">
            <div class="profile_img">
              <img src="@/assets/images/temp/temp_profile2.png" class="img_g" alt="">
            </div>
            <span class="profile_name">___y___k___y___</span>
          </div>
          <div class="body_item">
            <img src="@/assets/images/temp/temp_dummy2.jpg" class="img_g" alt="">
          </div>
        </div>
        <div class="item_portfolio">
          <div class="head_item">
            <div class="profile_img">
              <img src="@/assets/images/temp/temp_profile.jpg" class="img_g" alt="">
            </div>
            <span class="profile_name">inking_artist</span>
          </div>
          <div class="body_item">
            <img src="@/assets/images/temp/temp_dummy3.png" class="img_g" alt="">
          </div>
        </div>
        <div class="item_portfolio">
          <div class="head_item">
            <div class="profile_img">
              <img src="@/assets/images/temp/temp_profile.jpg" class="img_g" alt="">
            </div>
            <span class="profile_name">inking_artist</span>
          </div>
          <div class="body_item">
            <img src="@/assets/images/temp/temp_dummy.jpg" class="img_g" alt="">
          </div>
        </div>
        <div class="item_portfolio">
          <div class="head_item">
            <div class="profile_img">
              <img src="@/assets/images/temp/temp_profile2.png" class="img_g" alt="">
            </div>
            <span class="profile_name">___y___k___y___</span>
          </div>
          <div class="body_item">
            <img src="@/assets/images/temp/temp_dummy2.jpg" class="img_g" alt="">
          </div>
        </div>
      </div>
      <div class="footer">
        <small>&copy; INK 2020</small>
      </div>
    </div>
  </div>
</template>

<script>
// import ImportComponentName from '@/components/common/ImportComponentName'

export default {
  name: 'main',
  components: {
    // ImportComponentName
  },
  data(){
    return{
      alignListType: '1'
    }
  },
  methods:{
    onClickAlign1(){
      this.alignListType = '1'
    },
    onClickAlign2(){
      this.alignListType = '2'
    },
    onClickAlign3(){
      this.alignListType = '3'
    }
  }
}
</script>

<style scoped>
.header{position:fixed;top:0;left:0;right:0;z-index:9900}
.header .tit_logo{padding:0 20px;border-bottom:1px solid #000;background-color:#fff}
.header .tit_logo .img_logo{display:block;width:43px;height:32px}

.gnb_comm{position:fixed;bottom:0;left:0;right:0;z-index:9900;border-top:2px solid #000;background-color:#fff}
.gnb_comm .list_gnb{display:block}
.gnb_comm .list_gnb li{display:inline-block;width:20%;vertical-align:top;text-align:center}
.gnb_comm .list_gnb .link_gnb{display:block;padding:10px 0;font-size:12px;color:#000}

.snb_comm{oveflow-x:auto;overflow-y:hidden;padding:0 10px;background-color:#000;text-align:center}
.snb_comm .list_snb{display:inline-block;vertical-align:top;white-space:nowrap}
.snb_comm .list_snb li{display:inline-block;vertical-align:top}
.snb_comm .list_snb li + li{margin-left:20px}
.snb_comm .list_snb .link_snb{display:block;padding:4px 0 4px;font-weight:normal;font-family:'NotoSansKR_T';font-size:13px;color:#fff}

.content{position:relative;min-height:100%;padding:58px 0 70px;box-sizing:border-box}

.area_left{float:left}
.area_right{float:right}
.area_scroll{overflow-x:auto;overflow-y:hidden}

.profile_img{float:left;overflow:hidden;text-align:center;border:1px solid rgba(0,0,0,.1);border-radius:100%}
.profile_img .img_g{max-height:100%;min-height:100%;min-width:100%}

.rank_portfolio{padding-top:10px;border-bottom:1px solid #e1e1e1}
.rank_portfolio .tit_rank{display:block;padding:0 10px;font-size:12px}
.list_rank{display:inline-block;padding:5px 10px 10px;white-space:nowrap;vertical-align:top}
.list_rank li{display:inline-block;width:80px;vertical-align:top}
.list_rank li + li{margin-left:15px}
.list_rank .head_item{overflow:hidden;margin-top:5px}
.list_rank .head_item .profile_img{width:20px;height:20px}
.list_rank .head_item .profile_name{display:block;overflow:hidden;line-height:20px;padding-left:5px;font-size:10px;letter-spacing:-.05em;white-space:nowrap;text-overflow:ellipsis}
.list_rank .body_item{position:relative;overflow:hidden;width:100%;height:80px;border:1px solid rgba(0,0,0,.1);font-size:0;background-color:#fff;white-space:nowrap}
.list_rank .body_item:after{display:inline-block;height:100%;vertical-align:middle;content:''}
.list_rank .body_item .img_g{display:inline-block;vertical-align:middle;white-space:normal;width:100%}

.list_portfolio{margin-top:20px}
.list_portfolio .head_portfolio{overflow:hidden;padding:0 10px}
.list_portfolio .head_portfolio .btn_align{display:inline-block;width:32px;height:32px;padding:6px;border:1px solid #000;vertical-align:top;outline:none}
.list_portfolio .head_portfolio .btn_align + .btn_align{border-left:0 none}
.list_portfolio .item_portfolio{display:inline-block;vertical-align:top}
.list_portfolio .head_item{overflow:hidden;padding:0 5px}
.list_portfolio .head_item .profile_name{display:block;overflow:hidden;padding-left:5px;font-size:13px;letter-spacing:-.05em;white-space:nowrap;text-overflow:ellipsis}
.list_portfolio .body_item{position:relative;width:100%;margin-top:5px;border-top:1px solid rgba(0,0,0,.1)}
.list_portfolio .body_item .img_g{width:100%}

.list_portfolio_align1 .item_portfolio{width:100%}
.list_portfolio_align1 .item_portfolio + .item_portfolio{margin-top:30px}
.list_portfolio_align1 .head_item .profile_img{width:32px;height:32px}
.list_portfolio_align1 .head_item .profile_name{line-height:32px}

.list_portfolio_align2 .item_portfolio{width:50%}
.list_portfolio_align2 .item_portfolio:nth-child(n+2){margin-top:30px}
.list_portfolio_align2 .head_item .profile_img{width:25px;height:25px}
.list_portfolio_align2 .head_item .profile_name{line-height:25px}

.list_portfolio_align3 .item_portfolio{width:33.333%}
.list_portfolio_align3 .item_portfolio:nth-child(n+1){margin-top:30px}
.list_portfolio_align3 .head_item .profile_img{width:20px;height:20px}
.list_portfolio_align3 .head_item .profile_name{line-height:20px}

.footer{position:absolute;bottom:0;left:0;right:0;height:70px;padding-top:5px;text-align:center;box-sizing:border-box}
</style>
