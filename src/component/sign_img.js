import React from 'react'
import imgPict from '../image/imahe.jpg'

const sign_img = () => {
  return (
    <div className="rigth_data" style={{width:"100%"}}>
        <div className="sign_img mt-3">
            <img src={imgPict} style={{maxWidth:400}} alt="" />
        </div>
    </div>

  )
}

export default sign_img
