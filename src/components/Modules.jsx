import React from 'react'
import '../styles/Homehero.css'


const moduledata = [
    {
        tag:"day1",
        heading:" Web Development",
        description:"You will develop foundational skills in web development using Angularv17, HTML, and CSS. You’ll also create your own personal portfolio, which you will add to as you progress through the program.",
        // topicCovered:["Master advanced cloud concepts and architectures. ", "Dive into Infrastructure as Code using AWS CloudFormation. ", "Navigate the Cloud Environment Project Lifecycle. ", "Design and implement secure, scalable cloud architectures. "]
    },
    {
        tag:"day2",
        heading:" Front-End Development and Angularv17",
        description:"You will dive deep into front-end development using one of the most popular frameworks, Angular. You will write clean, concise code with Typescript and use these skills to work with web components in Angular. You will learn how to build Angular applications and how to implement.",
        // topicCovered:["Optimize cloud resources and costs effectively", "Manage the Data and Control Plane on AWS.", "Automate cloud deployments with Terraform.", "Explore Access Management and AWS Organizations for governance. "]
    },
]
function Modules() {
  return (
   <div className='module-container'>
    <h1 className="fs-1 text-black text-center mt-5">What you can expect in <span className="text-main">2 days</span>?</h1>
    <p className="fs-6 text-center text-black px-4">
    This program is organized into three main modules using the MERN stack: Web Development, Front-End Development/+React, and Back-End Development. Each module builds on the next, and is designed to prepare you to enter the job market as an entry-level full-stack developer, or to specialize in one of these areas with further skill development.
    </p>
  <div className="conatiner p-3">
    <div className="row align-items-center">
    {
    moduledata.map((item, index)=>(
        <section className=' col-12 col-sm-12 col-md-6 mb-3 h-100'>
            <div className="module p-3 h-100">
            <h4 className="m-tag fs-6 p-1 bg-black text-white">{item.tag}</h4>
        <h1 className="fs-4 text-main">{item.heading}</h1>
        <p className="fs-6">{item.description}</p>
{/*         
        <h4 className="fs-4 text-main">Topics Covered</h4>
        <hr /> */}
      {/* <ul>
      {
            item.topicCovered.map((item1, index1)=>(
                <li className='mb-2'>{item1}</li>
            ))
        }
      </ul> */}
 
            </div>
            </section>
    ))
   }
    </div>
  </div>
   </div>
  )
}

export default Modules
