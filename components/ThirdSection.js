import Image from "next/image";
import styles from '../src/styles/custom.module.css';

export default function ThirdSection() {
  return (
    <>
      <div className="thirdSection" id='tokenomics'>
      <div className="customShape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shapeFill"></path>
        </svg>
        </div>
        <div className="customShape2">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shapeFill"></path>
        </svg>
        </div>
        <div className={'title'} data-aos="zoom-in"><span>TOKENOMICS</span></div>
        <div className={`tknAlign ${styles.alignBox}`}>

          <div className="bodyTokenomics">
          <div className="leftSide">
            <div className="imgContainer"><Image src='/about.png' alt='' fill='responsive'/></div>
          </div>
          <div className="rightSide">
            <div className="boxTxt">
              <span>Total Supply: 469T,69</span>
            </div>
            <div className="boxTxt">
              <span>Chain: ETHEREUM</span>
            </div>
            <div className="boxTxt">
              <span>Symbol: $PIPI</span>
            </div>
            <div className="boxTxt lastBox">
              <span>Total Supply: 469,69 Trillions</span>
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
          background-color: #FFFDF6;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          position: relative;
          margin-top: 100px;
          padding-bottom: 100px;
        }


        .title{
          width: 100%;
          height: min-content;
          padding: 20px;
          font-size: 6rem;
          letter-spacing: 3px;
          font-family: var(--F1), 'sans-serif';
          margin-top: 20px;
          color: #4d9440;
          display: flex;
          align-items: center;
          justify-content: center;
          text-shadow: 0px 0px 3px #000;
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
          width: 350px;
          height: 400px;
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
          border: 2px solid #4d9440;
          padding: 10px;
          border-radius: 10px;
          font-family: var(--F1);
          font-size: 1.5rem;
          font-weight: bold;
          color: #4d9440;
          padding-left: 20px;
          padding-right: 20px;
        }

        .lastBox {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
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
          width: calc(150% + 25px);
          height: 106px;
          transform: rotateX(180deg);
        }

        .customShape .shapeFill {
            fill: #FFFDF6;
        }

        .customShape2 {
            position: absolute;
            bottom: -106px;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
        }

        .customShape2 svg {
          position: relative;
          display: block;
          width: calc(150% + 2500px);
          height: 106px;
        }

        .customShape2 .shapeFill {
            fill: #FFFDF6;
        }

        @media screen and (max-width: 1000px){

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
            font-size: 5rem;
          }
        }


        
        @media screen and (max-width: 400px){
          .imgContainer{
            width: 330px;
          }

          .title span{
            font-size: 4.5rem;
          }
        }
        

        
      `}</style>
    </>
  );
}