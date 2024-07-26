import { createTranslator } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({params:{locale}}){
  const messages = (await import(`./../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  // const url =
  // locale != "en"
  //   ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/15-deposit-bonus`
  //   : `${process.env.NEXT_PUBLIC_BASE_URL}/15-deposit-bonus`;

    return{
      title:'PrimeX Capital | Page Not Found!',
      description:"Not Found Page Description!!",
      // alternates: {
      //   canonical: url,
      // },
    }
}


export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="flex flex-col md:flex-row items-center text-center md:text-left">
      <div className="md:mr-8">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-xl font-medium text-secondary">Oops sorry! The page you're looking for doesn't exist.</p>
        <Link className="inline-block px-6 py-3 mt-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-yellow-600" href="/">
        Go Back!
        </Link>
      </div>
      <div className="mt-8 md:mt-0">
        <Image src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/404/falling_rocket.webp" alt="404 Image" width={300} height={300} />
      </div>
    </div>
  </div>
  );
}
