import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import Player_Obj from './Player_Obj';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            duration: 0,
            current: 0,
        };
        this.selectMusic = this.selectMusic.bind(this);
        this.misc_playctrl = this.misc_playctrl.bind(this);
        this.getaudio = this.getaudio.bind(this);
    }
    selectMusic() {
        const file = document.getElementById('inputFile');
        file.click();
    }

    misc_playctrl() {
        this.setState({
            playing: !this.state.playing
        });
    }
    getaudio() {
        var getaudio = [];
        for (let i = 0; i < this.props.music_length; i++) {
            getaudio[i] = 
            <Player_Obj
                isPlaying = {this.state.playing}
                duration = {this.state.duration}
                playctrl = {this.misc_playctrl}
                src = {this.props.data[i].src}
                key = {i}
            />
        }
        return getaudio;
    }
    render() {
        const invisible = {
            width: 0,
            height: 0,
            opacity: 0,
        };
        const btn = {
            width: '150px',
            height: '100px',
            border: `1px solid rgb(255, 255, 255)`,
            color: 'white',
            backgroundColor: 'black',
        };
        return (
            <div className="Create">
                <div className="music-controller">
                    <input
                        id="inputFile"
                        type="file"
                        accept="audio/*"
                        style={invisible}
                        multiple
                        onChange={this.props.fileChange}
                    />
                    <button
                        style={btn}
                        onClick={this.selectMusic}
                    >Open files</button>
                </div>

                {this.getaudio()}

            </div>
        );
    }
}

export default Create;