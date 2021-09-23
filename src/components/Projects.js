
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
      setInterval(this.moveToNextSlide, 4500)
  }

  resetCarousel = () => {
    clearInterval(this.kickOffCarousel)
    this.setState({slideNumber: 0})
  }


  slides = [
    {
        image: {Expenses}, text: "Project 1", url: 'https://expenses-tracker-9978b.firebaseapp.com/'
    },
    {
        image: {Forecast}, text: "Project 2", url: 'https://gallant-brown-8fa872.netlify.app/Home'
    },
    {
        image: {Pawesome}, text: "Project 2", url: 'https://pawsomehiking.firebaseapp.com/'
    }
  ]

  render(){
    return (
      <div id="Projects" >
            <div style={{height: '5vh'}}></div>
            <h2 className="ComponentTitle FontGradient">Projects</h2>
            <div style={{height: '2vh'}}></div>
            <div id="CarouselContainer">
                <ProjectCard data={this.slides[this.state.slideNumber]}></ProjectCard>
            </div>
            <IconButton className='slide-button'>
                <NavigateBeforeRoundedIcon onClick={() => this.moveToPreviousSlide()} className='slide-button-in'></NavigateBeforeRoundedIcon>
            </IconButton>
            <IconButton className='slide-button'>
                <NavigateNextRoundedIcon onClick={() => this.moveToNextSlide()}></NavigateNextRoundedIcon>
            </IconButton>
      </div>
    )
  };
}

export default Projects;
