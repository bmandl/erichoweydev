// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
// Try changing some of the colors below to see what happens.
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import "typeface-raleway"

export default {
  ...tailwind,
  breakpoints: ["580px", "768px", "1200px", "1440px"],
  fonts: {
    ...tailwind.fonts,
    body: "Raleway, sans-serif",
    siteTitle: "inherit", // Font for main site title
    navLinks: "inherit", // Font for the nav menu links
    alt: "inherit", //An alternate font style if needed.
  },
  colors: {
    ...tailwind.colors,
    primary: baseColors.orange[6],
    secondary: baseColors.orange[6],
    accent: "#9ce5f4",
    textWhite: baseColors.gray[1],
    header: {
      background: "#9ce5f4",
      backgroundOpen: "#2e7da4",
      text: baseColors.gray[8],
      textOpen: baseColors.gray[1],
      icons: baseColors.gray[8],
      iconsHover: baseColors.red[8],
      iconsOpen: baseColors.gray[1],
    },
    footer: {
      background: "#9ce5f4",
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
  },
  sizes: {
    ...tailwind.sizes,
    maxPageWidth: "1440px", // Sets the max width of elements like the header/footer on really large screens
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    contentWidth: "90vw", // Sets the container width on smaller screens, results in a 5vw margin on the left and right
    headerHeight: "auto", // Provides fallback setting to control header height
    logoWidthSmall: "76px", // Logo width on small screens, up to 768px
    logoWidthMedium: "92px", // Logo width on medium screens, 768px - 1024px
    logoWidthLarge: "92px", // Logo width on large screens, above 1024px
    logoHeightSmall: "50px", // Logo height on small screens, up to 768px
    logoHeightMedium: "60px", // Logo width on medium screens, 768px - 1024px
    logoHeightLarge: "60px", // Logo width on large screens, above 1024px
    iconsFooter: "32px", // Sets the icons size for the footer
    iconsHeader: "20px", // Sets the icons size for the header
  },
  styles: {
    ...tailwind.styles,
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 2,
    },
    blockquote: {
      bg: "muted",
      p: 3,
      borderLeft: "5px solid",
      borderColor: "primary",
    },
    inlineCode: {
      fontFamily: "monospace",
      backgroundColor: "muted",
      p: 1,
      fontSize: 2,
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 2,
      overflowX: "auto",
      bg: "muted",
      p: 3,
      border: "1px solid",
      borderColor: "grey",
      borderRadius: "0.25rem",
      code: {
        color: "inherit",
        p: 0,
      },
    },
  },
  variants: {
    main: {
      mt: 0,
    },
  },
}