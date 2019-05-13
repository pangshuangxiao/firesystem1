<template>
   <div class="container">

      <el-form :model="form" label-width="100%">
            <el-form-item label="基地编号" :label-width="formLabelWidth">
              <el-input v-model="form.number" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="基地名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="基地地址" class="address" :label-width="formLabelWidth">
              <el-input v-model="form.address"  autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="负责人" :label-width="formLabelWidth">
              <el-input v-model="form.charge" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="负责人电话" :label-width="formLabelWidth">
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

            <el-form-item label="创建时间" :label-width="formLabelWidth">
              <el-input v-model="form.time" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="修改时间" :label-width="formLabelWidth">
              <el-input v-model="form.newTime" autocomplete="off"></el-input>
            </el-form-item>

          <el-form-item label="备注" prop="desc" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-link  @click="baseAdministratorList" style="font-size: 25px;" >查看该基地的基地管理员</el-link>
          <el-button type="primary" @click="baseAdministratorList" style="float:right;">确定修改</el-button>

      </el-form>

   </div>
</template>

<script>
    export default {
        name: "baseDetail",
      data(){
        return{

          form: {
            name: '',
            number:'',
            address:'',
            charge:'',
            phone:'',
            start:'',
            time:'',
            newTime:'',
            desc: '',
            region: '',
            date1: '',
            date2: '',
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
          value: '',
          formLabelWidth: '100px',
        }
      },
      methods: {
        baseAdministratorList(){
          this.$router.push({path: '/baser/baseDetail/baseAdministratorList'});
        },
      }

    }
</script>

<style scoped>
.container{
  width:600px;
  margin:50px;
}
</style>
