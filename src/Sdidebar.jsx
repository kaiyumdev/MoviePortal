import Treding from "../src/assets/icons/trending.svg";
import NewRelease from "../src/assets/icons/newRelease.svg";
import CommingSoon from "../src/assets/icons/commingSoon.svg";
import Favourite from "../src/assets/icons/favourite.svg";
import WatchLater from "../src/assets/icons/watchLater.svg";
const Sdidebar = () => {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                        <img src={Treding} width="24" height="24" alt="" />
                        <span>Trending</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={NewRelease} width="24" height="24" alt="" />
                        <span>New Releases</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={CommingSoon} width="24" height="24" alt="" />
                        <span>Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={Favourite} width="24" height="24" alt="" />
                        <span>Favourites</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={WatchLater} width="24" height="24" alt="" />
                        <span>Watch Later</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sdidebar