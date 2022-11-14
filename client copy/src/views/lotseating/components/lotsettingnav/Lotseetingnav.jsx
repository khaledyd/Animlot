import React from 'react'
import Userhomepagenav from '../../../userhomepage/components/userhomepagenav/Userhomepagenav'
import { Link } from 'react-router-dom'

export default function Lotseetingnav() {
  return (
    <div>
      <Link className="link" to={"/"}>
        {" "}
        <Userhomepagenav/>
      </Link>

    </div>
  )
}
