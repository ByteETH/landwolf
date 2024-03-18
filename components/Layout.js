import { Rum_Raisin } from 'next/font/google';

const f1 = Rum_Raisin({
    weight: '400',
    subsets: ['latin'],
    variable: '--F1'
  });


export default function Layout({children}){
    

    return(
        <>
        
        <main className={f1.variable}>
            {children}
        </main>
        
        <style jsx>{`
        
        main{
            width: 100%;
            height: min-content;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
        }
        
        `}</style>
        </>
    )
}
