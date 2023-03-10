import profile from '../images/code.jpg';
import ron from '../images/ron.png';
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
    id:'WIP1',
    img: ron,
    title:'Ron Swanson Quotes',
    description: 'Generates quotes from Ron Swanson in Parks and Recreation. Made with React Hooks. ',
    url: 'https://github.com/Sing-Kai',
  },
  {
    id:'WIP2',
    img: profile,
    title:'project title',
    description: 'Work In Progress',
    url: 'https://github.com/Sing-Kai',
  },
  {
    id:'WIP3',
    img: profile,
    title:'project title',
    description: 'Work In Progress',
    url: 'https://github.com/Sing-Kai',
  },
]