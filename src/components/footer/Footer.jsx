import styles from './Footer.module.css';
import facebookLogo from '../../assets/facebook-logo.svg';
import instagramLogo from '../../assets/instagram-logo.svg';
import linkedinLogo from '../../assets/linkedin-logo.svg';
import twitterLogo from '../../assets/twitter-logo.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>ABC Inc.</span>
        <span>(999) 999-1111</span>
        <span>123 Mulholland Dr.</span>
        <span>Pangeae, ZZ 54321-1234</span>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookLogo} alt="Facebook logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramLogo} alt="Instagram logo" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <img src={twitterLogo} alt="Twitter logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinLogo} alt="Linkedin logo" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
