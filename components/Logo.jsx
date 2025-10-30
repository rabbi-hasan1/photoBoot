import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Not found"
        width="100"
        height="165"
        className="max-w-[100px] md:max-w-[165px]"
      ></Image>
    </Link>
  );
}
