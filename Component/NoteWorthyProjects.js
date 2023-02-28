import React from 'react';
import Carousel from "react-material-ui-carousel";

const projects = [
    {
        name: "Room Swap Bootstrap",
        url: "https://github.com/shehan-sandaruwan/bootstrap-room-swap",
        techs: ["HTML5", "SCSS", "Bootstrap", "JavaScript"],
        description: "This project is developed for one of my freelance clients. Followed Adobe XD as Design spec.",
        images: ['/images/room-swap/rm-1.png', '/images/room-swap/rm-2.png', '/images/room-swap/rm-3.png', '/images/room-swap/rm-4.png']
    },
    {
        name: "Document Collapse",
        url: "https://github.com/shehan-sandaruwan/document-collapse",
        images: ['/images/document/dc-1.png', '/images/document/dc-2.png', '/images/document/dc-3.png'],
        techs: ["HTML5", "CSS", "MUI", "JavaScript", "Reactjs"],
        description: "This project is developed for one of my freelance clients. Requiremen was to developed collapsible document view with outline project explorer.This was required to use MUI tree and related components.",
       
    },
    {
        name: "WhatsApp Configuration Page",
        url: "https://github.com/shehan-sandaruwan/document-collapse",
       images: ['/images/whatsapp/wc1.png', '/images/whatsapp/wc2.png', '/images/whatsapp/wc3.png', '/images/whatsapp/wc4.png', '/images/whatsapp/wc5.png'],
        techs: ["HTML5", "i18n", "react-bootstrap", "JavaScript", "Reactjs", "classes"],
        description: "Developed configurable web page to integrate with WhatsApp",
    },
]

const NoteWorthyProjects = () => {

    return (
        <React.Fragment>
            <div className='noteworthy-project'>
            {projects.map(project => {
                return(
                    <div className='card-container'>
                        <div className='card-header'>
                            {project.images && (
                                <div className="carouselContainer">
                                <Carousel>
                                {project.images?.map((item, index) => {
                                  return (
                                    <div
                                    cla
                                      key={index}
                                    >
                                      <div
                                       className='bg-image'
                                        style={{ backgroundImage: `url(${item})` }}
                                      ></div>
                                    </div>
                                  );
                                })}
                              </Carousel>
                              </div>
                            )}
                        </div>
                        <div className='card-footer'>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className='chips-container'>
                                    {project.techs.map(item => {
                                        return(
                                            <div className='tech-chip'>{item}</div>
                                        )
                                    })}
                                </div>
                        </div>
                        <a className='link-src' href={project.url} target="_blank">Source code</a>
                    </div>
                )
            })}
            </div>
        </React.Fragment>
    )

}

export default NoteWorthyProjects;