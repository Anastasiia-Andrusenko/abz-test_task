import { useEffect, useState } from 'react';
import css from './Users.module.scss';
import { fetchUsers } from '../../api/api';
import Button from '../../components/Button/Button';
import Loader from '../../img/loader.svg';
import truncateText from '../../utils/truncateText';
import formatePhone from '../../utils/formatePhone';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUsers(page);
  }, [page]);

  const getUsers = async page => {
    setIsLoading(true);
    try {
      const data = await fetchUsers(page);
      setUsers(prevUsers => [...prevUsers, ...data.users]);
      setHasMore(data.page < data.total_pages);
    } catch (error) {
      setError(`Failed to fetch users. Please try again later.`);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Working with GET request</h2>
        {error && <p className={css.error}>{error}</p>}
        {/* {tooltip.visible && <Tooltip text={tooltip.text} x={tooltip.x} y={tooltip.y}/>} */}
        <ul className={css.usersList}>
          {users.map((user, index) => (
            <li key={`${user.id}+${index}`} className={css.userCard}>
              <div className={css.cardContainer}>
                <img className={css.avatar} src={user.photo} alt={user.name} />
                <div className={css.textWrapper}>
                  <p className={css.name} data-tooltip={user.name}>
                    {truncateText(user.name)}
                  </p>
                </div>
                <div className={css.textWrapper}>
                  <p className={css.position} data-tooltip={user.position}>
                    {truncateText(user.position)}
                  </p>
                </div>
                <div className={css.textWrapper}>
                  <p className={css.email} data-tooltip={user.email}>
                    {truncateText(user.email)}
                  </p>
                </div>
                <div className={css.textWrapper}>
                  <p className={css.phone} data-tooltip={user.phone}>
                    {formatePhone(user.phone)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {isLoading && (
          <img src={Loader} alt="loading..." className={css.loader} />
        )}
      </div>
      {hasMore && (
        <div onClick={() => setPage(page + 1)} className={css.btnWrapper}>
          <Button text="Show more" type="button" className={css.btn} />
        </div>
      )}
    </section>
  );
};

export default Users;
