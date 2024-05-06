"use client"
import "@/styles/products.css"
import { useRef } from "react"

const Produts = () => {
  const scrollRef = useRef(null)

  const scrollRight = () => {
    window.scroll({
      behavior: "smooth",
    })
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 930
    }
  }

  return (
    <div className="products">
      <div className="b-img"></div>
      <div className="items">
        <div className="box">
          <h2>Buyer&apos;s Choice</h2>
          <div className="wrapper">
            <div className="card-box" ref={scrollRef}>
              <div className="cards">
                <div className="card">
                  <img src="/product-img/bc1.png" alt="" />
                </div>
                <div className="card">
                  <img src="/product-img/bc2.png" alt="" />
                </div>
                <div className="card">
                  <img src="/product-img/bc3.png" alt="" />
                </div>
              </div>

              <div className="cards">
                <div className="card">
                  <img src="/product-img/bc1.png" alt="" />
                </div>
                <div className="card">
                  <img src="/product-img/bc2.png" alt="" />
                </div>
                <div className="card">
                  <img src="/product-img/bc3.png" alt="" />
                </div>
              </div>

              <div className="cards">
                <div className="card">
                  <img src="/product-img/bc1.png" alt="" />
                </div>
                <div className="card">
                  <img src="/product-img/bc2.png" alt="" />
                </div>
                <div className="card">
                  <img src="/product-img/bc3.png" alt="" />
                </div>
              </div>
            </div>

            <div onClick={scrollRight} className="arrow">
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
      </div>
    </div>
  )
}

export default Produts
