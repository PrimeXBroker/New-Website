import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section className={`bg-secondary`}>
      <div className="container flex flex-col md:flex-row justify-evenly gap-10 items-center py-12">
        <div className="md:w-[40%]">
          <h1
            className={`text-primary text-xl md:text-6xl font-semibold mb-5 md:text-left text-center`}
            style={{ letterSpacing: "1px" }}
          >
            Terms & <br/> Conditions
          </h1>
          <p className='text-white text-lg'>
            This section outlines the legal Terms and conditions that Apply to Your Use of Our Services, including Trading, Account Management, and More.
          </p>
        </div>
        <div>
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/terms/Banner.webp"
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