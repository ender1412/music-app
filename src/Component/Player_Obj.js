import React,{Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPlay,faPause} from '@fortawesome/free-solid-svg-icons';


class Player_Obj extends Component {
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        const misc = document.getElementById('auidofile');
        nextProps.isPlaying ? misc.play() : misc.pause();
    }
    render(){ 
        return(
            <div className="Player_Frame">
            <audio
                id="auidofile"
                className="audiodata"
                controls
                crossOrigin="annonymous"
                src={this.props.src}
                //onLoadedData={this.props.handlePlay}
            />
            <div className="Player">
                <button className="play_btn"
                    onClick={this.props.playctrl}>
                    {this.props.isPlaying?
                    <FontAwesomeIcon className="playericon" icon={faPause} /> :
                    <FontAwesomeIcon className="playericon" icon={faPlay} />   
                }
                </button>

            </div>
        </div>

        );
    }
}

export default Player_Obj;