import React from 'react';
import Spotify from '../../util/Spotify';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'My List',
      playlistTracks: []
    }
  }
  
  addTrack = (track) =>{
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    
    tracks.push(track);
    this.setState({
      playlistTracks: tracks
    });
  }

  removeTrack = (track) =>{
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    
    this.setState({
      playlistTracks: tracks
    });
  }

  updatePlaylistName = (name) =>{
    this.setState({
      playlistName: name
    });
  }

  savePlaylist = () =>{
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() =>{
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  search = (term) =>{
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  render(){
    return (
      <div>
        <h1>React Music App</h1>
        <div className="App">
         <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} 
            onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div> 
    );
  }
}

export default App;
