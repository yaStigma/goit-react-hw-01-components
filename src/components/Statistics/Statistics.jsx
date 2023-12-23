import styles from './statistics.module.css';

function Statistics({title, stats}) {
    
    function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }

    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                {stats.map((stat) => (
                    <li key={stat.id} className={styles.item} style={{backgroundColor: getRandomHexColor()}}>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Statistics