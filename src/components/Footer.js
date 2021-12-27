import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="date">
          &copy; {new Date().getFullYear()} copyright:{' '}
          <a
            className="portfolio"
            href="https://devdork.com/"
          >
            devdork.com
          </a>
        </div>
        <div className="socials">
          <ul>
            <li>
              <div className="github">
                <a href="https://github.com/johnsonr84" target="blank">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/robertjohnson1984/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
