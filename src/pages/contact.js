import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
          <p> &rarr;</p>
        </div>
        <div>
           <button className="button -primary" action=>
    <input type="submit" value="Go to Uber Eats" />
           </button>

        <a className="button -primary" href="https://www.ubereats.com/store/shangrila-bistro/9qOxJCKIRFGR-o53jEbXLA?diningMode=DELIVERY">Uber Eats</a>
            
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
