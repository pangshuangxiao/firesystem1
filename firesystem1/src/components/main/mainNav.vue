<template>
  <!--主页面-->
    <div class="mainNav">
        <div class="header">
          <account></account>
        </div>

        <div class="topSide">

          <sidebar></sidebar>

        </div>
        <div class="bottomSide">
             <router-view></router-view>
        </div>



    </div>
</template>

<script>
  import account from '../account/account'
  import sidebar from '../sidebar/sidebar'

    export default {
        name: "mainNav",

      data(){
         return{}
      },
      components:{
          sidebar,
          account
      }
    }
</script>

<style scoped>
 body{
    overflow:scroll;
  }
  .mainNav{
    margin:0;
    width: 1204px;
    heigth: 400px;
    margin:0 auto;
  }
  .header{
    width: 1300px;
    height:50px;
    margin-top: 20px;
  }

  .topSide{
    width:1204px;
    height:55px;
  }
  .bottomSide{
    width: 999px;
    height:900px;
    margin: 50px auto;

  }

</style>
