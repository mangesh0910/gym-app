
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
    const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
    const flexBetween = 'flex items-center justify-between'
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 py-6  w-full `}>
                <div className='flex items-center justify-between w-5/6 mx-auto'>
                    {/* Left */}
                    <div className={`${flexBetween}`}>
                        <img src={Logo} alt='Logo' />
                    </div>
                    {/* Right */}
                    {isAboveMediumScreen ? (<div className={`${flexBetween} w-5/6`}>
                        {/* Right -Left */}
                        <div className={`${flexBetween} gap-8`}>
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        {/* Right - Right */}
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                    </div>) : (
                        <button
                            className='rounded-full bg-secondary-500 p-2'
                            onClick={() => setIsMenuToggle(!isMenuToggle)}
                        >
                            <Bars3Icon className='w-6 h-6 text-white' />
                        </button>
                    )}
                </div>
            </div>
            {/* Mobile Menu Modal */}
            {!isAboveMediumScreen && isMenuToggle && <div className='h-full z-40 w-[300px] bg-primary-100 shadow-md fixed top-0 right-0'>
                <div className='flex justify-end p-8'>
                    <XMarkIcon className='h-10 w-10 text-gray-700' onClick={() => setIsMenuToggle(false)} />
                </div>
                <div className='flex flex-col gap-10 ml-[33%] text-2xl'>
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