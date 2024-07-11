import { useEffect, useState } from 'react';
import css from './Users.module.scss';
import { fetchUsers } from '../../api/api';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers(page);
  }, [page]);

  const getUsers = async (page) => {
    try {
        const data = await fetchUsers(page);
        setUsers((prevUsers) => [...prevUsers, ...data.users]);
        setHasMore(data.page < data.total_pages);

    } catch (error) {
        setError(`Failed to fetch users. Please try again later.`)
        console.log(error);
    }
};

  return (
    <div className={css.section}>
    <div className={css.container}>
      <h2 className={css.title}>
        Working with GET request
      </h2>
      {error && <p className={css.error}>{error}</p>}
      <ul className={css.usersList}>
        {users.map((user, index ) => (
          <li key={`${user.id}+${index}`} className={css.userCard}>
            <img className={css.avatar} src={user.photo} alt={user.name}/>
            <p className={css.name}>{user.name}</p>
            <p className={css.email}>{user.email}</p>
            <p className={css.phone}>{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
    {hasMore && <button onClick={() => setPage(page + 1)}>Show more</button>}
    </div>
  );
};

export default Users;
