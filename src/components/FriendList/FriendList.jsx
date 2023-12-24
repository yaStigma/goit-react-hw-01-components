import styles from "./friendlist.module.css";

function FriendList({friends}) {
  return (
      <ul className={styles.friendList}>
          {friends.map((friend) => (
              <li key={friend.id} className={styles.item}>
                  <span className={styles.status} style={{backgroundColor: friend.isOnline ? "green" : 'red'}}></span>
                    <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={styles.name}>{friend.name}</p>
              </li>
          ))}
    </ul>
  )
}

export default FriendList