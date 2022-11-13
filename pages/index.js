import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

//export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
 // const res = await fetch('..');
//  return res.json();
//}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.aboutMe}>
        <p>16 year old <b>Pro</b>grammer</p>
        <ul>
          <li>
            Funny
          </li>
          <li>
            Cool
          </li>
          <li>
            Smart
          </li>
          <li>
            Did I say Funny...
          </li>
        </ul>
        <p>
          <i>"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."</i> - A quote from a tiktok I saw some time ago
          </p>
          </div>
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
      