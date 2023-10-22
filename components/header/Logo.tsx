import Image from "next/image";
import logo from '@images/carsymbol5.svg'
export default function Logo() {
  return (
    <>
     <div className="flex items-center justify-start ">
        <Image
          src={logo}
          width={100}
          height={50}
          alt="logo"
          style={{ objectFit: "contain" }}
        />
      <h1 className="text-orange-600 text-3xl font-bold hover:no-underline" >
        <a href="/" className="flex items-center italic font-bold ">
          <span>Auto Store</span>
        </a>
      </h1>
    </div>
    </>
  );
}
