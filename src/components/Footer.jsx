import React from "react";
import "../styles/footer.css";
import footerimg from "../../public/footerimg.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <div className="ani">
      <Image src={'/ani1.gif'} width={120} height={80}/>
      <Image src={'/ani2.gif'} width={120} height={80}/>
      <Image src={'/ani3.gif'} width={120} height={80}/>
      <Image src={'/ani4.gif'} width={120} height={80}/>
      <Image src={'/ani1.gif'} width={120} height={80}/>
      <Image src={'/ani2.gif'} width={120} height={80}/>
      <Image src={'/ani3.gif'} width={120} height={80}/>
      <Image src={'/ani4.gif'} width={120} height={80}/>
    </div>
    <div className="footer">
      <div className="f-img">
        
      </div>

      <div className="details">
        <div className="policy">
          <h2>Our Policy</h2>
          <h5>
            Certification and
            <br /> Quality Control
          </h5>
          <h5>Privacy and Policy</h5>
          <h5>Shipping Policy</h5>
          <h5>Return Policy</h5>
          <h5>T & C</h5>
        </div>

        <div className="contact-us">
          <h2>Contact us</h2>
          <h5>+91 7454971819</h5>

          <div className="social-links">
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
              </svg>
            </div>

            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path>
              </svg>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
              </svg>
            </div>

            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
              </svg>
            </div>
          </div>

          <div className="logo">
            <svg
              width="fit-content"
              height="100px"
              viewBox="0 0 90 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="90" height="67" fill="url(#pattern0_362_88)" />
              <defs>
                <pattern
                  id="pattern0_362_88"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_362_88"
                    transform="matrix(0.00341297 0 0 0.00458459 0 -0.137257)"
                  />
                </pattern>
                <image
                  id="image0_362_88"
                  width="293"
                  height="278"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Footer;
