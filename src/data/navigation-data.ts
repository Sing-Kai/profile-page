import { faBriefcase, faHouse, IconDefinition} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

export default interface INavData {
  id:string,
  url:string,
  icon: IconDefinition,
  target:boolean,
  desc: string,
}

export const navigationData: INavData[] = [
  {
    id: 'home',
    url: '/',
    icon: faHouse,
    target: false,
    desc: 'Home',
  },
  {
    id: 'experience',
    url: '/experience',
    icon: faBriefcase,
    target: false,
    desc: 'Experience',
  },
  {
    id: 'linkedIn',
    url: 'https://www.linkedin.com/in/sing-kai/',
    icon: faLinkedin,
    target: true,
    desc: 'LinkedIn',
  },
  {
    id: 'gitHub',
    url: 'https://github.com/Sing-Kai',
    icon: faGithub,
    target: true,
    desc: 'GitHub',
  }
]