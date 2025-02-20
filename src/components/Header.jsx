import {Typography} from "@material-tailwind/react";
import {FaGithub} from "react-icons/fa";

const Header = () => {
    return (
        <header className="p-3">
            <div className="flex justify-between items-center">
                <Typography variant="h2" as="p">
                    Your BLinded Anime Top
                </Typography>

                <a target="_blank" href="https://github.com/NamelessProj/Your_Blinded_Anime_Top">
                    <Typography className="sr-only">
                        View on GitHub
                    </Typography>
                    <FaGithub size={24} />
                </a>
            </div>
        </header>
    );
};

export default Header;