import Image from "next/image";
import Foo from "../../../public/images/Footer.svg";
import * as S from "./styles.css";

export const Footer = () => {
  return (
    <div>
      <Image className={S.Foo} src={Foo} alt="Footer" />
    </div>
  );
};
