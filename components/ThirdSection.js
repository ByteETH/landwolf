import Image from "next/image";
import styles from '../src/styles/custom.module.css';

export default function ThirdSection() {
  return (
    <>
      <div className="thirdSection" id='tokenomics'>

        <div className={'title'} data-aos="zoom-in"><span>Tokenomics</span></div>
        <div className={`tknAlign ${styles.alignBox}`}>

          <div className="bodyTokenomics">
          <div className="leftSide">
            <div className="imgContainer"><Image src='/logo4.png' alt='' fill='responsive'/></div>
          </div>
          <div className="rightSide">
            <div className="boxTxt">
              <span>Total Supply: 100.000.000</span>
            </div>
            <div className="boxTxt">
              <span>Chain: SOLANA</span>
            </div>
            <div className="boxTxt">
              <span>Symbol: $WOLF</span>
            </div>
            <div className="boxTxt lastBox">
              <span>Total Supply: 1 Billion</span>
              <span>0/0 TAX</span>
              <span>Liquidity Burned</span>
              <span>Ownership Revoked</span>
            </div>
          </div>
        </div>
        </div>
      </div>

      <style jsx>{`
        .thirdSection {
          width: 100%;
          min-height: 550px;
          background-color: #efefef;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          position: relative;
          margin-top: 100px;
          padding-bottom: 100px;
        }

        .customShape {
            position: absolute;
            top: -105px;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
        }

        .customShape svg {
            position: relative;
            display: block;
            width: calc(150% + 1.3px);
            height: 106px;
            transform: rotateX(180deg);
        }

        .customShape .shapeFill {
            fill: #efefef;
        }

        .title{
          width: 100%;
          height: min-content;
          padding: 20px;
          font-size: 6rem;
          letter-spacing: 3px;
          font-family: var(--F1), 'sans-serif';
          color: rgb(236,200,14);
          margin-top: 20px;
          background-image: linear-gradient(45deg, #03E1FF, #DC1FFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
          -moz-background-clip: text;
          stroke-width: 3px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: black;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tknAlign {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }


        .bodyTokenomics {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 100px;
          margin-top: 50px;
        }

        .imgContainer{
          width: 500px;
          height: 500px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .rightSide {
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          gap: 20px;
          margin-top: 0px;
        }

        .boxTxt {
          border: 2px solid rgba(0, 0, 0, 0.7);
          padding: 10px;
          border-radius: 10px;
          font-family: var(--F1);
          font-size: 1.5rem;
          font-weight: bold;
          color: black;
          padding-left: 20px;
          padding-right: 20px;
        }

        .lastBox {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
        }

        @media screen and (max-width: 1000px){

          .title{
            margin-top: -90px;
          }
          .bodyTokenomics{
            flex-direction: column;
          }

          .rightSide{
            justify-content: center;
            align-items: center;
            margin-top: -50px;
          }

          .boxTxt{
            width: 350px;
            text-align: center;
          }

          .lastBox{
            align-items: center;
          }
        }

        @media screen and (max-width: 550px){
          .title span{
            font-size: 3.5rem;
          }
        }

        @media screen and (max-width: 500px){
          .imgContainer{
            width: 400px;
            height: 400px;
          }
        }

        
        @media screen and (max-width: 400px){
          .imgContainer{
            width: 350px;
            height: 350px;
          }
        }

        
      `}</style>
    </>
  );
}