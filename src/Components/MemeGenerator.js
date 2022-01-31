import React, { Component } from 'react';
import "./style.css";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImg: require('../images/Lets-Create.png'),
      allMemeImgs: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
      const { memes } = response.data;
      this.setState({ allMemeImgs: memes })
      })
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({ randomImg: randMemeImg })
  }

  render() {

    return <div className="mt-5">
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <legend>Let's Add Some Text</legend>
                  <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Top Text</label>
                    <input 
                      type="text" 
                      name='topText' 
                      id="disabledTextInput" 
                      class="form-control" 
                      placeholder="Top - Text" 
                      value={this.state.topText}
                      onChange={this.handleChange}
                    ></input>
                  </div>

                  <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Bottom Text</label>
                    <input 
                      type="text" 
                      name='bottomText' 
                      id="disabledTextInput" 
                      class="form-control" 
                      placeholder="Bottom - Text"
                      value={this.state.bottomText}
                      onChange={this.handleChange}
                      ></input>
                  </div>
          
                  <button type="submit" class="btn btn-primary">Create</button>
                </fieldset>
              </form>

              <div className="main-div mt-3">
                <img src={this.state.randomImg} alt='' style={{width:"100%"}}/>
                <div class="top-left">{this.state.topText}</div>
                <div class="bottom-left">{this.state.bottomText}</div>
              </div>
    
          </div>;
  }
}
export default MemeGenerator;