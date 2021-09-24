
import React, {Component} from 'react';
import ProjectCard from './ProjectCard';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import Expenses from './images/Expenses.png';
import Forecast from './images/Forecast.png';
import Pawesome from './images/Pawesome.png';


class Projects extends Component {

  state ={
    slideNumber: 0,
  }

  componentDidMount() {
    this.kickOffCarousel()
  }

  moveToNextSlide = () => {
    this.state.slideNumber === 2 ?
    this.resetCarousel()
    :
    this.setState(prevstate => ({ slideNumber: prevstate.slideNumber + 1}))
  }

  moveToPreviousSlide = () => {
    this.state.slideNumber === 0 ?
    this.setState({slideNumber: 2})
    :
    this.setState(prevstate => ({ slideNumber: prevstate.slideNumber - 1}))
  }

  kickOffCarousel = () => {
      setInterval(this.moveToNextSlide, 8500)
  }

  resetCarousel = () => {
    clearInterval(this.kickOffCarousel)
    this.setState({slideNumber: 0})
  }


  slides = [
    {
        image: {Expenses}, 
        text: `This app allows users to track their expenses and break them down by category aided by an interactive chart. 
                It is a RESTful API built to practice CRUD operations using Ruby on Rails and Vanilla Javascript.`, 
        url: 'https://expenses-tracker-9978b.firebaseapp.com/'
    },
    {
        image: {Forecast}, 
        text: `In addition to retreiving current weather data and weekly forecast for any city, users are able to save 
                their favorite locations and retreive data for them upon signup, which required proper handling of multiple
                asynchronous calls and a thourough understanding of React's lifecycle methods.`, 
        url: 'https://gallant-brown-8fa872.netlify.app/Home'
    },
    {
        image: {Pawesome}, 
        text: `Brochure website in progress for an existing dog boarding and hiking business in San Francisco. 
                Built on Ruby on Rails and React, this website secures users' information through JWT and incorporates
                Google Maps' API. Currently undergoing improvements for the previous booking method.`, 
        url: 'https://pawsomehiking.firebaseapp.com/'
    }
  ]

  render(){
    return (
      <div id="Projects" >
            <div style={{height: '4vh'}}></div>
            <h2 className="ComponentTitle FontGradient">Projects</h2>
            <div style={{height: '1vh'}}></div>
            <div id="CarouselContainer">
                <ProjectCard data={this.slides[this.state.slideNumber]}></ProjectCard>
            </div>
            <br></br>
            <IconButton onClick={() => this.moveToPreviousSlide()} className='slide-button'>
                <NavigateBeforeRoundedIcon className='slide-button-in'></NavigateBeforeRoundedIcon>
            </IconButton>
            <IconButton onClick={() => this.moveToNextSlide()} className='slide-button'>
                <NavigateNextRoundedIcon className='slide-button-in'></NavigateNextRoundedIcon>
            </IconButton>
      </div>
    )
  };
}

export default Projects;
