import React from 'react'
import Ccdcontent from '../components/ccdcontent/Ccdcontent'
import Ccdfooter from '../components/ccdfooter/Ccdfooter'
import Ccdheader from '../components/ccdheader/Ccdheader'
import Ccdnav from '../components/ccdnav/Ccdnav'

export default function Ccreator() {
  return (
    <div>
        <Ccdnav/>
        <Ccdheader/>
        <Ccdcontent/>
        <Ccdfooter/>
    </div>
  )
}
