import React from "react";

class AgentYoutubeOembedMessage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          name: props.name,
          timestamp : props.timestamp,
          videoUrl : props.videoUrl,
          title : props.title,
          author : props.author_name,
          authorUrl : props.authorUrl,
          thumbnailUrl: props.thumbnailUrl,
          thumbnailWidth : props.thumbnailWidth,
          thumbnailHeight : props.thumbnailHeight,
        }
        
    }
    render() {
      return (
        <div className="embedYoutubeCard msgAgent">
            <a href={"https://" + this.state.videoUrl}>
              <div className ="label">
                {this.props.name}      
              </div> 
                <div className="title">
                    {this.state.title}
                </div>
                <div className="author">
                  {this.state.author}
                </div>
                <div className="imgBox">
                    <img src={this.state.thumbnailUrl} alt="Miniature youtube" />
                </div>
                <div className="linkBox">
                   {"https://www." + this.state.videoUrl}      
                </div>
            </a>
          </div>
          );
  }
}

export default AgentYoutubeOembedMessage;