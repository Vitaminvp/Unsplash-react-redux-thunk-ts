import React from "react";
import './Nav.scss';
import { SearchForm } from "../searchForm";

export const Nav: React.FunctionComponent<any> = ({ onSearch, onFilter }) => {

    return <nav className={'nav'}>
            <div className={'nav__container'}>
                <SearchForm  onFilter={onFilter} className='nav__search-form'/>
                {/*onSubmit={ onSearch }*/}
            </div>
        </nav>;
};