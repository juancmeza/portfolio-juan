
import React, {Component} from 'react';
import ProjectCard from './ProjectCard';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import Expenses from './images/Expenses.png';
import Forecast from './images/Forecast.png';
import Pawesome from './images/Pawesome.png';
import IronHorse from './images/IronHorse.png';


class Projects extends Component {

  state ={
    slideNumber: 0,
  }

  componentDidMount() {
    this.kickOffCarousel()
  }

  moveToNextSlide = () => {
    this.state.slideNumber === 3 ?
    this.resetCarousel()
    :
    this.setState(prevstate => ({ slideNumber: prevstate.slideNumber + 1}))
  }

  moveToPreviousSlide = () => {
    this.state.slideNumber === 0 ?
    this.setState({slideNumber: 3})
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
        url: 'https://expenses-tracker-9978b.firebaseapp.com/',
        github: 'https://github.com/juancmeza/expenses_tracker_front'
    },
    {
        image: {Forecast},
        text: `In addition to retreiving current weather data and weekly forecast for any city, users are able to save
                their favorite locations and retreive data for them upon signup, which required proper handling of multiple
                asynchronous calls and a thourough understanding of React's lifecycle methods.`,
        url: 'https://quick--forecast.web.app/Home',
        github: 'https://github.com/juancmeza/WeatherFront'
    },
    {
      image: {IronHorse},
      text: `Contributed in the development of a brochure and admin website for a small local business using Ruby on Rails,
              React, Material UI, custom CSS, and Yelp's API.`,
      url: 'https://ironhorsestudio.net/',
      github: 'https://github.com/okorkov/iron-horse'
    },
    {
        image: {Pawesome},
        text: `Brochure website in progress for a dog boarding business model.
                Built on Ruby on Rails and React, this website secures users' information through JWT and incorporates
                Google Maps' API. Currently undergoing a major revamp.`,
        url: 'https://pawsomehiking.firebaseapp.com/',
        github: 'https://github.com/juancmeza/PawsomeHikingFrontEnd'
    }
  ]

  render(){
    return (
      <div id="Projects" >
            <div id="ProjectsBackground"></div>
            <div style={{height: '4vh'}}></div>
            <h2 className="ComponentTitle FontGradient">Projects</h2>
            <div style={{height: '1vh'}}></div>
            <div id="CarouselContainer">
                <div className="CarouselLinks">
                     <a href={this.slides[this.state.slideNumber].github}>
                            <IconButton className="Github">
                                <GitHubIcon fontSize="large"></GitHubIcon>
                            </IconButton>
                     </a>
                </div>
                <div className="SiteLinks">
                     <a href={this.slides[this.state.slideNumber].url}>
                        <p>Website</p>
                     </a>
                </div>
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
