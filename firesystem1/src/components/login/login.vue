<template>
  <div class="content">

    <div class="login">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm"

      >
        <span>智慧消防管理系统</span>
        <el-form-item label="身份" prop="capacity">
          <el-select v-model="ruleForm.capacity" clearable placeholder="请选择"
                     label-width="200px" style="width:300px">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户名" prop="name">
          <el-input  v-model="ruleForm.name" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" style="width:300px"></el-input>
        </el-form-item>

        <el-form-item label="验证码" prop="code">
          <el-input  v-model="ruleForm.code" style="width:300px"></el-input>
        </el-form-item>
        <!--<img src="../../../static/3.png" alt="" />-->
               <!--<input type="text" placeholder='验证码' v-model='code' style='width:160px'/>-->
      <div class="userBox">
        <div v-on:click="cc()" style='display:inline;' >
          <SIdentify @aa='bb' ref="identify" ></SIdentify>
        </div>
        <el-checkbox
          v-model="checked"
          class="rememberme"
        >记住密码</el-checkbox>
      </div>
      <el-form-item>
         <el-button type="primary" @click="submitForm('ruleForm')" :loading="logining" style="width:300px;font-size: 20px;">登录</el-button>

      </el-form-item>
      </el-form>
      </div>
      </div>

</template>

<script>
    import $ from 'jquery'
    import SIdentify from './identify.vue'
    export default {
      name: "login",
      components:{
        SIdentify
      },
      data() {

        return {
          ruleForm: {
            name: '15217445433',
            password: '123456',
            capacity: '管理员',
            code:''
          },
      checked: false,
      logining:false,
      //生成验证码
      identifyCode:'',
      code:'',

      rules: {
        name: [
          { required:true, message:"请输入登录名", trigger: 'blur' }
        ],
        password: [
          { required:true, message:"请输入密码", trigger: 'blur' }
        ],
        capacity: [
          { required:true, message:"请选择身份", trigger: 'blur'}
        ],
        code:[
          { required:true, message:"请输入验证码", trigger: 'blur'}
        ]

      },
      options: [{
        value: '选项1',
        label: '运营方'
      }, {
        value: '选项2',
        label: '管理员'
      }, {
        value: '选项3',
        label: '安全员'
      }],
      value: ''

    };
  },
  methods: {
    // 验证码
    bb(value){
      // 获取子组件的验证码
      this.identifyCode=value
    },
    cc(){
      // 点击刷新验证码
      this.$refs.identify.makeCode('1234567890',4)
    },

    submitForm(event) {
      this.$refs.ruleForm.validate((valid) => {
        if(valid){
          this.logining = true;
          if(this.ruleForm.name === '15217445433' &&
            this.ruleForm.password === '123456' &&
            this.ruleForm.capacity === '管理员' &&
            this.ruleForm.code === this.identifyCode
          ){
            this.logining = false;
            sessionStorage.setItem('user', this.ruleForm.username);
            this.$router.push({path: '/mainNav'});
          }else{
            this.logining = false;
            this.$alert('username or password or code wrong!', 'info', {
              confirmButtonText: 'ok'
            })
          }
        }else{
          console.log('error submit!');
          return false;
        }
      })

      var self = this
      var submitForm = new FormData()
      submitForm.append('account',this.name)
      submitForm.append('password',this.password)

      $.ajax({
        url: '/userlogin',
        type: 'post',
        data: submitForm,
        headers:{

        },
        xhrFields: {
          withCredentials: true
        },
        contentType: false,
        processData: false,
        /*success: function(res) {
          if(res.code === self.global.SUCCESS_CODE) {
            sessionStorage.setItem('access_token',res.result.access_token)
            // sessionStorage.setItem('userId',res.result.loginName)
            sessionStorage.setItem('loginName', res.result.loginName)
          } else {
            self.$Tips2(res.message)
          }
        },*/
       /* error:function(err){
          self.$Tips2(err.responseJSON.message)
        }*/
      })

    },

  }
}
</script>

<style scoped>

  .content {
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:#48d1cc;
  }

  .login {
    width: 450px;
    border: 1px solid #ccc;
    background-color:#ffffff;
  }
  span{
    display: block;
    font-size: 25px;
    padding:50px
  }
  .rememberme {
    margin: 0px 0px 15px;
    /*left:150px;*/
  }
.userBox{
  margin-right: 20px;
  position:relative;
}
  /*.userBox{

  }
code1{
  float:left;

}*/

</style>
