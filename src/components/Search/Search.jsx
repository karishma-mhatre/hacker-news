import React from "react";
import { searchArticles } from '../../actions';
import  { connect } from "react-redux";
import './search.css';

const Search = (props) => {
    const search = (e) => {
        e.preventDefault();
        props.dispatch(searchArticles(e.target.value));
    }
    return (
        <div className="search-bar">
            <input onChange={search} placeholder="Search articles"/>
            <i className="fa fa-search"></i>
        </div>
    )
}

export default connect()(Search);