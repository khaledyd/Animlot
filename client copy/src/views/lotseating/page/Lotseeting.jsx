import React from 'react'
import Lotsettingfooter from '../components/lotsettingfooter/Lotsettingfooter'
import Lotsettingform from '../components/lotsettingform/Lotsettingform'
import Lotseetingnav from '../components/lotsettingnav/Lotseetingnav'

export default function Lotseeting() {
  return (
    <div>
        <Lotseetingnav/>
        <Lotsettingform/>
        <Lotsettingfooter/>
    </div>
  )
}
