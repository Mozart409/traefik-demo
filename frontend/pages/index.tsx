import Stats from 'components/Stats'
import Link from 'next/link'
import Layout from 'components/Layout'

const IndexPage = () => (
  <Layout title="Home">
    <h1>Hello Next.js 👋</h1>
    <Stats />
  </Layout>
)

export default IndexPage
