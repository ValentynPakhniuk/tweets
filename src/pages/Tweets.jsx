import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { fetchUsersThunk } from "../redux/users/operations";
import { UsersList } from "../components/UsersList/UsersList";
import { selectError, selectIsLoading } from "../redux/users/selectors";

const Tweets = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Users tweets</title>
      </Helmet>
      {isLoading && !error && <b>Request in progress...</b>}
      <UsersList />
    </>
  );
};
export default Tweets;
