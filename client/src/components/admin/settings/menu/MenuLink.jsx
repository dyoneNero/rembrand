import React from 'react';
import {Link} from "react-router-dom";

const MenuLink = ({name, path}) => {
    return (
        <Link to={path}>
            {name}
        </Link>
    );
};

export default MenuLink;