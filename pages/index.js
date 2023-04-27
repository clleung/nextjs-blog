import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops

// static generation; https://nextjs.org/learn/basics/data-fetching/getstaticprops-details
// server-side rendering: https://nextjs.org/learn/basics/data-fetching/request-time
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Hi, I'm Lisa!</h2>
        <p>
          I'm a first-gen product manager who collaborates with business,
          technology, design, and data to co-create value between systems and
          people.
          <br></br>
          <br></br>
          My work is driven by intention, attention to detail, and the
          triangulation of qualitative and quantitative data.
          <br></br>
          <br></br>
          I'm pursuing a Bachelor of Science in Information Systems and
          Human-Computer Interaction at Carnegie Mellon University, and will be
          graduating May 2023.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h4>
          <Link href="/posts/first-post">First Post</Link>
        </h4>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
