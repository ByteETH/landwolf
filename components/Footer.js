import styles from "../src/styles/custom.module.css";
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className="footerContainer">
      <div className="customShapeDividerTopFirstSection">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shapeFill"
            ></path>
          </svg>
        </div>
      <div className="gradiantBg">
            </div>
        <div className={`footerAlign ${styles.alignBox}`}>
          <div className='title'><span >$WOLF</span></div>
          <div className='socialsContainer'>
          <a href="https://t.me/#" target="_BLANK" rel="noreferrer">
            <div className='socialBox'>
              <Image src="/telegram2.png" width="50" height="50" alt="" />
            </div>
          </a>
          <a
            href="https://x.com/#"
            target="_BLANK"
            rel="noreferrer"
          >
            <div className='socialBox'>
              <Image src="/x2.png" width="60" height="60" alt="" />
            </div>
          </a>
          <a
            href="https://dexscreener.com/solana/"
            target="_BLANK"
            rel="noreferrer"
          >
            <div className='socialBox'>
              <Image
                src="/dexscreener.png"
                width="60"
                height="60"
                alt=""
              />
            </div>
          </a>
					<a
            href="https://www.dextools.io/app/es/solana/pair-explorer/"
            target="_BLANK"
            rel="noreferrer"
          >
            <div className='socialBox'>
              <Image
                src="/dx.png"
                width="45"
                height="50"
                alt=""
              />
            </div>
          </a>
					<a
            href="https://raydium.io/swap/?outputCurrency="
            target="_BLANK"
            rel="noreferrer"
          >
            <div className='socialBox'>
              <Image
                src="/raydium.webp"
                width="50"
                height="50"
                alt=""
              />
            </div>
          </a>
					
        </div>
        </div>
      </div>

      <style jsx>{`
        .footerContainer {
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          padding-bottom: 150px;
          position: relative;
        }

        .footerAlign {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .title {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          z-index: 2;
          margin-bottom: 60px;
          margin-top: 130px;
          z-index: 2;
          color: white;
        }

        .title span{
          font-size: 5rem;
          font-family: var(--F1);
          color: white;
        }

        .socialsContainer {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
					z-index: 2;
          margin-top: -30px;
        }

        .socialsContainer .socialBox {
          width: 70px;
          height: 70px;
          border-radius: 5px;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }

        .socialBox:hover {
          margin-top: -10px;
          transition: 0.2s ease-out;
          cursor: pointer;
        }

        .gradiantBg {
          position: absolute;
          width: 50%;
          height: 50%;
          background: linear-gradient(90deg, #fff, #fff, #fff, #fff);
          filter: blur(200px);
          -webkit-filter: blur(200px);
          z-index: 1;
        }

        .customShapeDividerTopFirstSection {
          z-index: 1;
          position: absolute;
          top: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(0deg);
        }

        .customShapeDividerTopFirstSection svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 100px;
        }

        .customShapeDividerTopFirstSection .shapeFill {
          fill: #EFEFEF;
        }

        @media screen and (max-width: 750px){

				.socialsContainer {
            gap: 40px;
          }

        }

				@media screen and (max-width: 500px){
					.socialsContainer{
						gap: 10px;
						flex-wrap: wrap;
					}

					.socialsContainer .socialBox {
						width: 60px;
						height: 60px;
					}
				}
      `}</style>
    </>
  );
}