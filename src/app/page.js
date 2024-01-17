"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { FaTwitch, FaInstagram, FaYoutube, FaArrowRight, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  TbSquareRoundedLetterG,
  TbSquareRoundedLetterO,
  TbSquareRoundedLetterA,
  TbSquareRoundedLetterT,
} from "react-icons/tb";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import profile from "./assets/ruyter-profile.jpg";
//import back from './assets/back.mp4'

export default function Home() {
  return (
    <>
      {/* <video autoPlay loop muted  className={styles.video}>
        <source src={'./back.mp4'} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video> */}
    <main className={styles.main}>
      
      <div>
        <div className={styles.boxImg}>
          <Image
            className={styles.logo}
            src={profile}
            alt="ruyter profile"
            width={150}
            height={150}
            priority
          />
        </div>
        <div className={styles.boxName}>
          <h1>Ruyter Poubel</h1>
          <RiVerifiedBadgeFill size={25} />
        </div>
      </div>
      {/* btn para redes sociais */}
      <div className={styles.grid}>
        <a
          href="https://www.twitch.tv/ruyterpoubel"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaTwitch size={25} />
            <p className={styles.p}>Siga-me na Twitch</p>
          </div>
          <FaArrowRight size={20} />
        </a>

        <a
          href="https://www.instagram.com/ruyter/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaInstagram size={25} />
            <p className={styles.p}>Siga-me no Instagram</p>
          </div>
          <FaArrowRight size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@canaldoruyter"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaTiktok size={25} />
            <p className={styles.p}>Siga-me no Tiktok</p>
          </div>
          <FaArrowRight size={20} />
        </a>
        <a
          href="https://twitter.com/poubelruyter"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaXTwitter size={25} />
            <p className={styles.p}>Siga-me no Twitter</p>
          </div>
          <FaArrowRight size={20} />
        </a>

        <a
          href="https://www.youtube.com/@canaldoruyter"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaYoutube size={25} />
            <p className={styles.p}>Inscreva-se no Youtube</p>
          </div>
          <FaArrowRight size={20} />
        </a>
        
      </div>
      <footer className={styles.footer}>
        <p>
          &copy; Copyright <TbSquareRoundedLetterG size={20} />{" "}
          <TbSquareRoundedLetterO size={20} />{" "}
          <TbSquareRoundedLetterA size={20} />{" "}
          <TbSquareRoundedLetterT size={20} /> 
          <span>by: @felip.codes</span>
        </p>
      </footer>
    </main>
    </>
  );
}
