import styles from './secondsection.module.css';
import Card from './Card';


export default function SecondSection(){
  return(
    <>

    <div className={styles.secondSectionContainer} id='htb'>
      <div className={styles.title} data-aos="zoom-in">How to Buy</div>
      <div className={styles.cardsContainer}>
        <Card imgUrl={'phantom.png'} textCard={'Step 1'} titleBack={'Create a Wallet'} descBack={'You can obtain Phantom or any other wallet app for free from the app store or Google Play store. If you are using a desktop computer, you can download the Google Chrome extension by visiting phantom.app.'}/>
        <Card imgUrl={'solcoin.png'} textCard={'Step 2'} titleBack={'Get some SOL'} descBack={'have SOL in your wallet to switch to $WOLF. If you do not have any SOL, you can buy directly on phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.'}/>
        <Card imgUrl={'raydium.webp'} textCard={'Step 3'} titleBack={'Go to Uniswap'} descBack={'You need to have SOL available in your wallet. If you do not already have SOL you can buy SOL directly on Phantom, transfer it from another wallet, or purchase it on another exchange and send it to your wallet.'}/>
        <Card imgUrl={'swapImage.png'} textCard={'Step 4'} titleBack={'Swap SOL for $WOLF'} descBack={'Use our contract address when switching SOL for our token. You may need to use a +1.5% slippage to ensure that your transaction goes through at the best possible price.'}/>
      </div>
    </div>

    </>
  )
}
