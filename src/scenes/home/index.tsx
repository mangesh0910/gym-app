import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');

    return (
        <section
            className='bg-gray-20 py-10 h-screen gap-16'
            id='home'
        >
            {/* HEADER & IMAGE */}
            <div className='md:flex w-5/6 mx-auto items-start h-3/4 justify-items-start mt-32'>
                {/* HEADING */}
                <div>
                    {/* ACTUAL HEADING */}
                    <div>
                        <div className='relative z-10'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img alt='home-page-text' src={HomePageText} />
                            </div>
                        </div>
                        <p className='py-8'>
                            Gold's Gym is a globally renowned fitness brand that has made its mark in India. With a strong legacy dating back to 1965 in Venice Beach, California, Gold's Gym has become synonymous with fitness excellence and innovation.
                        </p>
                    </div>
                    {/* ACTIONS */}
                    <div className='flex gap-16 items-center'>
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        <AnchorLink
                            className='text-sm underline text-primary-500 hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            Learn more
                        </AnchorLink>
                    </div>
                </div>
                {/* IMAGE */}
                <div>
                    <img alt='home-page-graphic' src={HomePageGraphic} />
                </div>
            </div>
            {/* SPONSORS */}
            {isAboveMediumScreen && <div className='bg-primary-100'>
                <div className='p-8 flex gap-16 mx-auto w-5/6 h-1/4'>
                    <img alt='redbull-sponsor' src={SponsorRedBull} />
                    <img alt='forbes-sponsor' src={SponsorForbes} />
                    <img alt='fortune-sponsor' src={SponsorFortune} />
                </div>
            </div>}
        </section>
    )
}

export default Home;