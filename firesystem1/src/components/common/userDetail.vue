<template>
    <div>
        <el-form :model="form" >
          <el-row>
            <el-col :span="12" >
                <el-form-item label="编号" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12" >
                <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12" >
                <el-form-item label="电话" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12" >
                <el-form-item label="所属基地" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12" >
                <el-form-item label="邮件" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12" >
                <el-form-item label="是否启用" prop="start" :label-width="formLabelWidth">
                  <el-select v-model="form.start" clearable placeholder="请选择" style="width:380px;" autocomplete="off">
                    <el-option v-for="item in options"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="12" >
                <el-form-item label="创建时间" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12" >
                <el-form-item label="修改时间" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24" >
              <el-form-item label="备注" prop="desc" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

        </el-form>
    </div>
</template>

<script>
    export default {
        name: "userDetail",
      data(){
          return{
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: '',
              start:''
            },
            options: [{
              value: '选项1',
              label: '是'
            }, {
              value: '选项2',
              label: '否'
            }],
            value: '',
            formLabelWidth: '120px',
            textarea1: '',

          }
      }
    }
</script>

<style scoped>

</style>
