import styles from '../src/styles/custom.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className={`navbarContainer ${styles.alignBox}`} id='home'>
        <div className='leftSide'>
          <div className='logo'><Image src='/logo4.png' fill='responsive' alt=''/></div>
          <div className='name'>$WOLF</div>
        </div>
        <div className='midSide'>
          <div className='routers'>
            <Link href='#about'><span>About</span></Link>
            <Link href='#htb'><span>How to Buy</span></Link>
            <Link href='#tokenomics'><span>Tokenomics</span></Link>
            <a href='https://t.me/landwolfcoinsol' target='_BLANK' rel='noreferrer'>Telegram</a>
            <a href='https://x.com/LandWolf1000x' target='_BLANK' rel='noreferrer'>Twitter</a>
          </div>
        </div>

        <div className='rightSide'><a href='https://raydium.io/swap/?outputCurrency=8feZALtSojHuGM7LY2by7ZRpi35gTjUZJmCV74VyGmDD' target='_BLANK' rel='noreferrer'>Buy $WOLF</a></div>
      </div>

      <style jsx>{`
        .navbarContainer {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          height: 100px;
          z-index: 3;
        }

        .leftSide{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          margin-left: 25px;
        }

        .logo{
          width: 70px;
          height: 70px;
          border-radius: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .name{
          font-size: 3rem;
          font-family: var(--F1);
          color: white;
        }

        .midSide .routers{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
          font-family: var(--F1);
          font-size: 2rem;
          color: white;
        }

        .rightSide{
          font-family: var(--F1);
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          border: 1px solid white;
          width: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          margin-right: 25px;
          padding: 5px 0px;
          cursor: pointer;
        }

        @media screen and (max-width: 1000px){
          .midSide .routers{
            display: none;
          }
        }

        @media screen and (max-width: 450px){
          .leftSide{
            margin-left: 5px;
          }

          .rightSide{
            margin-right: 5px;
          }
        }

        
        @media screen and (max-width: 400px){
          .leftSide .logo{
            width: 50px;
            height: 50px;
          }

          .leftSide .name{
            font-size: 2rem;
          }

          .rightSide{
            width: 130px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}
