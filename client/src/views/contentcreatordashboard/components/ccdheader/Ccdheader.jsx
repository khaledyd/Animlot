import React from 'react'

export default function Ccdheader() {
  return (
    <div className='uploadfile'>
      <form>
          <input type ="file" id = "myFile" name = "filename"/>
          <input type="submit"/>
          <span className="singup-span">First Name</span>
          <input className="singup-email" type="text" />
          <div className='type-of-the-question'>
              <button>what is ?</button>
              <button>how it works?</button>
          </div>
          <button>Upload</button>
      </form>
    </div>
  )
}
