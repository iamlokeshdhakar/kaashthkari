"use client"
import "@/styles/products.css"
import { useRef } from "react"

const Produts = () => {
  const productJson = [
    {
      heading: `Buyer's Choice`,
      image: [
        "/product-img/dc3.png",
        "/product-img/dc2.png",
        "/product-img/m1.png",
        "/product-img/u1.png",
        "/product-img/bc1.png",
        "/product-img/bc2.png",
        "/product-img/bc3.png",
      ],
    },
    {
      heading: "Decorative",
      image: [
        "/product-img/dc1.png",
        "/product-img/dc2.png",
        "/product-img/dc3.png",
      ],
    },
    {
      heading: "Mythological",
      image: [
        "/product-img/m1.png",
        "/product-img/m2.png",
        "/product-img/m3.png",
      ],
    },
    {
      heading: "Utility",
      image: [
        "/product-img/u1.png",
        "/product-img/u2.png",
        "/product-img/u3.png",
      ],
    },
  ]

  return (
    <div className="products">
      <div className="b-img">
        <img src="/banaras-img.png" alt="" />
      </div>
      {/* <div className="items">
        {productJson.map((e, k) => {
          return (
            <div className="box" key={k}>
              <h2>{e.heading}</h2>
              <div className="wrapper">
                <div className="card-box">
                  {e.image.map((img, kk) => {
                    return (
                      <>
                        <div className="cards" key={kk}>
                          <div className="card">
                            <img src={img} alt="" />
                          </div>
                          <div className="card">
                            <img src={img} alt="" />
                          </div>
                          <div className="card">
                            <img src={img} alt="" />
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div> */}
      {productJson.map((item, ee) => {
        return (
          <div className="it-box" key={ee}>
            <h2>{item.heading}</h2>
            <div className="card-img-box">
              {item.image.map((img, ie) => {
                return (
                  <div className="card-img" key={ie}>
                    <img src={img} alt="" />
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Produts
