import Head from "next/head";
import styles from "./index.module.css";
import Hero from "../sections/Hero";
import Nav from "../sections/Nav";
import Footer from "../sections/Footer";
import CTA from "../sections/CTA";
import DynamicComponent from "../sections/DynamicComponent";
import Link from "next/link";

import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";
import { usePreviewSubscription } from "../../lib/sanity";

const query = groq`*[_type == "landingPage" && name == 'main'][0]{
    hero{
      ...,
      featuredProducts[]->{
        name, price,
        image{
          imageAlt,
          asset->
        }
      }
    },
    "content" : contentBuilder[]{
      _type == 'contentCards' => {
        _type, _key, heading,
        cards[]->{
          ...,
          image{
            imageAlt,
            asset->
          }
        }
      },
      _type == 'contentImage' => {
        _type, _key, image{imageAlt,asset->}
      },
      _type == 'contentText' => {
        _type, _key, heading, column1text, column2text
      }
    },
    "cta": {
      "left": leftCTA{
        ...,
        columnImage{
          imageAlt,
          asset->
        }
      },
      "right": rightCTA{
        ...,
        columnImage{
          imageAlt,
          asset->
        }
      }
    }
    
  }`;

const Home = ({ data, preview }) => {
  const { data: page } = usePreviewSubscription(query, {
    initialData: data.homePage,
    enabled: preview,
  });

  const { hero, content, cta } = page;

  return (
    <div className={styles.container}>
      {preview && (
        <div style={{ position: "fixed", top: 0, right: 0, zIndex: "5" }}>
          <Link href="/api/exit-preview">Preview Mode Activated!</Link>
        </div>
      )}
      <Head>
        <title>Planet Caravan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Nav />
        <Hero
          heading={hero.heading}
          paragraph={hero.paragraph}
          buttonText={hero.buttonText}
          buttonUrl={hero.buttonUrl}
          buttonDescription={hero.buttonDescription}
          caravansList={hero.featuredProducts}
        />
      </header>

      <main className={styles.main}>
        {content.map((item) => DynamicComponent(item))}
      </main>
      <CTA left={cta.left} right={cta.right} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export const getStaticProps = async ({ preview = false }) => {
  const homePage = await getClient(preview).fetch(query);

  return {
    props: {
      data: { homePage },
      preview,
    },
  };
};

export default Home;
