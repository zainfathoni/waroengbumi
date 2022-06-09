import * as React from 'react'
import { Calendar } from '../components/calendar'

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Waroeng Bumi</h1>
      <Calendar />
    </div>
  )
}
