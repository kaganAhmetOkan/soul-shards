import style from "./NavButton.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavButton({ children, icon, alt, isActive, href }) {
  return (
    <Link className={style.main} data-active={isActive} href={href} data-colors="default">
      <div className={style.img}>
        <Image src={icon} alt={alt} width={40} height={40} draggable="false" />
      </div>
      <div className={style.title}>
        {children}
      </div>
    </Link>
  );
};