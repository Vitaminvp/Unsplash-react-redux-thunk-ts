import React from "react";
import './Nav.scss';
import { SearchForm } from "../searchForm";

export const Nav: React.FunctionComponent<any> = () => {

    return <nav className={'nav'}>
            <div className={'nav__container'}>
                <SearchForm  className='nav__search-form'/>
            </div>
        </nav>;
};