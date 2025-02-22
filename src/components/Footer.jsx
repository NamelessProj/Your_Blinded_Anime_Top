import {Typography} from "@material-tailwind/react";
import {format} from "date-fns";

const Footer = () => {
    return (
        <footer className="p-1">
            <Typography variant="small" className="text-center text-balance mx-auto">
                &copy; {format(new Date(), "MMM yyyy")} - All rights reserved - <a className="text-primary-400 opacity-80 hover:opacity-100" target="_blank" href="https://github.com/NamelessProj">Da Silva Pinto Kevin</a>
            </Typography>
        </footer>
    );
};

export default Footer;