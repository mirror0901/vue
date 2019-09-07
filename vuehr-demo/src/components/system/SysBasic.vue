<template>
  <div style="margin-top: 10px">
    <el-tabs v-model="defaultTab" type="card">
      <el-tab-pane label="部门管理" name="depMana">
        <dep-mana></dep-mana>
      </el-tab-pane>
      <el-tab-pane label="职位管理" name="positionMana">
        <pos-mana state="position"></pos-mana>
      </el-tab-pane>
      <el-tab-pane label="职称管理" name="jobTitleMana">
        <pos-mana state="jobtitle"></pos-mana>
      </el-tab-pane>
      <el-tab-pane label="奖惩管理" name="ecCfg">
        <ec-mana></ec-mana>
      </el-tab-pane>
      <el-tab-pane label="权限组" name="menuRole">
        <menu-role></menu-role>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import MenuRole from './basic/MenuRole'
  import DepMana from './basic/DepMana'
  import ECMana from './basic/ECMana'
  import JobTitleMana from './basic/JobTitleMana'
  import PosMana from './basic/PosMana'

  export default {
    data () {
      return {
        defaultTab: 'depMana'
      }
    },
    methods: {},
    components: {
      'menu-role': MenuRole,
      'dep-mana': DepMana,
      'ec-mana': ECMana,
      'jobtitle-mana': JobTitleMana,
      'pos-mana': PosMana
    }
  }
</script>
