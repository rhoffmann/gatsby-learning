import React from 'react';
import { Link } from 'gatsby';

import styles from './Header.module.css';

const ListLink = props => (
    <li className={styles.listItem}>
        <Link to={props.to}>{ props.children }</Link>
    </li>
);

export default () => (
    <header className={styles.container}>
        <Link to="/" className={styles.siteLink}>
            <h3 className={styles.siteTitle}>Pandas Eating Lots</h3>
        </Link>
        <ul className={styles.list}>
            <ListLink to="/about/">About</ListLink>
        </ul>
    </header>
);