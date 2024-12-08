import React from 'react';
import Image from "next/image";
import styles from './IntroduceSection.module.css';
import homeImage from "@/image/home_main.png";


const MainSection = () => {
  return (
    <div className={styles.mainBannerContainer}>
          <div className={styles.contentContainer}>
            <h1>{`신비롭고 매혹적인 뮤지컬\n오페라의 유령`}</h1>
            <div><span>{`파리 오페라 하우스에서 펼처지는 가슴아픈 사랑과 신비로움이 얽힌 이야기`}</span></div>
            <div>
              <button>자세히 알아보기</button>
              <button>예매하기</button>
            </div>
          </div>
        <Image
          className={styles.logo}
          src={homeImage}
          alt="Home main banner"
          priority
        />
        </div>
  )
}


export default MainSection;