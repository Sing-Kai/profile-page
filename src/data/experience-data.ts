export default interface IExperience {
  id:string,
  company:string,
  title:string,
  date:string,
  skills: string[],
}

export const experienceData: IExperience[] = [
  {
    id:'Koodoo',
    company:'Koodoo',
    title:'Software Engineer',
    date:'Aug 21 - Dec 22',
    skills: ['add some description ', 'add some description ', 'add some description '],
  },
  {
    id:'Sandvik',
    company:'Sandvik',
    title:'Consultant Software Engineer',
    date:'May 19 - Aug 21',
    skills: ['add some description ', 'add some description ', 'add some description '],
  },
  {
    id:'WDM',
    company:'WDM',
    title:'Software Engineer',
    date:'Jan 17 - May 19',
    skills: ['add some description ', 'add some description ', 'add some description '],
  }
]
