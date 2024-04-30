import { FaGithub } from "react-icons/fa";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a
          href="https://github.com/Amir-Taheri-Web"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> Created by Amir Taheri
        </a>
    </footer>
  );
};

export default Footer;
