import React from 'react'
import Singlelotcontent from '../components/singlelotcontent/Singlelotcontent'
import Singlelotfooter from '../components/singlelotfooter/Singlelotfooter'
import Singlelotnav from '../components/singlelotnav/Singlelotnav'

export default function Singlelot() {
  return (
    <div>
        <Singlelotnav/>
        <Singlelotcontent/>
        <Singlelotfooter/>
        
    </div>
    
  )
}
