<template>
  <BarChart
    :chart-data="simpleData"
    :options="options"
    :styles="chartStyles"
  />
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import { BarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const props = defineProps<{
  labels: Array<string | number>,
  data: Array<number>,
  selected: Array<string | number>
}>()

const emit = defineEmits({
  click: null
})

const chartStyles = computed(() => ({
  height: '300px',
  position: 'relative'
}))

const simpleData = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      data: props.data,
      backgroundColor: props.labels.map(s => props.selected.includes(s) ? '#004cc7' : '#609eff'),
      maxBarThickness: 40
    }
  ]
}))

const options = {
  indexAxis: 'y',
  maintainAspectRatio: false,
  onClick: (e: any, arr: any[]) => {
    if (!arr.length) return
    emit('click', arr[0].index)
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: '#efefef',
      titleColor: 'dimgray',
      bodyColor: 'black',
      callbacks: {
        beforeBody: function (tooltipItem: any[]) {
          const value = tooltipItem[0].formattedValue
          tooltipItem[0].formattedValue = ` ${value}`
        }
      }
    }
  },
  scales: {
    y: {
      grid: {
        color: 'transparent'
      }
    }
  }
}
</script>

<style scoped>
canvas {
  display: flex;
}
</style>
