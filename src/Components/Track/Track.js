import React from 'react';
import './Track.css';


class Track extends React.Component{

    renderAction = () => {
        const signal;
        this.props.isRemoval ? signal = '-' : signal = '+';
        return <button className="Track-actions"> {signal} </button>
     }
  
    render(){
        return(
            <div class="Track">
                <div class="Track-information">
                    <h3><!-- track name will go here --></h3>
                    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
                </div> 
            </div>
        );
    }
}

export default Track;