export default interface IExperience {
  id:string,
  company:string,
  title:string,
  description: string,
  date:string,
  skills: string[],
  line: boolean,
}

export const experienceData: IExperience[] = [
  {
    id:'Koodoo',
    company:'Koodoo',
    title:'Software Engineer',
    description: 'Full stack software developer writing front end applications and APIs for a fintech start up',
    date:'Aug 21 - Dec 22',
    skills: ['React, NextJS, Node, Express', 'JavaScript, TypeScript', 
             'HTML5, CSS, Styled Components', 'Git, GitHub, GitHub Actions', 
             'GCP, CI/CD with Circle CI Netlify', 'Pair programming, Code Reviews',
             'Docker, Jest, React Testing Library'],
    line: true,
  },
  {
    id:'Sandvik',
    company:'Sandvik',
    title:'Consultant Software Engineer',
    description: 'Contracting software engineer for multinational engineering company, writing internal front and backend applications',
    date:'May 19 - Aug 21',
    skills: ['.Net Framework, C#, JavaScript', 'OOP, SOLID principles', 'Git, Azure DevOps', 'SQL Server', 'NUnit, XUnit'],
    line: true,
  },
  {
    id:'WDM',
    company:'WDM',
    title:'Software Engineer',
    description: 'Developed multiple full stack applicaitons for the civil engineering company',
    date:'Jan 17 - May 19',
    skills: ['.Net Framework, .Net Core, C#, JavaScript', 'HTML5, CSS, Bootstrap, JQuery', 'Entity Framework, SQL Server', 'Git, GitLab', 'NUnit - XUnit'],
    line: false,
  },
]
