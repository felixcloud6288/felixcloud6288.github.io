import React from "react";
import Header from "../components/Header"
import randProjects from "../utils/portfolioState"
import Card from "react-bootstrap/Card"

const portfolio = ()=>{
    const projects = randProjects;
    console.log(projects)
    return(
        <div>
            <Header page="projects" />
            <p>A random assortment of my repo</p>

            {projects.map(project=>(
                <Card className="text-center">

                    <a href={project.url}>{project.name}</a>
                </Card>
            ))}
            <p className="text-center">Additional projects can be found at <a href="https://github.com/mweston6288">my Github</a></p>

        </div>
    )
}

export default portfolio;