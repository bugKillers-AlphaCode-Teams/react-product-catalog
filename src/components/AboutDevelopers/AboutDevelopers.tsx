import styles from "./AboutDevelopers.module.scss";
import linkEdinIcon from "../../images/icons/icons8-linkedin-blue.svg";
import gitHub from "../../images/icons/icons8-github-black.svg";

export const AboutDevelopers = () => {
  return (
    <section className={styles.aboutDevelopers}>
      <h2 className={styles.teamTitle}>
        This project was developed by the international team of "Alpha Code
        Team"
      </h2>
      <h2 className={styles.languageTitle}>
        In this product, we spoke the language of Apple technology
      </h2>

      <div className={styles.team}>
        <div className={`${styles.teamMember} ${styles.teamMember0}`}>
          
          <h3 className={styles.teamName}>Ruslan Hnatyshyn</h3>
          <p className={styles.teamPosition}>Frontend Developer</p>
          <p className={styles.teamDescription}>developer of black humor</p>
          <div className={styles.teamLinks}>
            <a
              href="https://www.linkedin.com/in/%D1%80%D1%83%D1%81%D0%BB%D0%B0%D0%BD-%D0%B3%D0%BD%D0%B0%D1%82%D0%B8%D1%88%D0%B8%D0%BD-459445281/"
              target="_blank"
              className={styles.linkedinLink}
            >
              <img src={linkEdinIcon} alt="LinkedIn Icon" className={styles.teamIconLinkEdin } />
            </a>

            <a
              href="https://github.com/RuslanHnatyshyn"
              target="_blank"
              className={styles.gitHubLink}
            >
              <img src={gitHub} alt="Git Hub Icon" className={styles.teamIconGitHub } />
            </a>
          </div>
        </div>

        <div className={`${styles.teamMember} ${styles.teamMember1}`}>
          
          <h3 className={styles.teamName}>Vasyl Humen</h3>
          <p className={styles.teamPosition}>Frontend Developer</p>
          <p className={styles.teamDescription}>????</p>
          <div className={styles.teamLinks}>
            <a
              href=""
              target="_blank"
              className={styles.linkedinLink}
            >
              <img src={linkEdinIcon} alt="LinkedIn Icon" className={styles.teamIconLinkEdin } />
            </a>

            <a
              href=""
              target="_blank"
              className={styles.gitHubLink}
            >
              <img src={gitHub} alt="Git Hub Icon" className={styles.teamIconGitHub } />
            </a>
          </div>
        </div>

        <div className={`${styles.teamMember} ${styles.teamMember2}`}>
          <h3 className={styles.teamName}>Mariia Naichuk</h3>
          <p className={styles.teamPosition}>Team Lead</p>
          <p className={styles.teamDescription}>????</p>
          <div className={styles.teamLinks}>
            <a
              href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
              target="_blank"
              className={styles.linkedinLink}
            >
              <img src={linkEdinIcon} alt="LinkedIn Icon" className={styles.teamIconLinkEdin } />
            </a>

            <a
              href="https://github.com/MariCodec"
              target="_blank"
              className={styles.gitHubLink}
            >
              <img src={gitHub} alt="Git Hub Icon" className={styles.teamIconGitHub } />
            </a>
          </div>
        </div>

        <div className={`${styles.teamMember} ${styles.teamMember3}`}>
          <h3 className={styles.teamName}>Oleksandr Kopaevych</h3>
          <p className={styles.teamPosition}>Tech Lead</p>
          <p className={styles.teamDescription}>????</p>
          <div className={styles.teamLinks}>
            <a
              href="https://www.linkedin.com/in/oleksandr-kopaievych-158318177/"
              target="_blank"
              className={styles.linkedinLink}
            >
              <img src={linkEdinIcon} alt="LinkedIn Icon" className={styles.teamIconLinkEdin } />
            </a>

            <a
              href="https://github.com/Oleksandr-kopaevich"
              target="_blank"
              className={styles.gitHubLink}
            >
              <img src={gitHub} alt="Git Hub Icon" className={styles.teamIconGitHub } />
            </a>
          </div>
        </div>

        <div className={`${styles.teamMember} ${styles.teamMember4}`}>
          <h3 className={styles.teamName}>Oleksandr Rusinka</h3>
          <p className={styles.teamPosition}>Frontend Developer</p>
          <p className={styles.teamDescription}>????</p>
          <div className={styles.teamLinks}>
            <a
              href=""
              target="_blank"
              className={styles.linkedinLink}
            >
              <img src={linkEdinIcon} alt="LinkedIn Icon" className={styles.teamIconLinkEdin } />
            </a>

            <a
              href=""
              target="_blank"
              className={styles.gitHubLink}
            >
              <img src={gitHub} alt="Git Hub Icon" className={styles.teamIconGitHub } />
            </a>
          </div>
        </div>

        <div className={`${styles.teamMember} ${styles.teamMember5}`}>
          <h3 className={styles.teamName}>Yaroslav Leshchenko</h3>
          <p className={styles.teamPosition}>Frontend Developer</p>
          <p className={styles.teamDescription}>????</p>
          <div className={styles.teamLinks}>
            <a
              href=""
              target="_blank"
              className={styles.linkedinLink}
            >
              <img src={linkEdinIcon} alt="LinkedIn Icon" className={styles.teamIconLinkEdin } />
            </a>

            <a
              href=""
              target="_blank"
              className={styles.gitHubLink}
            >
              <img src={gitHub} alt="Git Hub Icon" className={styles.teamIconGitHub } />
            </a>
          </div>
        </div>
      </div>

      <h2 className={styles.ambitiousTitle}>
        We are a team of ambitious developers united by love for our craft
      </h2>
      <h2 className={styles.goalTitle}>
      We are united by the goal of creating the best product in the world
      </h2>
    </section>
  );
};
