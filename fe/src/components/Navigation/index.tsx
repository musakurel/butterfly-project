import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => <nav>
  <ul>
    <li><Link to="/beers">Beers</Link></li>
    <li><Link to="/create">Create</Link></li>
  </ul>
</nav>

export default Navigation
