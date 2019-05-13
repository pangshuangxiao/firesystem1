<template>
  <div class="container" >
    <div class="sideBar">
      <router-link  tag="div" to="/baser" class="barBox">
        <p>基地管理</p>
      </router-link>
      <router-link tag="div" to="/administrator" class="barBox">
         <p>管理员管理</p>
      </router-link>
      <router-link tag="div" to="/safety" class="barBox">
        <p>安全员管理</p>
      </router-link>
      <router-link tag="div" to="/task" class="barBox">
        <p>任务分配</p>
      </router-link>
    </div>
  </div>


</template>

<script>
    export default {
        name: "sidebar",
      data() {
        return {

        };
      },
      methods: {



      }
    }
</script>

<style scoped>
  .sideBar{
    width:1204px;
    height:50px;
    background:rgba(255,255,255,1);
    box-shadow: 0 0 10px 3px rgb(225,226,229);
    margin: 0 auto;
    position: relative;
  }
  .barBox{
    width:300px;
    height:50px;
    border-radius:5px;
    border-right:1px solid rgb(239,238,243);
    margin:0 auto;
    cursor: pointer;
    float: left;
  }
  .router-link-active{
    background:rgba(239,238,243,1);
  }

</style>
