import Image from "next/image";
import Link from "next/link";

const AccountTtpes = () => {
  const accountTypes = [
    {
      title: "Standard",
      description:
        "The Standard Account is a top choice among traders due to its no-swap commissions, offering cost-efficiency by eliminating these fees.",
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/account_types/standard.svg",
      btnHref: "#",
    },
    {
      title: "Narrow",
      description:
        "This account is tailored for scalpers, featuring the lowest spread to maximize profits from short-term market movements.",
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/account_types/narrow.svg",
      btnHref: "#",
    },
    {
      title: "Zero",
      description:
        "The Zero Account is designed for professional traders, offering a 'zero spread' for an unmatched trading experience.",
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/account_types/zero.svg",
      btnHref: "#",
    },
  ];
  return (
    <section className="pt-12 pb-8 container">
      <h1 className="sectionHeading">Account Types</h1>
      <div className="grid justify-center place-items-center gap-6 grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-4 pt-12">
        {accountTypes.map((account, index) => (
          <div key={index} className="flip-card cursor-pointer">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Image
                  src={account.imageUrl}
                  width="50"
                  height="100"
                  alt="account logo"
                />
                <p className="text-lg md:text-2xl font-semibold text-secondary pt-5">
                  {account.title}
                </p>
              </div>
              <div className="flip-card-back">
                <p className="text-sm text-[#FFF] text-center px-2 pb-3">
                  {account.description}
                </p>
                <Link
                  href={account.btnHref}
                  className="underline text-sm text-[#FFD000]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccountTtpes;
