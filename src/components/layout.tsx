import Footer from './layout/footer'
import Header from './layout/header'
import Meta from './layout/meta'
import style from '../styles/index.css'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    <style jsx global>{style}</style>
    </>
  )
}
