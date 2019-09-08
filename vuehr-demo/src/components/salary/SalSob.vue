<template>
  <div></div>
</template>
<script>
  export default {
    data () {
      return {
        dialogVisible: false,
        tableLoading: false,
        index: 0,
        salaries: [],
        multipleSelection: [],
        salary:
          {
            id: '',
            createDate:
              '',
            basicSalary:
              '',
            trafficSalary:
              '',
            lunchSalary:
              '',
            bonus:
              '',
            pensionBase:
              '',
            pensionPer:
              '',
            medicalBase:
              '',
            medicalPer:
              '',
            accumulationFundBase:
              '',
            accumulationFundPer:
              ''
          }
      }
    }
  }
</script>
