<template>
    <input id="s-canvas" v-model='identifyCode' readonly />
</template>
<script>
  export default{
    name: 'SIdentify',
    props: {
      // identifyCode: {
      //   type: String,
      //   default: '1234'
      // },
      // identifyCodes: {
      //   type: String,
      //   default: '1234567890'
      // },
    },
    data(){
      return{
        identifyCode:'',
        identifyCodes:'1234567890'
      }
    },
    methods:{
        // 生成一个随机数
        randomNum (min, max) {
          return Math.floor(Math.random() * (max - min) + min)
        },
        // 生成验证码
        makeCode(o, l) {
            this.identifyCode=''
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                  this.randomNum(0, this.identifyCodes.length)
                ];
            }
            this.$emit('aa',this.identifyCode)
        },
    },
    mounted () {
      this.makeCode(this.identifyCodes,4)
    }
  }
</script>
<style type="text/css">
  #s-canvas{
    width: 90px;
    height: 45px;
    background-color: #999; 
    color:#fff;
    padding:0;
    font-size: 26px;
    text-align: center;
    letter-spacing:2px;
    float: right;
    border-radius:3px;
    cursor:pointer;
  }
</style>