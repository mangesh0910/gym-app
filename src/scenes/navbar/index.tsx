import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = 'flex items-center justify-between';

    return (
        <nav>
            <div className={`${flexBetween} w-full py-6`}>
                <div className={`${flexBetween} w-5/6 mx-auto`}>
                    {/* Left */}
                    <div className={`${flexBetween}`}>
                        <img alt='Logo' src={Logo} />
                    </div>
                    {/* Right */}
                    <div className={`${flexBetween} w-5/6`}>
                        <div className={`${flexBetween} gap-8`}>
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <p>Become a member</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar