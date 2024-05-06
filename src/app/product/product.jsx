import Image from "next/image";
import React from "react";
import "../../styles/product.css";

const product = () => {
  return (
    <div className="product">
      <div className="product-img"></div>

      {/* Raw material */}
      <div className="raw-material">
        <h1>RAW MATERIAL</h1>

        <div className="materials">
          <div className="materials-dets">
            <Image src={"/kaimawood.png"} width={300} height={200} />
            <h5>Kaima Wood</h5>
          </div>
          <div className="materials-dets">
            <Image src={"/feviKwik.png"} width={60} height={200} />
            <h5>Fevi Kwik</h5>
          </div>
          <div className="materials-dets">
            <Image src={"/sheesham.png"} width={250} height={150} />
            <h5>Sheesham</h5>
          </div>
          <div className="materials-dets">
            <Image src={"/laster.png"} width={60} height={200} />
            <h5>Laster</h5>
          </div>
        </div>
      </div>

      {/* Tools  */}
      <div className="tools">
        <h1>TOOLS</h1>

        <div className="tools-left">
          <Image src={"/tool1.png"} height={700} width={900} />
        </div>

        <div className="tools-right">
            <div className="righttool-img"></div>
        </div>
      </div>
    </div>
  );
};

export default product;
