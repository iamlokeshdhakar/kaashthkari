import React from "react"
import "../styles/sideimage.css"
import Image from "next/image"

const SideImage = ({ imgSrc, alignImg }) => {
  return (
    <div className="side-img" style={{ justifyContent: alignImg }}>
      <Image src={imgSrc} width={250} height={100} />
    </div>
  )
}

export default SideImage
