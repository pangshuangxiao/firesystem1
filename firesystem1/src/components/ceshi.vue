<!--
<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <el-table size="mini" :data="master_user.data" border style="width: 100%" highlight-current-row>
          <el-table-column type="index"></el-table-column>
          <el-table-column v-for="(item,index) in master_user.columns" :label="item.label" :prop="item.prop" :width="item.width">
            <template slot-scope="scope">
             <span v-if="scope.row.isSet">
               <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel[item.prop]">
               </el-input>
             </span>
              <span v-else>{{scope.row[item.prop]}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="">
            <template slot-scope="scope">
             <span class="el-tag el-tag&#45;&#45;success el-tag&#45;&#45;mini" style="cursor: pointer;" @click.stop="saveRow(scope.row,scope.$index)">
               确定
             </span>
              <span class="el-tag el-tag&#45;&#45;primary el-tag&#45;&#45;mini" style="cursor: pointer;" @click="editRow(scope.row,scope.$index)">
               编辑
             </span>
              <span class="el-tag el-tag&#45;&#45;danger el-tag&#45;&#45;mini" style="cursor: pointer;" @click="deleteRow(scope.$index,master_user.data)">
               删除
             </span>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="24">
        <div class="el-table-add-row" style="width: 99.2%;" @click="add()"><span>+ 添加</span></div>
      </el-col>
    </el-row>
    &lt;!&ndash;<span>{{master_user.data}}</span>&ndash;&gt;
  </div>
</template>

<script>
  export default {
    name: 'ceshi',
    data() {
      return {
        master_user: {
          sel: null, //选中行
          columns: [{
            prop: "type",
            label: "远程类型",
            width: 120
          },
            {
              prop: "addport",
              label: "连接地址",
              width: 150
            },
            {
              prop: "user",
              label: "登录用户",
              width: 120
            },
            {
              prop: "pwd",
              label: "登录密码",
              width: 220
            },
            {
              prop: "info",
              label: "其他信息"
            }
          ],
          data: [],
        },
      }
    },
    methods: {
      add() {
        for (let i of this.master_user.data) {
          if (i.isSet) return this.$message.warning("请先保存当前编辑项");
        }
        let j = {
          "type": "",
          "addport": "",
          "user": "",
          "pwd": "",
          "info": "",
          "isSet": true,
        };
        this.master_user.data.push(j);
        this.master_user.sel = JSON.parse(JSON.stringify(j));
      },
      saveRow(row, index) { //保存
        let data = JSON.parse(JSON.stringify(this.master_user.sel));
        for (let k in data) {
          row[k] = data[k] //将sel里面的value赋值给这一行。ps(for....in..)的妙用，细心的同学发现这里我并没有循环对象row
        }
        row.isSet = false;
      },
      editRow(row) { //编辑
        for (let i of this.master_user.data) {
          if (i.isSet) return this.$message.warning("请先保存当前编辑11项");
        }
        this.master_user.sel = row
        row.isSet = true
      },
      deleteRow(index, rows) { //删除
        console.log(index, rows)
        rows.splice(index, 1)
      }
    },
    components: {}
  }
</script>

<style>
  .el-table-add-row {
    margin-top: 10px;
    width: 100%;
    height: 34px;
    border: 1px dashed #c1c1cd;
    border-radius: 3px;
    cursor: pointer;
    justify-content: center;
    display: flex;
    line-height: 34px;
  }
</style>
-->


<template>
  <div class="tableDate">
    <div class="button" style="width:3%;float:right;">
      <P><el-button class="el-icon-plus" @click.prevent="addRow()"></el-button></P>
      <p><el-button class="el-icon-minus" @click.prevent="delData()"></el-button></p>
    </div>
    <div class="table">
      <el-table
        :data="tableData"
        ref="table"
        tooltip-effect="dark"
        border
        stripe
        style="width: 95%"
        @selection-change='selectRow'>
        <el-table-column type="selection" width="45" align="center"></el-table-column>
        <el-table-column label="序号"  type="index" width="60" align="center"></el-table-column>
        <el-table-column  label="地址" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.address"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="男猪脚">
          <template slot-scope="scope">
            <el-input v-model="scope.row.name"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="女猪脚">
          <template slot-scope="scope">
            <el-input v-model="scope.row.loveer"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="天气">
          <template slot-scope="scope">
            <el-input v-model="scope.row.weather"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="电话">
          <template slot-scope="scope">
            <el-input v-model="scope.row.phone"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="牵手日">
          <template slot-scope="scope">
            <el-input v-model="scope.row.date"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="纪念日">
          <template slot-scope="scope">
            <el-input v-model="scope.row.mdate"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        tableData: [{
          rowNum: 1,
          address: '西安城墙',
          name: '小哥',
          weather: '下雪',
          phone: '0771-5201314',
          date: '2016-11-22',
          mdate: '2018-04-10',
          loveer: '甜甜圈'
        }, {
          rowNum: 2,
          address: '西安城墙',
          name: '小哥',
          weather: '下雪',
          phone: '0771-5201314',
          date: '2016-11-22',
          mdate: '2018-04-10',
          loveer: '甜甜圈'
        }, {
          rowNum: 3,
          address: '西安城墙',
          name: '小哥',
          weather: '下雪',
          phone: '0771-5201314',
          date: '2016-11-22',
          mdate: '2018-04-10',
          loveer: '甜甜圈'
        }, {
          rowNum: 4,
          address: '西安城墙',
          name: '小哥',
          weather: '下雪',
          phone: '0771-5201314',
          date: '2016-11-22',
          mdate: '2018-04-10',
          loveer: '甜甜圈'
        }, {
          rowNum: 5,
          address: '西安城墙',
          name: '小哥',
          weather: '下雪',
          phone: '0771-5201314',
          date: '2016-11-22',
          mdate: '2018-04-10',
          loveer: '甜甜圈'
        }],
        selectlistRow: []
      }
    },
    methods: {
      // 获取表格选中时的数据
      selectRow (val) {
        this.selectlistRow = val
      },
      // 增加行
      addRow () {
        var list = {
          rowNum: '',
          address: this.address,
          name: this.name,
          weather: this.weather,
          phone: this.phone,
          date: this.date,
          mdate: this.mdate,
          loveer: this.loveer}
        this.tableData.unshift(list)
      },
      // 删除方法
      // 删除选中行
      delData () {
        for (let i = 0; i < this.selectlistRow.length; i++) {
          let val = this.selectlistRow
          // 获取选中行的索引的方法
          // 遍历表格中tableData数据和选中的val数据，比较它们的rowNum,相等则输出选中行的索引
          // rowNum的作用主要是为了让每一行有一个唯一的数据，方便比较，可以根据个人的开发需求从后台传入特定的数据
          val.forEach((val, index) => {
            this.tableData.forEach((v, i) => {
              if (val.rowNum === v.rowNum) {
                // i 为选中的索引
                this.tableData.splice(i, 1)
              }
            })
          })
        }
        // 删除完数据之后清除勾选框
        this.$refs.tableData.clearSelection()
      }
    }
  }
</script>
