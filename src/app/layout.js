import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = (
  <Banner storageKey="some-key">StackJournal 1.0 is released 🎉</Banner>
);
const navbar = (
  <Navbar
    logo={
      <>
        <svg
          width="35"
          height="35"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 70L50 85L80 70L50 55L20 70Z" fill="#CBD5E1" />

          <path d="M20 50L50 65L80 50L50 35L20 50Z" fill="#94A3B8" />

          <path d="M20 30L50 45L80 30L50 15L20 30Z" fill="#3B82F6" />

          <path
            d="M35 27.5L50 35M35 32.5L55 42.5M45 22.5L65 32.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <span style={{ marginLeft: ".4em", fontWeight: 800, fontSize: "23px" }}>
          StackJournal
        </span>
      </>
    }
    // chatLink="https://discord.com"
    projectLink="https://github.com/sahinmallik/StackJournal"
    // ... Your additional navbar options
  />
);
const footer = (
  <Footer
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    StackJournal {new Date().getFullYear()} © StackJournal.
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/sahinmallik/StackJournal"
          footer={footer}
          editLink="Edit this page on GitHub"
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
