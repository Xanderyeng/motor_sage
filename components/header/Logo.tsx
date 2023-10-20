import Image from "next/image";
import logo from '@images/carsymbol5.svg'
export default function Logo() {
  return (
    <>
     <div className="col-md-3 p-4">
      <h1 className="text-right">
        <a
          href="index.html"
          className="text-orange-600 text-3xl font-semibold font-italic relative inline-block hover:no-underline "
        >
          <Image
            src={logo}
            width={100}
            height={50}
            alt="logo"
            className="absolute left-[-30%] top-[-23px]"
            style={{ objectFit: "contain" }}
          />
          <span className="ml-8">Motor Store</span>
        </a>
      </h1>
    </div>
    </>
  );
}
