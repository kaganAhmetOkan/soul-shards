import style from "./NavButton.module.css";
import Image from "next/image";

export default function NavButton({ children, icon, alt, isActive, href }) {
  return (
    <a className={style.main} data-active={isActive} href={href} data-colors="default">
      <div className={style.img}>
        <Image src={icon} alt={alt} width={40} height={40} draggable="false" />
      </div>
      <div className={style.title}>
        {children}
      </div>
    </a>
  );
};