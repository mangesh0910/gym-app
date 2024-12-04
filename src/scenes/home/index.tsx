import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {

    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

    return (
        <section
            id='home'
            className='h-full'
        >
            {/* OUTER PARENT */}
            <motion.div
                className='md:h-5/6 sm:h-full'
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* PARENT */}
                <div className='w-5/6 md:flex mx-auto justify-between items-center pt-32 '>
                    {/* LEFT */}
                    <motion.div
                        className='md:mt-20 sm:mt-0'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className='relative z-0'>
                            <div className='md:before:absolute md:before:-mt-20  md:before:-ml-20 md:before:content-evolvetext md:before:z-[-1]'>
                                <div className='z-50'>
                                    <img alt='HomePageText' src={HomePageText} />
                                </div>
                            </div>
                        </div>
                        <div className='py-10'>
                            <p>Gold's Gym is a globally renowned fitness brand that has made its mark in India. With a strong legacy dating back to 1965 in Venice Beach, California, Gold's Gym has become synonymous with fitness excellence and innovation. </p>
                        </div>
                        <motion.div
                            className='flex justify-start items-center'
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                            <AnchorLink
                                className='underline ml-20 text-primary-500'
                                href={`#${SelectedPage.ContactUs}`}
                            >
                                Learn More</AnchorLink>
                        </motion.div>
                    </motion.div>
                    {/* RIGHT */}
                    <div>
                        <img alt='HomePageGraphic' src={HomePageGraphic} />
                    </div>
                </div>
            </motion.div>
            {
                isAboveMediumScreen && <div className='w-full bg-primary-100 flex h-1/6 '>
                    <div className='justify-start gap-20 items-center flex w-5/6 mx-auto'>
                        <div>
                            <img alt='SponsorForbes' src={SponsorForbes} />
                        </div>
                        <div>
                            <img alt='SponsorFortune' src={SponsorFortune} />
                        </div>
                        <div>
                            <img alt='SponsorRedBull' src={SponsorRedBull} />
                        </div>
                    </div>
                </div>
            }

        </section >
    )
}

export default Home