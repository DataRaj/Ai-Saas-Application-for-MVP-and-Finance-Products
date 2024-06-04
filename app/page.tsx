import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'
import { HeroParallax } from '@/components/global/connect-parallax'
import { ContainerScroll } from '@/components/global/container-scroll-animation'
import Custom_3d_card from '@/components/global/custom_3d_card'
import { InfiniteMovingCards } from '@/components/global/infinite-moving-card'
import { LampComponent } from '@/components/global/lamp'
import Navbar from '@/components/navbar'

import { Button } from '@/components/ui/button'
import { clients, products } from '@/lib/constant'
import { CheckIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Fuzzie
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mt-[-500px]">
        <LampComponent />
        <div className='flex flex-wrap flex-col justify-center items-center 
        md:flex-row gap-8 -mt-72'>
          <Custom_3d_card 
          head='Basic'
          price={10}
          tagline={`go throght the regime and discover a service we offer and affordable to you! Isn't it cool`}
          benifits={[
            '20 minute one to one talk!',
            'free message service for a day (only one person)!',
            'one month membership free',
            'Free tranformation therapy!'
          ]}
          />
          <Custom_3d_card 
          head='Regular'
          price={49}
          tagline={`now you are become our permenant customer then how can you just left us here get everything you want at anyday`}
          benifits={[
            '20 minute one to one talk!',
            'free message service for a day (only one person)!',
            'one month membership free',
            'Free tranformation therapy!'
          ]}
          />
          <Custom_3d_card
          head='pro'
          price={99}
          tagline={`now you are become our permenant customer then how can you just left us here get everything and anytime no timebound :)`}
          benifits={[
            '20 minute one to one talk!',
            'free message service for a day (only one person)!',
            'one month membership free',
            'Free tranformation therapy!'
          ]}
          />

        </div>
      </section>
    </main>
  )
}