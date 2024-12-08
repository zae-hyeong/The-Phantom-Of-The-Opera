// import Image from "next/image";
import MainSection from "@/component/home/MainSection";
import styles from "./page.module.css";
import Header from "@/component/Header";
import IntroduceSection from "@/component/home/IntroduceSection";
import OverviewSection from "@/component/home/OverviewSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <MainSection />
        <IntroduceSection></IntroduceSection>
        <OverviewSection />
      </main>
    </div>
  );
}
