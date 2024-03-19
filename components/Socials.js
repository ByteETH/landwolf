import Image from "next/image";
import { FaRegNewspaper } from "react-icons/fa6";

export default function Socials({ wTg, hTg, wDx, hDx, wTw, hTw, sizeLt, wBox, hBox, wR, hR }) {
  return (
    <>
      <div className="socialsContainer">
        <a href='https://t.me/landwolfcoinsol' rel='noreferrer' target="_BLANK">
        <div className="box">
          <Image src="/telegram2.png" width={wTg} height={hTg} alt="" />
        </div>
        </a>
        <a href='https://www.dextools.io/app/es/solana/pair-explorer/8feZALtSojHuGM7LY2by7ZRpi35gTjUZJmCV74VyGmDD' rel='noreferrer' target="_BLANK">
        <div className="box">
          <Image src="/dx.png" width={wDx} height={hDx} alt="" />
        </div>
        </a>
        <a href='https://raydium.io/swap/?outputCurrency=8feZALtSojHuGM7LY2by7ZRpi35gTjUZJmCV74VyGmDD' rel='noreferrer' target="_BLANK">
        <div className="box">
        <Image src="/raydium.webp" width={wR} height={hR} alt="" />
        </div>
        </a>
        <a href='https://x.com/LandWolf1000x' rel='noreferrer' target="_BLANK">
        <div className="box">
          <Image src="/x2.png" width={wTw} height={hTw} alt="" />
        </div>
        </a>
      </div>

      <style jsx>{`
        .socialsContainer {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 10px;
          transition: 0.5s ease-out;
        }

        .socialsContainer .box {
          width: ${wBox}px;
          height: ${hBox}px;
          background-color: white;
          border: 1px solid white;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .socialsContainer .box:hover {
          margin-top: -10px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}