/** @jsx jsx */
import { jsx } from "theme-ui"
import { SocialFooter } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"

const SiteFooter = () => {
  const { title } = useSiteMetadata()
  return (
    <footer
      sx={{
        color: "footer.text",
        backgroundColor: "footer.background",
        px: 3,
        py: 3,

        a: {
          color: "footer.links",
        },

        "a:hover": {
          color: "primary",
        },
      }}
    >
      <div
        sx={{
          width: "100%",
          maxWidth: "maxPageWidth",
          mx: "auto",
          my: 0,
        }}
      >
        <div
          sx={{
            a: {
              color: "footer.icons",
              mr: 3,
            },
            "a:last-of-type": {
              mr: 0,
            },
            "a:hover": {
              color: "primary",
            },
          }}
        >
          <SocialFooter />
        </div>
        <p
          sx={{
            my: 0,
          }}
        >
          Illustrations by{" "}
          <a href="https://twitter.com/diana_valeanu">Diana Valeanu</a>
          <br />
          Design inspired by{" "}
          <a href="https://www.gatsbyjs.org/starters/ajayns/gatsby-absurd/">
            Gatsby-Absurd
          </a>
          <br />© {new Date().getFullYear()} {title}
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
