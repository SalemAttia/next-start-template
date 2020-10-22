import Link from 'next/link'

export default function Header() {
  return (
    <div className="center">
        <Link href="/">
          <a className="h-tag">Blog</a>
        </Link>

        <Link href="/users-swr">
          <a className="h-tag">Swr</a>
        </Link>

        <Link href="/users-sp">
          <a className="h-tag">sp</a>
        </Link>

        <Link href="/users-ssr">
          <a className="h-tag">ssr</a>
        </Link>
        .
    </div>
  )
}
