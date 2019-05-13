<template>
  <div>
    <el-row class="button" >
      <el-button type="primary" @click.prevent="addBase">增加</el-button>
      <el-button type="danger"  @click.prevent="deleteBase">删除</el-button>
    </el-row>
    <el-table
      border
      :data="tableData"
      ref="table"
      style="width: 100%; "
      @selection-change="handleSelectionChange">
      <el-table-column
        align="center"
        class="tab"
        type="selection"
        width="88"
      >
      </el-table-column>
      <el-table-column
        align="center"
        class="tab"
        label="基地编号"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.number}}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        class="tab"
        label="基地名称"
        width="360"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="baseDetail">
            {{ scope.row.name }}
          </el-button>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        label="操作"
        class="tab"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">停用</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index,tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>

</template>

<script>
  export default {
    name: "baser",
    data(){
      return{
        tableData: [{
          number: '1',
          name: 'xx基地',
        }, {
          number: '2',
          name: 'xx基地',
        }, {
          number: '3',
          name: 'xx基地',
        }],
        multipleSelection: [],
        value: '',
        textarea1: '',


      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        row.splice(index, 1);

        console.log(index, row);

      },
      //获取表格选中的数据
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      baseDetail(){
        this.$router.push({path:'/baser/baseDetail'});
      },
      //增加行
      addBase(){
        this.$router.push({path:'baser/addBase'});
        var list={
          number:this.number,
          name:this.name
        };
        console.log(1);
          this.tableData.unshift(list)
        },
      //删除选中的行
      deleteBase(){
         for(let i=0; i<this.multipleSelection.length;i++){

           let val = this.multipleSelection;
           //获取选中行的索引的方法
           //遍历表格中tableData数据和选中的val数据，比较他们的rowNum,相等则输出选中行的索引
           //rowNum的作用主要是为了让每一行都有一个唯一的数据，可以根据个人的需求从后台传入特定的数据
           val.forEach((val,index) => {
             this.tableData.forEach((v,i) => {
               if(val.number  == v.number){
                 //i为选中的索引
                 this.tableData.splice(i,1);
                 //删除完数据之后清除勾选框
                 this.$refs.table.clearSelection();

               }
             })
           })
         }
      }

    }

  }
</script>

<style scoped>
  .button{
    float:right;
    margin:50px;
  }
  /*body .el-table th.gutter{
    display: table-cell!important;
  }*/

</style>
