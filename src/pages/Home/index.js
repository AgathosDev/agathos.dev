import React from 'react';
import { FiFacebook, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import './styles.scss';

export default function Home() {
  return (
    <div className="home">
      <p>Em desenvolvimento</p>
      <main>
        <h3>Agathos</h3>
        <div>
          <a href="https://www.facebook.com/agathosdev" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="https://github.com/AgathosDev" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/company/agathosdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
          <a href="mailto:agathosdev@gmail.com">
            <FiMail />
          </a>
        </div>
      </main>
    </div>
  );
}
