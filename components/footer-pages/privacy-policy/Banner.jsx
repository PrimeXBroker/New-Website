import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section className={`bg-secondary`}>
    <div className="container flex flex-col md:flex-row justify-evenly gap-10 items-center py-12">
      <div className="md:w-[45%]">
        <h1
          className={`text-primary text-xl md:text-6xl font-semibold mb-5 md:text-left text-center`}
          style={{ letterSpacing: "1px" }}
        >
          Privacy <br/> Policy
        </h1>
      </div>
      <div>
        <Image
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/privacy-policy/Banner.webp"
          width="300"
          height="300"
          alt="banner Image"
        />
      </div>
    </div>
  </section>
  )
}

export default Banner
