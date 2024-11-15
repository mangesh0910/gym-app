
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = 'flex items-center justify-between'
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 py-6  w-full `}>
                <div className='flex items-center justify-between w-5/6 mx-auto'>
                    {/* Left */}
                    <div className={`${flexBetween}`}>
                        <img src={Logo} alt='Logo' />
                    </div>
                    {/* Right */}
                    <div className={`${flexBetween} w-5/6`}>
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
                            <p>Become a Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar