import styles from "./friendlistitem.module.css";
import PropTypes from "prop-types";

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={styles.item}>
            <span className={styles.status} style={{ backgroundColor: isOnline ? "green" : 'red' }}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
};

export default FriendListItem