import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import css from './UserMenu.module.css';
import authOperations from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};

// import { useDispatch, useSelector } from 'react-redux';
// import authSelectors from 'redux/auth/auth-selectors';
// import authOperations from 'redux/auth/auth-operations';
// import defaultAvatar from './default-avatar.png';

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   avatar: {
//     marginRight: 4,
//   },
//   name: {
//     fontWeight: 700,
//     marginRight: 12,
//   },
// };

// export default function UserMenu() {
//   const dispatch = useDispatch();
//   const name = useSelector(authSelectors.getUsername);
//   const avatar = defaultAvatar;

//   return (
//     <div style={styles.container}>
//       <img src={avatar} alt="" width="32" style={styles.avatar} />
//       <span style={styles.name}> Welcome, {name}</span>
//       <button type="button" onClick={() => dispatch(authOperations.logOut())}>
//         Quit
//       </button>
//     </div>
//   );
// }
