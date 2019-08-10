import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

class Playlist extends React.Component{

    constructor(props){
        super(props);
    }

    handleNameChange = (event) =>{
       this.props.onNameChange(event.target.value)
    }

    render(){
        return(
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
                <Tracklist tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={false}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;