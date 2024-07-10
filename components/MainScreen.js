import styles from '../src/styles/custom.module.css';
import Image from 'next/image';
import Socials from './Socials';

export default function MainScreen() {
  return (
    <>
      <div className={`mainScreen ${styles.alignBox}`}>
        <div className='logo'>
          <Image src='/logo.png' fill='responsive' alt=''/>
        </div>
        <div className='name'>$PiPi</div>
        <div className='socials'><Socials wTg={40} hTg={40} wDx={33} hDx={35} wTw={45} hTw={45} sizeLt={34} wBox={56} hBox={55} hR={40} wR={40}/></div>
      </div>

      <style jsx>{`
        .mainScreen {
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          padding-bottom: 100px;
        }
        
        .logo{
          width: 550px;
          height: 550px;
          border-radius: 100%;
          overflow: hidden;
          margin-top: 50px;
          position: relative;
          margin-left: -10px;
          z-index: 2;
        }

        .name{
          font-size: 7rem;
          font-family: var(--F1);
          line-height: 1;
          margin-top: 10px;
          z-index: 2;
        }


        .socials{
          margin-top: 10px;
          z-index: 2;
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
