import Image from "next/image";
import Link from 'next/link'
import { project } from "../app/config/config";


export const Logo = ({color}) => {
  return (
    

    <Link href="/" className="flex items-center justify-start">
      <span className={`self-center text-2xl font-semibold whitespace-nowrap dark:text-white pr-2`}>{project.name}</span>
      <Image 
      width={20}
      height={20}
      src={'/logo.svg'}
        ></Image>                   
    </Link>
  );
};

export default Logo;