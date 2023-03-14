import profile from '../images/code.jpg';
import ron from '../images/ron.png';
import spock from '../images/spock.jpeg';
import { StaticImageData } from "next/image";

export default interface IProject {
  id:string,
  img: StaticImageData,
  title:string,
  description: string,
  url: string;
}


export const projectData: IProject[] = [
  {
    id:'WIP2',
    img: spock,
    title:'Rock Paper Spock',
    description: 'Rock Paper Scissor but more complex, popularised by Big Bang theory',
    url: 'https://github.com/Sing-Kai/spock-rock-game',
  },  
  {
    id:'WIP1',
    img: ron,
    title:'Ron Swanson Quotes',
    description: 'Generates quotes from Ron Swanson in Parks and Recreation. Made with React Hooks. ',
    url: 'https://github.com/Sing-Kai/ron-swanson-quotes-v2',
  },
  {
    id:'WIP3',
    img: profile,
    title:'project title',
    description: 'Work In Progress',
    url: 'https://github.com/Sing-Kai',
  },
]