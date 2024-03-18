import styles from '../src/styles/custom.module.css';
import Image from 'next/image';
import Socials from './Socials';

export default function MainScreen() {
  return (
    <>
      <div className={`mainScreen ${styles.alignBox}`}>
        <div className='logo'><Image src='/logo4.png' fill='responsive' alt=''/></div>
        <div className='name'>LANDWOLF</div>
        <div className='subname'>ON SOLANA</div>
        <div className='socials'><Socials wTg={40} hTg={40} wDx={33} hDx={35} wTw={45} hTw={45} sizeLt={34} wBox={56} hBox={55} hR={40} wR={40}/></div>
      </div>

      <style jsx>{`
        .mainScreen {
          height: 1000px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
        }
        
        .logo{
          width: 550px;
          height: 550px;
          border-radius: 100%;
          overflow: hidden;
          margin-top: 50px;
          position: relative;
          margin-left: -10px;
        }

        .name{
          font-size: 7rem;
          font-family: var(--F1);
          background-image: linear-gradient(45deg, #03E1FF, #DC1FFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
          -moz-background-clip: text;
          stroke-width: 3px;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: white;
          line-height: 1;
          margin-top: 10px;
        }

        .subname{
          font-size: 2rem;
          font-family: var(--F1);
          color: white;
          line-height: 1;
        }

        .socials{
          margin-top: 10px;
        }

        @media screen and (max-width: 600px){
          .logo{
            width: 400px;
            height: 400px;
          }

          .name{
            font-size: 5rem;
          }
        }

        @media screen and (max-width: 400px){
          .logo{
            width: 320px;
            height: 320px;
          }
        }
      `}</style>
    </>
  );
}
