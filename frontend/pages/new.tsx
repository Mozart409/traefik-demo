import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="New | Next.js + TypeScript Example">
    <h1>New Entry 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
