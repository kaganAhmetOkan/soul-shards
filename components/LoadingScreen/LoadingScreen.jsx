import style from "./LoadingScreen.module.css";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className={style.main}>
      <Image src="/images/loading.png" width={100} height={100} alt="loading" />
      <h2>Loading...</h2>
    </div>
  );
};