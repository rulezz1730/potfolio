import React from 'react';
import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={styles.nav}>
                <a href="#">Main</a>
                <a href="#">Skills</a>
                <a href="#">My works</a>
                <a href="#">Contacts</a>
        </div>
    );
};

export default Nav;