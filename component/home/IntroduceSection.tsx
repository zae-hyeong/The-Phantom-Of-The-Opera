import React from "react";
import styles from "./IntroduceSection.module.css";

const IntroduceSection = () => {
  return (
    <div className={styles.infoSection2}>
      <div>
        <h1>{`뮤지컬 "오페라의 유령" 소개`}</h1>
        <h3>{`신비로운 오페라 하우스에서 펼쳐지는 사랑과 비극의 이야기`}</h3>
      </div>
      <div className={styles.musicalIntroduceBoxContainer}>
        <div className={styles.musicalIntroduceBox}>
          {/* <Image src={homeImage} alt={""} /> */}
          <h2>{`주요 캐릭터와 재능 넘치는 소프라노 크리스틴 다에`}</h2>
          <span>{`유령의 도움으로 성장하는 크리스틴과 라울의 사랑`}</span>
        </div>
      </div>
    </div>
  );
};

export default IntroduceSection;
