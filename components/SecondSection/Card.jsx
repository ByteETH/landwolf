import styles from './secondsection.module.css';
import Image from 'next/image';

export default function Card({imgUrl, textCard, titleBack, descBack}){
  return(
    <>

    <div className={styles.flipCard} data-aos="zoom-in">
        <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
                <p className={styles.title}><Image src={`/images/${imgUrl}`} alt='' width='150' height='150'/></p>
                <p>{textCard}</p>
            </div>
            <div className={styles.flipCardBack}>
                <p className={styles.backDescription}>{titleBack}</p>
                <p>{descBack}</p>
            </div>
        </div>
    </div>

    </>
  )
}
