import Image from 'next/image'
import React from 'react'





const WebinarExperts = () => {



const expertsInfo = [
    {
        id:1,
        name:"Rose Shawish",
        position:"Fundamental Analyst",
        desc:"With years of experience in financial markets,Rose brings a wealth of knowledge and a passion for helping traders succeed. Her insights into market dynamics and trading psychology are invaluable for both novice and seasoned traders alike.",
        imageUrl:"https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/webinar/rose.webp"
    },
    {
        id:2,
        name:"Ahmed Alsajadi",
        position:"Technical Analyst",
        desc:"As a seasoned trader and educator, Ahmed is dedicated to empowering traders with the skills and confidence to navigate complex markets. His pragmatic approach and deep understanding of market mechanics make his webinars insightful and engaging.",
        imageUrl:"https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/webinar/ahmad.webp"
    }
] 

  return (
    <section className='py-12'>
        <div className='md:max-w-3xl mx-auto'>
        <h1 className='text-secondary md:text-4xl text-xl font-semibold text-center' style={{letterSpacing:'1.25px'}}>
        Meet Our Webinar Experts
        </h1>
        <p className='text-secondary md:text-xl text-[16px] font-light text-center py-4 md:py-8'>
        Meet the Minds Behind Our Webinars, Individuals With Extensive Experience and Expertise in the Field of Trading.
        </p>
        </div>
        <div className='container flex flex-col md:flex-row justify-center items-center gap-5'>
            {expertsInfo.map((expert)=>(
            <div 
            key={expert.id}
            className='relative bg-accent rounded-xl w-[45%] h-[320px] shadow-2xl border border-gray-400'
            >   
            <Image
            src={expert.imageUrl}
            alt="Background Desktop"
            width={500}
            height={400}    
            className="absolute right-0 z-10 bottom-0 w-[300px] h-[320px]"
            priority={true}
            />
             <div className='lg:p-10 max-w-[65%]'>
                <h2 className='text-secondary font-semibold md:text-3xl text-xl' style={{letterSpacing:'1.25px'}}>{expert.name}</h2>
                <h5 className='text-secondary font-medium md:text-xl text-[16px]'>{expert.position}</h5>
                <p className='text-sm font-medium pt-8'>{expert.desc}</p>
            </div>
            </div>
            ))}
           
        </div>
    </section>
  )
}

export default WebinarExperts