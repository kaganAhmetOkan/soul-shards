import style from "./Shard.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Shard({ href, icon, name, children }) {
  return (
    <Link className={style.main} href={href} data-colors="default" data-color={name}>
      <div className={style.img}>
        <Image src={icon} width={64} height={64} alt={name} />
      </div>
      <div className={style.title}>{children}</div>
    </Link>
  );
};