import styles from './Banner.module.css';

type BannerProps = {
    src: string;
    alt: string;
};

const Banner = ({ src, alt }: BannerProps) => {
    return <img className={styles.banner} src={src} alt={alt} />;
};

export default Banner;