import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)

export const data = {
  labels: [
    'JS/Jquery/DOM',
    'React/Native',
    'Axios/Https',
    'Build APIs',
    'PHP 7,8',
    'express',
    'angular',
    'git',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [8.5, 9.3, 7, 6, 7.5, 7.75, 3.84, 6.78],
      backgroundColor: 'rgba(0, 160, 255, 0.22)',
      borderColor: 'rgba(0, 50, 255, 0.9)',
      borderWidth: 2,
    },
  ],
}

const Skillmain = () => {
  return <Radar data={data} />
}
export default Skillmain
