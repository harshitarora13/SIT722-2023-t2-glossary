const express = require('express');
const app = express();

const data = [
  {id:1, 
  term:'DevOps',
  description:'For software development, DevOps is comparable to a team sport. The key is to have a close working relationship between those who create the program and those who ensure that it functions properly.',
  reference:'https://en.wikipedia.org/wiki/DevOps' },
  {id:2,
  term:'Continous Integration',
  description:'Continuous Integration (CI) is a development technique in which frequent automatic integration of changed code into a shared repository is used. To ensure the quality of the code, each integration starts automated tests. Early in the development cycle, it assists in locating and fixing problems.',
  reference:'https://en.wikipedia.org/wiki/DevOps' },
  {id:3, 
  term:'Continous Delivery',
  description:'The goal of Continuous distribution (CD), a branch of Continuous Integration (CI), is to automate the distribution of code to environments in production or staging. It seeks to guarantee that code is constantly in a deployable condition and prepared for deployment.',
  reference:'https://en.wikipedia.org/wiki/DevOps' },
  {id:4,
   term:'Version Control system',
   description:'Multiple developers can effectively cooperate on a project with the help of a version control system (VCS), a technology that keeps track of changes to source code over time. It helps resolve conflicts and preserves a record of code revisions. A popular VCS is called Git.',
   reference:'https://en.wikipedia.org/wiki/DevOps' },
  {id:5, 
  term:'Containerization',
  description:' With the use of the technology known as containerization, a program and all of its dependencies can be packaged into a small, transportable container. When used with tools like Docker, containers provide consistency across several environments and facilitate quick deployment.',
  reference:'https://en.wikipedia.org/wiki/DevOps' },
  {id:6, 
  term:'Orchestration',
  description:'Applications running in containers are managed and coordinated automatically through orchestration to make sure they are effective and scale as required. Popular orchestration tool Kubernetes is widely used.',
  reference:'https://en.wikipedia.org/wiki/DevOps' },
  {id:7, 
  term:'Infrastructure as code',
  description:'Using code and automation scripts, infrastructure as code (IaC) manages and provisionally deploys infrastructure (servers, networks, etc.). It makes infrastructure setup repeatable and consistent.',
  reference:'https://en.wikipedia.org/wiki/DevOps' },
  {id:8,
  term:'Continnous Monitoring',
  description:'Real-time performance and infrastructure health are monitored continuously to determine how well they are working. It aids in problem detection, maintains the dependability of the system, and optimizes resource utilization.',
  reference:'https://en.wikipedia.org/wiki/DevOps' },
  {id:9,
   term:'Microservices',
   description:'A large application is divided into a number of small, independent services called microservices. These services can be created, deployed, and scaled individually. It supports scalability and adaptability.',
   reference:'https://en.wikipedia.org/wiki/DevOps' },
  {id:10, 
  term:'Deployment Pipeline',
  description:'From development to production, code follows an automated process called a deployment pipeline. For a consistent release process, it typically consists of building, testing, and deploying stages.',
  reference:'https://en.wikipedia.org/wiki/DevOps' }
];

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { data });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
