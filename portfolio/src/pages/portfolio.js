import React from "react";
import Header from "../components/Header"
import randProjects from "../utils/portfolioState"
import Card from "react-bootstrap/Card"

const portfolio = ()=>{
    const projects = randProjects;
    console.log(projects)
    return(
        <div>
            <Header page="portfolio" />
            {projects.map(project=>(
                <Card className="text-center">

                    <a href={project.url}>{project.name}</a>
                </Card>
            ))}
        </div>
    )
}

export default portfolio;