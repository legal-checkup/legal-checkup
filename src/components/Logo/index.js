import React from 'react'
import { StyledLogo } from '../styled'
import { Link } from 'react-router'

export default function Logo () {
  return (
    <StyledLogo>
      <Link to='./images/cl_logo.png' alt=''>
        Home
      </Link>
    </StyledLogo>
  )
}

// import React from 'react';
// import { Link } from 'react-router';

// class List extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>Please choose a repository from the list below.</p>
//                 <ul>
//                     <li><Link to="/react">React</Link></li>
//                 </ul>
//             </div>
//         );
//     }
// }

// export default List;
