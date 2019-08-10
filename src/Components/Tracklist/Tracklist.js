import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';


class Tracklist extends React.Component{
    render(){
        return(
            <div className="Tracklist">
               {
                  this.props.tracks && this.props.tracks.map((track) =>{
                      return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemoval={this.props.onRemoval} isRemoval={this.props.isRemoval}/>
                  })
               }
            </div>
        );
    }
}

export default Tracklist;