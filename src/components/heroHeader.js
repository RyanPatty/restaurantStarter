import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
       
       <a className="button -primary" href="https://www.ubereats.com/store/shangrila-bistro/9qOxJCKIRFGR-o53jEbXLA?diningMode=DELIVERY">Uber Eats</a>
       <a className="button -primary" href="https://postmates.com/store/shangrila-bistro/9qOxJCKIRFGR-o53jEbXLA?diningMode=DELIVERY">Post Mates</a>
      
      
      </div>
    )}
  />
)
