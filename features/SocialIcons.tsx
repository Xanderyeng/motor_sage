import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SocialIcons() {
  return (
    <>
    <div className="footer-grids  w3l-socialmk mt-3">
							<h3 className="text-white font-weight-bold mb-3">Follow Us on</h3>
							<div className="social">
								<ul>
									<li>
										<a className="icon fb" href="#">
                                        {/* <FontAwesomeIcon icon="fa-facebook" /> */}
										</a>
									</li>
									<li>
										<a className="icon tw" href="#">
                                        {/* <FontAwesomeIcon icon="fa-twitter" /> */}
										</a>
										
									</li>                           
									<li>
										<a className="icon gp" href="#">
                                        {/* <FontAwesomeIcon icon={faInstagram} /> */}
                                        </a>
									</li>
								</ul>
							</div>
						</div>
    </>
  )
}
