/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const HelloImage2 = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "figma-process.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const image = data.image.childImageSharp.fluid

  return (
    <figure
      sx={{
        mx: 0,
      }}
    >
      <Img
        sx={{
          maxHeight: "400px",
          borderRadius: "4px",
          width: ["100vw", null, null, "85vw", "80vw"],
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: ["-50vw", null, null, "-42.5vw", "-40vw"],
          marginRight: ["-50vw", null, null, "-42.5vw", "-40vw"],
        }}
        fluid={image}
        alt="Figma design process for Briannasharpe.com"
      />
      <figcaption
        sx={{
          color: "grey",
          fontSize: 0,
          textAlign: "center",
          mt: 1,
        }}
      >
        Design process in Figma for briannasharpe.com
      </figcaption>
    </figure>
  )
}

export default HelloImage2
