import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import ActionButton from '@/shared/ActionButton';

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const flexBetween = 'flex items-center justify-between';
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")

    return (
        <nav>
            <div className={`${flexBetween} w-full py-6`}>
                <div className={`${flexBetween} w-5/6 mx-auto`}>
                    {/* Left */}
                    <div className={`${flexBetween}`}>
                        <img alt='Logo' src={Logo} />
                    </div>
                    {/* Right */}
                    {isAboveMediumScreen ? (<div className={`${flexBetween} w-5/6`}>
                        <div className={`${flexBetween} gap-8`}>
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                        </div>
                    </div>) : (
                        <button
                            className='rounded-full p-2 bg-secondary-500'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className='w-6 h-6 text-white' />
                        </button>
                    )}
                </div>
            </div>
            {/* Mobile Menu Modal */}
            {!isAboveMediumScreen && isMenuToggled && <div className='fixed top-0 right-0 bg-primary-100 z-40 drop-shadow-xl h-full w-[300px]'>
                <div className='flex justify-end p-12'>
                    <XMarkIcon className='h-8 w-8 text-gray-400' onClick={() => setIsMenuToggled(false)} />
                </div>
                <div className='flex flex-col ml-[33%] gap-10 text-2xl'>
                    <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
            </div>}
        </nav>
    )
}

export default Navbar