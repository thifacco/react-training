import styles from './Link.module.css';
import React from 'react';

const Link = ({ children, ...rest }: { children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={styles.link} {...rest}>{children}</a>
  )
}

export default Link;