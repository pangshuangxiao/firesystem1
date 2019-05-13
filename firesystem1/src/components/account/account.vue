<template>
  <div id="selectNav">
    <div class="account">
      <select name="select" id="select" @change="showAddModal()" v-model="indexId">
        <option v-for="item in index" :value="item.indexId">{{item.name}}</option>
      </select>
    </div>


    <!--新增模态框（修改账户信息）-->
    <div class="modal" v-show="addModal">
       <div class="modalBox1">
         <div class="modalBar">
           <img src="../../../static/X.png" alt="" @click="showAddModal()"/>
           修改账户信息
         </div>
         <div class="modalCon">
           <el-form
             :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             label-width="100px"
             class="demo-ruleForm">
             <el-form-item label="账号" prop="accounts">
               <el-input v-model="ruleForm.accounts"></el-input>
             </el-form-item>
             <el-form-item label="姓名" prop="name">
               <el-input v-model="ruleForm.name"></el-input>
             </el-form-item>
             <el-form-item label="邮箱" prop="mail">
               <el-input v-model="ruleForm.mail"></el-input>
             </el-form-item>
             <el-form-item label="手机号" prop="number">
               <el-input v-model="ruleForm.number"></el-input>
             </el-form-item>
             <el-form-item label="备注" prop="remark">
               <el-input v-model="ruleForm.remark"></el-input>
             </el-form-item>
             <el-form-item label="角色" prop="role">
               <el-input v-model="ruleForm.role"></el-input>
             </el-form-item>
             <el-form-item label="创建人id" prop="creator">
               <el-input v-model="ruleForm.creator"></el-input>
             </el-form-item>

             <el-form-item>
               <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
               <el-button @click="resetForm('ruleForm')">取消</el-button>
             </el-form-item>
           </el-form>

         </div>
       </div>
    </div>
    <!--模态框修改密码-->
    <div class="modal" v-show="addModal2">
      <div class="modalBox2">
        <div class="modalBar">
          <img src="../../../static/X.png" alt="" @click="showAddModal()"/>
          修改账户密码
        </div>
        <div class="modalCon">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm">
            <el-form-item label="旧密码" prop="oldPassword">
              <el-input v-model="ruleForm.oldPassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
              <el-input v-model="ruleForm.newPassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
              <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>
    </div>
  </div>


</template>

<script>

    export default {
        name: "account.vue",
      data(){
        return {
          addModal: false,        // 控制显示隐藏新增模态框
          addModal2:false,
          indexId:'',
          index: [{
            "indexId":1,
            "name": "账户"
          }, {
            "indexId":2,
            "name": "修改账户信息"
          }, {
            "indexId":3,
            "name": "修改密码"
          }, {
            "indexId":4,
            "name": "退出登录"
          }],

          ruleForm: {
            accounts:'', //修改账户信息
            name: '',
            mail:'',
            number:'',
            remark:'',
            role:'',
            creator:'',

            oldPassword:'',//修改密码
            newPassword:''
          },
          rules: {
            //修改账户信息
            accounts: [
              { required: true, message: '请输入账号', trigger: 'blur' },
              { pattern:/^[1][3,4,5,7,8][0-9]{9}$/, message: '请输入正确的账号', trigger: 'blur' }
            ],
            name: [
              { required: true, message: '请输入用户名', trigger: 'blur' }
            ],
            mail: [
              { required: true, message: '请输入邮箱号', trigger: 'change' },
              { pattern:/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/, message: '请输入正确的邮箱号', trigger: 'blur' }
            ],
            number: [
              { required: true, message: '请输入手机号', trigger: 'blur' },
              { pattern:/^[1][3,4,5,7,8][0-9]{9}$/, message: '请输入正确的手机号', trigger: 'blur' }

            ],
            remark: [
              { required: true, message: '请输入备注', trigger: 'blur' }
            ],
            role: [
              { required: true, message: '请输入角色', trigger: 'blur' }
            ],
            creator: [
              { required: true, message: '请输入创建人id', trigger: 'blur' },
              { pattern:/^[1][3,4,5,7,8][0-9]{9}$/, message: '请输入创建人的id', trigger: 'blur'}
            ],

            //修改密码
            oldPassword: [
              { required: true, message: '请输入创建人id', trigger: 'blur' },
            ],
            newPassword: [
              { required: true, message: '请输入创建人id', trigger: 'blur' },
            ],
        }
        }

      },
      methods: {
        //  控制显示隐藏修改用户信息模态框
        showAddModal() {
          if (this.indexId == 2) {
            this.addModal = !this.addModal;
          } else if (this.indexId == 3) {
            this.addModal2 = !this.addModal2;
          }

          // console.log(event.target.value);
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(valid)
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }

</script>

<style scoped>
  @import '../../assets/css/modal.css';
  #select{
    height: 35px;
    font-width:20px;
    text-align: center;
    margin-bottom: 10px;
    float: right;
    border-radius:5px;
  }


</style>
