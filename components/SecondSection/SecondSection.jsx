import styles from './secondsection.module.css';
import Card from './Card';


export default function SecondSection(){
  return(
    <>

    <div className={styles.secondSectionContainer} id='htb'>
      <div className={styles.title} data-aos="zoom-in">HOW TO BUY</div>
      <div className={styles.cardsContainer}>
        <Card imgUrl={'metamask.png'} textCard={'Step 1'} titleBack={'Create a Wallet'} descBack={'You can obtain Metamask or any other wallet app for free from the app store or Google Play store. If you are using a desktop computer, you can download the Google Chrome extension by visiting metamask.io.'}/>
        <Card imgUrl={'eth.png'} textCard={'Step 2'} titleBack={'Get some ETH'} descBack={'Have ETH in your wallet to switch to $PIPI. If you do not have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.'}/>
        <Card imgUrl={'uniswap.png'} textCard={'Step 3'} titleBack={'Connect your wallet'} descBack={'With ETH in your wallet you can buy $PIPI in our own website, connect it below.'}/>
        <Card imgUrl={'swapImage.png'} textCard={'Step 4'} titleBack={'Swap ETH for $PIPI'} descBack={'Use our contract address when switching ETH for our token. You may need to use a +1.5% slippage to ensure that your transaction goes through at the best possible price.'}/>
      </div>
    </div>

    </>
  )
}
