import Image from 'next/image';

export default function FirstSection(){

  return(
    <>

    <div className={'firstSectionBody'} id='about'>
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
    <div className={'firstSectionAlign'}>
      <div className={'leftSide'}>
        <div className={'imgContainer'}><Image src='/about2.png' fill='responsive' alt=''/></div>
      </div>
      <div className={'rightSide'}>
        <div className={'title'}><span>WHAT IS LANDWOLF</span></div>
        <div className={'description'}>
          <span>
          {`Solana people are into Landwolf, not frogs.`}
          </span>
          <span>
            {`Since being established as AVAX’s mascot in 2021 however; Landwolf has never been launched on Solana chain or given the proper run this absolute chad deserves; that is, until now.`}
          </span>
          <span>
            Join to our community on telegram and enjoy the ride
          </span>
        </div>
      </div>
    </div>
    </div>

    <style jsx>{`

    .firstSectionContainer span{
      color: white;
    }

    .firstSectionBody{
      width: 100%;
      min-height: 550px;
      background-color: #D035FA;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
    }

    .firstSectionAlign{
      width: 70%;
      height: 450px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .firstSectionAlign .leftSide{
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: relative;
    }

    .firstSectionAlign .leftSide .imgContainer{
      position: relative;
      width: 550px;
      height: 350px;
      background-color: black;
      border-radius: 10px;
      overflow: hidden;
    }

    .leftSide .imgContainer{
      margin-right: 100px;
    }

    .firstSectionAlign .rightSide{
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .title{
      width: 100%;
      height: min-content;
      padding: 20px;
      font-size: 4rem;
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
      -webkit-text-stroke-color: white;
    }

    .description{
      padding-left: 20px;
      color: white;
      width: 500px;
      padding-bottom: 10px;
      padding-right: 10px;
      font-family: Arial;
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-size: 1.5rem;
      font-family: var(--F1);
      margin-left: 5px;
    }

    .transitionContainer{
      width: 100%;
      height: 150px;
      position: relative;
      margin-top: 100px;
    }

    @media screen and (max-width: 1500px){
      .firstSectionAlign{
        width: 90%;
      }


    }


    @media screen and (max-width: 1000px){
      .firstSectionAlign{
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 50px;
      }

      .firstSectionBody{
        justify-content: flex-start;
      }

      .firstSectionAlign .rightSide, .firstSectionAlign .leftSide{
        width: 100%;
        height: min-content;
        justify-content: center;
        align-items: flex-start;
      }

      .firstSectionAlign .leftSide{
        margin-top: 350px;
      }

      .firstSectionAlign .rightSide{
        align-items: center;
        height: 800px !important;
      }

      .firstSectionBody{
        min-height: 800px;

      }

      .title, .description{
        text-align: center;
      }

      .leftSide .imgContainer{
        margin-right: 0px;
      }
    }


    @media screen and (max-width: 500px){
      .title{
        font-size: 3rem;
        line-height: 1;
      }

      .firstSectionAlign .leftSide{
        margin-top: 400px;
      }

      .firstSectionAlign .leftSide .imgContainer{
        width: 350px;
        height: 250px;
      }

      .description{
        width: 90%;
      }
    }


    @media screen and (max-width: 350px){

      .description{
        width: 100%;
      }
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
            fill: #D035FA;
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
          width: calc(150% + 1.3px);
          height: 106px;
        }

        .customShape2 .shapeFill {
            fill: #D035FA;
        }
        `}</style>
        </>
      )
    }
