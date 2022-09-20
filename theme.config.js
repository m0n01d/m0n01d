const YEAR = new Date().getFullYear()

export default {
  readMore: <p style={{ marginLeft: '1rem' }}>Read More →</p>,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Dwight Doane
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head: (
    <>
      <meta name="hello" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/favicon_io/site.webmanifest" />
    </>
  ),
  darkMode: true,
  font: false
}
