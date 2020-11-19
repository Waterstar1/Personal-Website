import React, { Component, Fragment } from 'react';

class Portfolio extends Component {

  constructor() {
    super();
  }

  render() {

    function content(projects) {
      var projectImage = 'images/portfolio/'+projects.image;
      return (
        <React.Fragment> 
          <img alt={projects.title} src={projectImage} />
            <div className="overlay">
                <div className="portfolio-item-meta">
              <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
            <div className="link-icon"><i className="fa fa-link"></i></div>
        </React.Fragment>
      )
    }
  
    function linkable(projects) {
      if (projects.display) {
        return content(projects);
      } else {
        return (
          <a href={projects.url} target="_blank" title={projects.title}>
            {content(projects)}
          </a>
        )
      }
    }

    if(this.props.data){
      var setModal = this.props.setModal
      var projects = this.props.data.projects.map(function(projects){
        return <div key={projects.title} className="columns portfolio-item">

            <div className="item-wrap" onClick={() => setModal(projects.display, projects.url, projects.title, projects.description)} style={{cursor:'pointer'}}>
              {linkable(projects)}
            </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
