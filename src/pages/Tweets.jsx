import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { UsersList } from "../components/UsersList/UsersList";
import { selectError, selectIsLoading } from "../redux/users/selectors";

const Tweets = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
