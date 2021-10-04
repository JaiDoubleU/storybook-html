import './header.css';
import { createButton } from './Button';

export const createHeader = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const logo =
   ` <?xml version="1.0" encoding="UTF-8"?>
        <svg height="32px" viewBox="0 0 172 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>e-prod-name-white__generic</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="e-prod-name-white__next" transform="translate(0.500000, 0.500000)">
                    <g id="Enverus-E" transform="translate(0.000000, 0.954679)">
                        <path d="M17,8.3 L17,5.8 L11,5.8 L11,2.7 L17.2,2.7 L17.2,0 L8,0 L8,11.9 L11,11.9 L11,8.3 L17,8.3 Z M11,14.5 L17.6,14.5 L17.6,11.9 L11,11.9 L11,14.5 Z" id="Fill-11" fill="#FFFFFF"></path>
                        <polygon id="Fill-13" fill="#A0EF6E" points="3.6 14.5 8 14.5 8 11.9 3.6 11.9"></polygon>
                        <polygon id="Fill-15" fill="#A0EF6E" points="0 8.3 3 8.3 3 5.8 0 5.8"></polygon>
                        <polygon id="Fill-16" fill="#56BC2F" points="5 8.3 17 8.3 17 5.8 5 5.8"></polygon>
                    </g>
                    <path d="M39.3810547,14.2726563 L39.3810547,9.06074219 L42.6330078,9.06074219 C44.0392578,9.06074219 45.1129883,8.73408203 45.8541992,8.08076172 C46.5954102,7.42744141 46.9660156,6.50019531 46.9660156,5.29902344 C46.9660156,4.10957031 46.5807617,3.175 45.8102539,2.4953125 C45.0397461,1.815625 43.9894531,1.47578125 42.659375,1.47578125 L42.659375,1.47578125 L38.3,1.47578125 L38.3,14.2726563 L39.3810547,14.2726563 Z M42.659375,8.14667969 L39.3810547,8.14667969 L39.3810547,2.39863281 L42.7296875,2.39863281 C43.7375,2.41035156 44.515332,2.67841797 45.0631836,3.20283203 C45.6110352,3.72724609 45.8849609,4.43183594 45.8849609,5.31660156 C45.8849609,6.20722656 45.6095703,6.9015625 45.0587891,7.39960938 C44.5080078,7.89765625 43.7082031,8.14667969 42.659375,8.14667969 L42.659375,8.14667969 Z M50.4464844,14.2726563 L50.4464844,8.94648438 L54.1642578,8.94648438 L57.2580078,14.2726563 L58.409375,14.2726563 L58.409375,14.1583984 L55.2101562,8.71796875 C56.01875,8.47773438 56.6632812,8.04414063 57.14375,7.4171875 C57.6242187,6.79023438 57.8644531,6.06660156 57.8644531,5.24628906 C57.8644531,4.05683594 57.4806641,3.13105469 56.7130859,2.46894531 C55.9455078,1.80683594 54.8791016,1.47578125 53.5138672,1.47578125 L53.5138672,1.47578125 L49.3566406,1.47578125 L49.3566406,14.2726563 L50.4464844,14.2726563 Z M53.7599609,8.02363281 L50.4464844,8.02363281 L50.4464844,2.39863281 L53.4962891,2.39863281 C54.5333984,2.39863281 55.3390625,2.64765625 55.9132812,3.14570313 C56.4875,3.64375 56.7746094,4.34394531 56.7746094,5.24628906 C56.7746094,6.06660156 56.4992187,6.73457031 55.9484375,7.25019531 C55.3976562,7.76582031 54.6681641,8.02363281 53.7599609,8.02363281 L53.7599609,8.02363281 Z M65.2912109,14.4484375 C66.2814453,14.4484375 67.1544922,14.2082031 67.9103516,13.7277344 C68.6662109,13.2472656 69.2477539,12.5617188 69.6549805,11.6710938 C70.062207,10.7804688 70.2658203,9.74628906 70.2658203,8.56855469 L70.2658203,8.56855469 L70.2658203,7.03925781 C70.2482422,5.89667969 70.034375,4.89179688 69.6242187,4.02460938 C69.2140625,3.15742188 68.6325195,2.48652344 67.8795898,2.01191406 C67.1266602,1.53730469 66.2580078,1.3 65.2736328,1.3 C64.2892578,1.3 63.4191406,1.54169922 62.6632812,2.02509766 C61.9074219,2.50849609 61.3229492,3.19990234 60.9098633,4.09931641 C60.4967773,4.99873047 60.2902344,6.03144531 60.2902344,7.19746094 L60.2902344,7.19746094 L60.2902344,8.51582031 C60.2902344,10.3322266 60.7501953,11.7750977 61.6701172,12.8444336 C62.5900391,13.9137695 63.7970703,14.4484375 65.2912109,14.4484375 Z M65.2912109,13.5080078 C64.0841797,13.5080078 63.1291016,13.0641602 62.4259766,12.1764648 C61.7228516,11.2887695 61.3712891,10.0861328 61.3712891,8.56855469 L61.3712891,8.56855469 L61.3712891,7.23261719 C61.3712891,5.66230469 61.7243164,4.43916016 62.4303711,3.56318359 C63.1364258,2.68720703 64.0841797,2.24921875 65.2736328,2.24921875 C66.4865234,2.24921875 67.4416016,2.68574219 68.1388672,3.55878906 C68.8361328,4.43183594 69.1847656,5.63886719 69.1847656,7.17988281 L69.1847656,7.17988281 L69.1847656,8.53339844 C69.1847656,10.0978516 68.8419922,11.3180664 68.1564453,12.194043 C67.4708984,13.0700195 66.5158203,13.5080078 65.2912109,13.5080078 Z M76.4884766,14.2726563 C77.5783203,14.2726563 78.5436523,14.0324219 79.3844727,13.5519531 C80.225293,13.0714844 80.8771484,12.3888672 81.3400391,11.5041016 C81.8029297,10.6193359 82.034375,9.60566406 82.034375,8.46308594 L82.034375,8.46308594 L82.034375,7.28535156 C82.034375,6.14863281 81.8014648,5.13496094 81.3356445,4.24433594 C80.8698242,3.35371094 80.2208984,2.66962891 79.3888672,2.19208984 C78.5568359,1.71455078 77.6164062,1.47578125 76.5675781,1.47578125 L76.5675781,1.47578125 L72.9904297,1.47578125 L72.9904297,14.2726563 L76.4884766,14.2726563 Z M76.4972656,13.3585938 L74.0714844,13.3585938 L74.0714844,2.39863281 L76.5851562,2.39863281 C77.8976562,2.40449219 78.9552734,2.84980469 79.7580078,3.73457031 C80.5607422,4.61933594 80.9621094,5.79707031 80.9621094,7.26777344 L80.9621094,7.26777344 L80.9621094,8.39277344 C80.9621094,9.91621094 80.5548828,11.124707 79.7404297,12.0182617 C78.9259766,12.9118164 77.8449219,13.3585938 76.4972656,13.3585938 L76.4972656,13.3585938 Z M89.0832031,14.4484375 C89.9679687,14.4484375 90.7516602,14.2770508 91.4342773,13.9342773 C92.1168945,13.5915039 92.6457031,13.1007813 93.0207031,12.4621094 C93.3957031,11.8234375 93.5861328,11.0734375 93.5919922,10.2121094 L93.5919922,10.2121094 L93.5919922,1.47578125 L92.5021484,1.47578125 L92.5021484,10.1417969 C92.5021484,11.2082031 92.1959961,12.0402344 91.5836914,12.6378906 C90.9713867,13.2355469 90.1378906,13.534375 89.0832031,13.534375 C88.0285156,13.534375 87.1935547,13.2370117 86.5783203,12.6422852 C85.9630859,12.0475586 85.6554687,11.2111328 85.6554687,10.1330078 L85.6554687,10.1330078 L85.6554687,1.47578125 L84.5832031,1.47578125 L84.5832031,10.2912109 C84.6125,11.5919922 85.0329102,12.6100586 85.8444336,13.3454102 C86.655957,14.0807617 87.7355469,14.4484375 89.0832031,14.4484375 Z M100.957227,14.4484375 C102.316602,14.4484375 103.40498,14.0910156 104.222363,13.3761719 C105.039746,12.6613281 105.52168,11.6300781 105.668164,10.2824219 L105.668164,10.2824219 L104.57832,10.2824219 C104.443555,11.3664063 104.089062,12.1793945 103.514844,12.7213867 C102.940625,13.2633789 102.088086,13.534375 100.957227,13.534375 C99.8146484,13.534375 98.9079102,13.0949219 98.2370117,12.2160156 C97.5661133,11.3371094 97.2306641,10.159375 97.2306641,8.6828125 L97.2306641,8.6828125 L97.2306641,7.11835938 C97.2306641,5.5890625 97.5749023,4.39082031 98.2633789,3.52363281 C98.9518555,2.65644531 99.8761719,2.22285156 101.036328,2.22285156 C103.128125,2.22285156 104.308789,3.30976563 104.57832,5.48359375 L104.57832,5.48359375 L105.668164,5.48359375 C105.539258,4.17695313 105.077832,3.15302734 104.283887,2.41181641 C103.489941,1.67060547 102.407422,1.3 101.036328,1.3 C100.063672,1.3 99.2038086,1.53876953 98.4567383,2.01630859 C97.709668,2.49384766 97.1369141,3.17207031 96.7384766,4.05097656 C96.3400391,4.92988281 96.1408203,5.93769531 96.1408203,7.07441406 L96.1408203,7.07441406 L96.1408203,8.73554688 C96.1466797,9.8546875 96.3488281,10.8493164 96.7472656,11.7194336 C97.1457031,12.5895508 97.709668,13.2619141 98.4391602,13.7365234 C99.1686523,14.2111328 100.008008,14.4484375 100.957227,14.4484375 Z M112.593945,14.2726563 L112.593945,2.39863281 L116.979687,2.39863281 L116.979687,1.47578125 L107.135937,1.47578125 L107.135937,2.39863281 L111.512891,2.39863281 L111.512891,14.2726563 L112.593945,14.2726563 Z M124.511914,14.2726563 L124.511914,3.32148438 L131.868359,14.2726563 L132.949414,14.2726563 L132.949414,1.47578125 L131.877148,1.47578125 L131.877148,12.4357422 L124.511914,1.47578125 L123.42207,1.47578125 L123.42207,14.2726563 L124.511914,14.2726563 Z M135.981641,14.2726563 L137.3,10.6867188 L143.10957,10.6867188 L144.436719,14.2726563 L145.561719,14.2726563 L140.718945,1.47578125 L139.690625,1.47578125 L134.847852,14.2726563 L135.981641,14.2726563 Z M142.766797,9.76386719 L137.633984,9.76386719 L140.200391,2.79414063 L142.766797,9.76386719 Z M148.523633,14.2726563 L148.523633,8.66523438 L148.435742,3.03144531 L153.181836,14.2726563 L154.016797,14.2726563 L158.780469,2.9875 L158.692578,8.70039063 L158.692578,14.2726563 L159.773633,14.2726563 L159.773633,1.47578125 L158.332227,1.47578125 L153.594922,12.7697266 L148.875195,1.47578125 L147.442578,1.47578125 L147.442578,14.2726563 L148.523633,14.2726563 Z M170.979688,14.2726563 L170.979688,13.3585938 L164.097852,13.3585938 L164.097852,8.13789063 L170.083203,8.13789063 L170.083203,7.22382813 L164.097852,7.22382813 L164.097852,2.39863281 L170.935742,2.39863281 L170.935742,1.47578125 L163.016797,1.47578125 L163.016797,14.2726563 L170.979688,14.2726563 Z" id="PRODUCTNAME" fill="#FFFFFF" fill-rule="nonzero"></path>
                    <line x1="28" y1="0" x2="28" y2="16" id="Line" stroke="#FFFFFF" stroke-linecap="square"></line>
                </g>
            </g>
        </svg>`;
    
    var rightMenu;
    if (user) {
        rightMenu = '<span><a href="" aria-label=”User Menu” class="navbar-link"><i class="fas fa-user"></i> </a><a href="" aria-label=”Sign Out” class="navbar-link"><i class="fas fa-sign-out"></i> </a></span>';
    } else {
        rightMenu = '<span><a href="" aria-label=”Sign In” class="navbar-link"><i class="fas fa-sign-in"></i> </a></span>';
    }
    var headerHTML = '<header> <div  class="navbar">' + logo +rightMenu +'</div></header>';
    
    return headerHTML; 
};
