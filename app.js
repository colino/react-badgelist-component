import React from 'react';
import _ from 'underscore';


var BadgeList = React.createClass({displayName: "BadgeList",


    getInitialState: function() {
        return {
            dataset: this.props.data || []
        };
    },



    render: function(){

        if(this.state.dataset != [])
        {
            return(
                <div className="listBoxDiv">
                    <ul className="list-group">
                        {
                            this.state.dataset.map(function(item, i){


                                return(
                                    <li key={i} className="list-group-item">
                                        <span className="badge">{item.value}</span>
                                        {item.text}
                                    </li>
                                )

                            })
                        }
                    </ul>
                </div>

            )
        }else{
            return null;
        }

    }

});
export default BadgeList;



