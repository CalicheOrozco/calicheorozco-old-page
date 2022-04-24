import React from "react";
import Image from "next/image";
import { Zoom } from "react-reveal";

const FooterComp = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
    <footer>
      <div className="container pb-0 pt-3 text-white">
        <div className="row text-center">
          <Zoom left>
            <div className="col-12 d-flex gap-3 justify-content-center">
              <a href="https://www.facebook.com/orozcogutierrez">
                <Image
                  width={50}
                  height={40}
                  src="/facebook.png"
                  alt="Facebook"
                  className="pr-2"
                />
              </a>
              <a href="https://twitter.com/Calichemaan">
                <Image
                  width={50}
                  height={40}
                  src="/twitter-circle-512.webp"
                  alt="Twitter"
                  className="pr-2"
                />
              </a>
              <a href="https://www.linkedin.com/in/calicheorozco/">
                <Image
                  width={50}
                  height={40}
                  src="/linkedin.png"
                  alt="Linkedin"
                  className="pr-2"
                />
              </a>
              <a href="https://github.com/CalicheOrozco">
                <Image
                  width={50}
                  height={40}
                  src="/github.png"
                  alt="Github"
                  className="pr-2"
                />
              </a>
              <a href="/cdn-cgi/l/email-protection#ea83848c85aa898b868389828f859885908985c4898587">
                <Image width={50} height={40} src="/gmail.png" alt="Gmail" />
              </a>
            </div>
          </Zoom>
          <div className="col-12 text-white">
            <Zoom right>
              <div className="footer-copyright text-center py-3">
                © {year} Copyright:
                <a href="https://calicheorozco.com/"> calicheorozco.com</a>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
