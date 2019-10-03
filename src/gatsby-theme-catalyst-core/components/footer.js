/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { SocialFooterIcons } from "gatsby-theme-catalyst-core";

const SiteFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          socialLinks {
            name
            url
          }
        }
      }
    }
  `);
  return (
    <footer
      sx={{
        color: "footer.text",
        backgroundColor: "footer.background",
        px: 3,
        py: 3,

        a: {
          color: "footer.links"
        },

        "a:hover": {
          color: "primary"
        }
      }}
    >
      <div
        sx={{
          a: {
            color: "footer.icons",
            mr: 3
          },
          "a:last-of-type": {
            mr: 0
          },
          "a:hover": {
            color: "primary"
          }
        }}
      >
        <SocialFooterIcons />
      </div>
      <p
        sx={{
          my: 0
        }}
      >
        Illustrations by{" "}
        <a href="https://twitter.com/diana_valeanu">Diana Valeanu</a>
        <br />
        Design inspired by{" "}
        <a href="https://www.gatsbyjs.org/starters/ajayns/gatsby-absurd/">
          Gatsby-Absurd
        </a>
        <br />© {new Date().getFullYear()} {data.site.siteMetadata.title}
      </p>
    </footer>
  );
};

export default SiteFooter;
