import React from "react";
import { sortArticles } from '../../actions';
import  { connect } from "react-redux";
import { sortOptions } from '../../helpers/constants';
import './sort.css';

class Sort extends React.Component {
    sortArticless = (e) => {
        e.preventDefault();
        this.props.dispatch(sortArticles(e.target.value));
    }

    render () {
        return (
            <div className="sort">
                <label>
                    Sort By <i className="fa fa-sort-amount-desc"/>
                </label>
                <div className="select">
                    <select onChange={this.sortArticless} defaultValue={this.props.sortOption}>
                        {
                            sortOptions.map(option => <option key={option} value={option}>{
                                option
                            }</option>)
                        }
                    </select>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sortOption: state.articleList.sortOption
})

export default connect(mapStateToProps)(Sort);