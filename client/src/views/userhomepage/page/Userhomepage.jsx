import React from 'react'
import Userhomepagefooter from '../components/userhomepagefooter/Userhomepagefooter'
import Userhomepageheader from '../components/userhomepageheader/Userhomepageheader'
import Userhomepageinfromation from '../components/userhomepageinfromation/Userhomepageinfromation'
import Userhomepagenav from '../components/userhomepagenav/Userhomepagenav'

export default function Userhomepage() {
  return (
    <div>
    <Userhomepagenav/>
    <Userhomepageheader/>
    <Userhomepageinfromation/>
    <Userhomepagefooter/>
    </div>
  )
}
