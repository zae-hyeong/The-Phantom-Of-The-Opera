import React from "react";
import styles from "./IntroduceSection.module.css";

const OverviewSection = () => {
  return (
    <div className={styles.infoSection1}>
      <h1>오페라의 유령: 사랑과 신비로움이 얽힌 가슴 아픈 이야기</h1>
      <div>
        <span>
          오페라의 유령은 파리 오페라 하우스를 배경으로 한 신비로운 유령과
          아름다운 소프라노 크리스틴 다에의 사랑 이야기입니다.
        </span>
      </div>
      <div className={styles.infoBoxContainer}>
        <div className={styles.infoBox}>
          <h3>신비로움</h3>
          <span>
            오페라 하우스의 화려한 무대와 의상, 애틋한 사랑과 갈등이 중심 테마로
            전해집니다.
          </span>
        </div>
        <div className={styles.infoBox}>
          <h3>로맨스</h3>
          <span>{`뮤지컬 "오페라의 유령"은 신비로움과 열정, 그리고 비극적인 감정을 담고 있습니다.`}</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
