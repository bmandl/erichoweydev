/** @jsx jsx */
import { jsx, Button, Styled } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import SectionWrapper from "./section-wrapper"
import SectionHeader from "./section-header"
import WorkCard from "./work-card"
import { rain, darkRain } from "./patterns"
import { motion } from "framer-motion"

const SiteSection = () => {
  const data = useStaticQuery(graphql`
    query {
      projectImage1: file(relativePath: { eq: "work-catalyst.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      projectImage2: file(relativePath: { eq: "work-mmbc-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      projectImage3: file(relativePath: { eq: "work-bsharpe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo1: file(relativePath: { eq: "gatsby-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo2: file(relativePath: { eq: "react-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo3: file(relativePath: { eq: "next-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo4: file(relativePath: { eq: "sanity-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo5: file(relativePath: { eq: "netlify-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const handMotion = {
    rest: { rotate: 0 },
    hover: {
      rotate: [35, -15, 15, -5, 0],
      transition: {
        duration: 1.2,
      },
    },
  }
  return (
    <SectionWrapper
      id="work"
      bg="secondary"
      pattern={rain}
      darkpattern={darkRain}
    >
      <SectionHeader>Selected Work</SectionHeader>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 4,
          maxWidth: "maxPageWidth",
          margin: "0 auto",
          pt: 5,
        }}
      >
        <WorkCard
          link="https://www.mindmapbc.ca/"
          image={data.projectImage2.childImageSharp.fluid}
          title="www.mindmapbc.ca"
          description="A custom made database of mental health resources. Includes geolocation, mapping, and advanced search functionality. Built using Gatsby and SANITY."
        />
        <WorkCard
          link="https://www.gatsbycatalyst.com"
          image={data.projectImage1.childImageSharp.fluid}
          title="Gatsby Theme Catalyst"
          description="A set of opinionated themes and starters I built to accelerate my
              own workflow when building new Gatsby projects. Uses ThemeUI and MDX. Free and open
              source."
        />
        <WorkCard
          link="https://www.briannasharpe.com/"
          image={data.projectImage3.childImageSharp.fluid}
          title="www.briannasharpe.com"
          description="A portfolio website to showcase Brianna's freelance
              writing and personal brand. Built using Gatsby and SANITY."
        />
      </div>
      <div
        sx={{
          mt: 4,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Styled.h3
          sx={{
            mt: 0,
          }}
        >
          Curious?
        </Styled.h3>
        <Styled.p
          sx={{
            mt: 0,
            mb: 4,
          }}
        >
          Follow the journey from hello to finished product.
        </Styled.p>
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          sx={{ position: "relative" }}
        >
          <Button
            variant="primary"
            as={Link}
            to="/it-starts-with-hello/"
            sx={{ display: "flex" }}
          >
            It starts with hello
            <motion.div sx={{ ml: 2 }} variants={handMotion}>
              <span role="img" aria-label="Waving hand">
                👋
              </span>
            </motion.div>
          </Button>
        </motion.div>
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: ["320px", null, "500px", null, null],
          mx: "auto",
          mt: 5,
          mb: 0,
        }}
      >
        <Img
          sx={{
            width: ["36px", null, "50px", null, null],
          }}
          fluid={data.logo2.childImageSharp.fluid}
          alt="React"
          imgStyle={{ objectFit: "contain" }}
        />
        <Img
          sx={{
            width: ["36px", null, "50px", null, null],
          }}
          fluid={data.logo1.childImageSharp.fluid}
          alt="GatsbyJS"
          imgStyle={{ objectFit: "contain" }}
        />
        <Img
          sx={{
            width: ["42px", null, "65px", null, null],
          }}
          fluid={data.logo3.childImageSharp.fluid}
          alt="NextJs"
        />
        <Img
          sx={{
            width: ["36px", null, "50px", null, null],
          }}
          fluid={data.logo4.childImageSharp.fluid}
          alt="Sanity"
          imgStyle={{ objectFit: "contain" }}
        />
        <Img
          sx={{
            width: ["36px", null, "50px", null, null],
          }}
          fluid={data.logo5.childImageSharp.fluid}
          alt="Netlify"
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
    </SectionWrapper>
  )
}
export default SiteSection
