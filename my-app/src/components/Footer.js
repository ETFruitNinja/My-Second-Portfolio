import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

export default function Footer() {
    return (
      <div>
        {/* Footer displays logos/links to GitHub, LinkedIn, and YouTube profiles */}
        <a href="https://github.com/ETFruitNinja/">
            <AiFillGithub/>
        </a>
        <a href="https://www.linkedin.com/in/jeffrey-yeh-9a3928166/">
            <AiFillLinkedin/>
        </a>
        <a href="https://www.youtube.com/channel/UCuc2d6DM-LYEypFZPCLtB6Q">
            <AiFillYoutube/>
        </a>
      </div>
    );
  }