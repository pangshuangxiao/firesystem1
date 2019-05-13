<template>
   <div class="container">
     <div class="searchBar">
       <input v-model="seaValue" class="formInput" placeholder="请输入关键字">
       <select name="select" id="select" v-model="seaType">
         <option value="opt1">姓名</option>
         <option value="opt2">手机</option>
       </select>
       <el-button type="primary" @click="goSearch()" class="btn">查询</el-button>
     </div>



  <el-row class="button">
    <el-button type="primary">增加</el-button>
    <el-button type="danger">删除</el-button>
  </el-row>
  <el-table
    :header-cell-style="{background:'#eef1f6',color:'#606266',}"
    border
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
         align="center"
         type="selection"
         width="55"
       >
       </el-table-column>
       <el-table-column
         align="center"
         label="管理员编号"
         width="120">
         <template slot-scope="scope">
           <span>{{ scope.row.number}}</span>
         </template>
       </el-table-column>
       <el-table-column
         align="center"
         label="姓名"
         width="200"
       >
         <template slot-scope="scope">
           <el-button type="text" @click="dialogFormVisible">
             {{ scope.row.name }}
           </el-button>
         </template>
       </el-table-column>
        <el-table-column
          align="center"
          label="手机号"
          width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.phoneNumber}}</span>
          </template>
        </el-table-column>

       <el-table-column
         align="center"
         label="操作"
       >
         <template slot-scope="scope">
           <el-button
             size="mini"
             @click="handleEdit(scope.$index, scope.row)">停用</el-button>
           <el-button
             size="mini"
             type="danger"
             @click="handleDelete(scope.$index, scope.row)">删除</el-button>
         </template>
       </el-table-column>
     </el-table>


   </div>
</template>

<script>
    export default {
        name: "baseAdministratorList.vue",
      data(){
        return{
          tableData: [{
            number: '1',
            name: 'xx',
            phoneNumber:"15217445433"
          }, {
            number: '2',
            name: 'xx',
            phoneNumber:"15217445433"
          }, {
            number: '3',
            name: 'xx',
            phoneNumber:"15217445433"
          }],
          multipleSelection: [],
          seaValue:'',

        }
      },
      methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        dialogFormVisible(){
          this.$router.push({path:'/baser/baseDetail/baseAdministratorList/userDetail'})
        }
      }
    }
</script>

<style scoped>
.formInput{
  width:250px;
  height:40px;
  margin:50px 50px 20px 50px;
  float: left;
}
#select{
  width:150px;
  height:40px;
  margin:50px 50px 20px 50px;
  left:200px;
}
.btn{
  height:40px;
  width:100px;
  margin:50px 50px 20px 50px;
}
.button{
  right:-100px;
  margin-bottom:30px;
}
</style>
