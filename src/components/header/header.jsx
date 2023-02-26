import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <header>
        <div>
        <div className="topNav">
            <Link href='/' legacyBehavior>
                <a>
                    <Image alt="logo" src={'/images/next.svg'} width={50} height={50} />
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                     <Link  href='/' legacyBehavior>
                        <a>Home</a>
                     </Link>
                    </li>
                    <li>
                     <Link  href='/events' legacyBehavior>
                        <a>Events</a>
                     </Link>
                    </li>
                    <li>
                     <Link  href='/about-us' legacyBehavior>
                        <a>About Us</a>
                     </Link>
                    </li>
                </ul>
            </nav>
        </div>
        <p className="title">
                Events by Noah Aghedo!
        </p>
        </div>
        
  </header>
  )
}

export default Header