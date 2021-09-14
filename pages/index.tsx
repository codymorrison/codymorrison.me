import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import styles from "../styles/Home.module.css";

import vzHomepageImage from "../public/images/verizon/homepage.png";
import strivrHomepageImage from "../public/images/strivr/homepage.png";
import { useState } from "react";

const Home: NextPage = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cody Morrison - Software Engineer</title>
        <meta
          name="description"
          content="Cody Morrison is a software engineer living in the greater Seattle, WA area. Here you can find more information about him and his work."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className={styles.social}></aside>

      <main className={styles.main}>
        <aside className={styles.social}>
          <ul className={styles.listInline}>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <button>
                <FaFilePdf /> Resume
              </button>
            </li>
          </ul>
        </aside>
        <h1 className={styles.title}>Cody Morrison</h1>

        <p className={styles.description}>
          I&#39;m a software engineer with over <strong>15</strong> years of
          experience designing and building complex web applications.
        </p>

        <article className={styles.jobContainer}>
          <div className={styles.jobSlideContainer}>
            {activeSlideIndex === 0 && (
              <section>
                <Image
                  src={strivrHomepageImage}
                  className={styles.jobImage}
                  alt="placeholder"
                  width={600}
                  height={309}
                />
                <header className={styles.jobTitle}>
                  <h2>STRIVR</h2>
                  <div className={styles.jobDate}>
                    2019 - {new Date().getFullYear()}
                  </div>
                </header>

                <p>
                  Designed and developed an LCMS from scratch with a small team
                  to manage Verizon Wireless in house learning. Nulla non porta
                  mauris, sit amet commodo diam. Fusce mauris erat, dapibus
                  convallis maximus at, pretium id quam. Praesent interdum, quam
                  ac semper tempor, ante arcu rhoncus dui, at pulvinar libero
                  lacus vel nisi.
                </p>
                <p>
                  Nunc feugiat auctor quam eu fringilla. Sed quis turpis nunc.
                  Cras in libero et ante congue mattis. Donec vel lectus semper
                  dui gravida pellentesque. Phasellus ut est suscipit, ultricies
                  nibh sit amet, molestie urna. Praesent interdum, quam ac
                  semper tempor, ante arcu rhoncus dui, at pulvinar libero lacus
                  vel nisi.
                </p>
              </section>
            )}
            <hr className={styles.divider} />

            {activeSlideIndex === 0 && (
              <section>
                <Image
                  src={vzHomepageImage}
                  className={styles.jobImage}
                  alt="placeholder"
                  width={600}
                  height={309}
                />
                <header className={styles.jobTitle}>
                  <h2>Verizon Wireless</h2>
                  <div className={styles.jobDate}>2010 - 2019</div>
                </header>

                <p>
                  Designed and developed an LCMS from scratch with a small team
                  to manage Verizon Wireless in house learning. Nulla non porta
                  mauris, sit amet commodo diam. Fusce mauris erat, dapibus
                  convallis maximus at, pretium id quam. Praesent interdum, quam
                  ac semper tempor, ante arcu rhoncus dui, at pulvinar libero
                  lacus vel nisi.
                </p>
                <p>
                  Nunc feugiat auctor quam eu fringilla. Sed quis turpis nunc.
                  Cras in libero et ante congue mattis. Donec vel lectus semper
                  dui gravida pellentesque. Phasellus ut est suscipit, ultricies
                  nibh sit amet, molestie urna. Praesent interdum, quam ac
                  semper tempor, ante arcu rhoncus dui, at pulvinar libero lacus
                  vel nisi.
                </p>
              </section>
            )}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Home;
