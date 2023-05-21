import { useSelector } from "react-redux";
import { UsersList } from "../components/UsersList/UsersList";
import { selectError, selectIsLoading } from "../redux/users/selectors";

const Tweets = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <UsersList />
    </>
  );
};
export default Tweets;
