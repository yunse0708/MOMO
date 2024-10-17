import * as S from "./styles.css";

export const ottServices = [
  { name: "Netflix", imgSrc: "/images/netflix.svg" },
  { name: "Tving", imgSrc: "/images/tving.svg" },
  { name: "Disney+", imgSrc: "/images/disnep.svg" },
  { name: "Coupang", imgSrc: "/images/coupang.svg" },
];


export interface BoxProps {
  services: { name: string; imgSrc: string }[]; // 타입을 간단하게 정의
}


export const Box = ({ services }: BoxProps) => {
  return (
    <div className={S.Layout}>
      {services.map((item) => (
        <div key={item.name} className={S.ImageBox}>
          <img className={S.Image} src={item.imgSrc} alt={item.name} />
        </div>
      ))}
    </div>
  );
};
