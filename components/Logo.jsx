import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/' > 
    <Image src='/2logo.svg' width={84} height={54} priority alt='' />
    </Link>

);
  
};

export default Logo