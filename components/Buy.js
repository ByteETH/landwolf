export default function Buy(){
  return(
    <>
    
    <div className='buyContainer'>
      <div className='buyBox'>
        
      <iframe
        src="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=#"
        title="Swap"
        width="500px"
        height="500px"
        frameBorder="0"
        scrolling="no"
        style={{border : 0, margin: '0, auto', display : 'block', borderRadius : '10px'}}
      />
      </div>
    </div>

    <style jsx>{`
    .buyContainer{
          width: 100%;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          position: relative;
        }

        .buyBox{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 500px;
          border-radius: 20px;
          overflow: hidden;
          margin-top: 50px;
          margin-bottom: 50px;
          z-index: 2;
        }
        
        @media screen and (max-width: 750px) {

          .title span{
            font-size: 4rem;
          }

          .buyBox{
            width: 400px;
          }
        }

        @media screen and (max-width: 400px){
          .buyBox{
            width: 350px;
          }
        }
    `}</style>
    </>
  )
}