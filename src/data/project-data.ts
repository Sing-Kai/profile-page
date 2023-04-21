import profile from '../images/profile-screen-shot.png';
import ron from '../images/ron.png';
import spock from '../images/spock.jpeg';
import auction from '../images/auction.jpg'
import { StaticImageData } from "next/image";

export default interface IProject {
  id:string,
  img: StaticImageData,
  title:string,
  description: string,
  url: string,
  skills: string[],
}

export const projectData: IProject[] = [
  {
    id:'aws-auciton',
    img: auction,
    title:'AWS Auction Microservice',
    description: 'Auctioning backend using AWS Api Gateway, Lambda functions, EventBridge, SNS, SES and Serveless Framework',
    url: 'https://github.com/Sing-Kai/aws-auction-app-notes',
    skills: ['AWS', 'Serverless Framework', 'Microservice', 'JavaScript', 'Node.js'],
  }, 
  {
    id:'profile',
    img: profile,
    title:'Profile Page',
    description: 'My profile page you are looking at now',
    url: 'https://github.com/Sing-Kai/profile-page',
    skills: ['React', 'TypeScript', 'Next', 'Styled Components', 'GitHubs Actions', 'Vercel'],
  },   
  {
    id:'spock',
    img: spock,
    title:'Rock Paper Spock',
    description: 'Rock Paper Scissor but more complex, popularised by Big Bang theory',
    url: 'https://github.com/Sing-Kai/spock-rock-game',
    skills: ['React', 'TypeScript', 'Tailwind', 'Zustand'],
  },  
  {
    id:'ron',
    img: ron,
    title:'Ron Swanson Quotes',
    description: 'Generates quotes from Ron Swanson in Parks and Recreation. Made with React Hooks. ',
    url: 'https://github.com/Sing-Kai/ron-swanson-quotes-v2',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
]