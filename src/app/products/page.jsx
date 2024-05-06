"use client"
import "@/styles/products.css"
import { useRef } from "react"

const Produts = () => {
  const scrollRef1 = useRef(null)
  const scrollRef2 = useRef(null)
  const scrollRef3 = useRef(null)
  const scrollRef4 = useRef(null)

  const productJson = [
    {
      heading: `Buyer's Choice`,
      image: [
        "/product-img/bc1.png",
        "/product-img/bc2.png",
        "/product-img/bc3.png",
      ],
      ref: scrollRef1,
    },
    {
      heading: "Decorative",
      image: [
        "/product-img/dc1.png",
        "/product-img/dc2.png",
        "/product-img/dc3.png",
      ],
      ref: scrollRef2,
    },
    {
      heading: "Mythological",
      image: [
        "/product-img/m1.png",
        "/product-img/m2.png",
        "/product-img/m3.png",
      ],
      ref: scrollRef3,
    },
    {
      heading: "Utility",
      image: [
        "/product-img/u1.png",
        "/product-img/u2.png",
        "/product-img/u3.png",
      ],
      ref: scrollRef4,
    },
  ]

  const scrollRight = (ref) => {
    window.scroll({
      behavior: "smooth",
    })
    if (ref.current) {
      ref.current.scrollLeft += 930
    }
  }

  return (
    <div className="products">
      <div className="b-img"></div>
      <div className="items">
        {productJson.map((e) => {
          return (
            <div className="box">
              <h2>{e.heading}</h2>
              <div className="wrapper">
                <div className="card-box" ref={e.ref}>
                  {e.image.map((img) => {
                    return (
                      <>
                        <div className="cards">
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

                <div onClick={() => scrollRight(e.ref)} className="arrow">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 47 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.4252 1.00043L44.4209 48.8264L1.9999 97.9636"
                      stroke="#5C2811"
                      stroke-width="3"
                    />
                    <path
                      d="M2.4252 1.00043L44.4209 48.8264L1.9999 97.9636"
                      stroke="#5C2811"
                      stroke-opacity="0.2"
                      stroke-width="3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Produts
