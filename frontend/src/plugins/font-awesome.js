import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight,
  faMagnifyingGlass,
  faBookmark,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faXTwitter,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faArrowRight,
  faLinkedin,
  faXTwitter,
  faInstagram,
  faFacebook,
  faMagnifyingGlass,
  faBookmark,
  faEye,
  faEyeSlash
);

export { FontAwesomeIcon };
