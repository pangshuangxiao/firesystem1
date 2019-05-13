<template>
  <div class="container">

    <el-form
      :model="form"
      label-width="100%"
      :rules="rules"
      ref="form"
    >
      <el-form-item label="基地名称" prop="name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="基地地址" prop="address" class="address" :label-width="formLabelWidth">
        <el-input v-model="form.address"  autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="负责人" prop="charge" :label-width="formLabelWidth">
        <el-input v-model="form.charge" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="负责人电话" prop="phone" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="是否启用" prop="start" :label-width="formLabelWidth">
        <el-select v-model="form.start" clearable placeholder="请选择" style="width:500px;" autocomplete="off">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注" prop="desc" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addItemBase('')">确定修改</el-button>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>
    export default {
        name: "addBase",
      data() {
        return {

          form: {
            name: '',
            address:'',
            charge:'',
            phone:'',
            desc: '',
            start: '',
            // date1: '',
            // date2: '',
            delivery: false,
            type: [],
            resource: '',

          },
          options: [{
            value: '选项1',
            label: '是'
          }, {
            value: '选项2',
            label: '否'
          }],
          rules: {
            name: [
              {required: true, message: "请输入基地名称", trigger: 'blur'}
            ],
            address: [
              {required: true, message: "请输入基地地址 ", trigger: 'blur'}
            ],
            charge: [
              {required: true, message: "请输入负责人", trigger: 'blur'}
            ],
            phone: [
              {required: true, message: "请输入负责人电话", trigger: 'blur'},
              {pattern: /^[1][3,4,5,7,8][0-9]{9}$/, message: '请输入正确的手机号', trigger: 'blur'}
            ],
            start: [
              {required: true, message: "请选择是否启用", trigger: 'blur'}
            ],
            desc: [
              {required: true, message: "请输入备注", trigger: 'blur'}
            ],
          },
          value: '',
          formLabelWidth: '100px',
          }
        },
        methods:{
          addItemBase(){
            var self = this
            var addItemBase = new FormData()
              this.$refs.form.validate((valid) => {
                if (valid) {
                  console.log(valid)
                  this.$router.push({path: '/baser'});
                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
            addItemBase.append('name',this.name)
            addItemBase.append('address',this.address)
            addItemBase.append('charge',this.charge)
            addItemBase.append('phone',this.phone)
            addItemBase.append('start',this.start)
            addItemBase.append('desc',this.desc)



          }

        }

      }
</script>

<style scoped>
  .container{
    width:600px;
    margin:50px;
  }
</style>
