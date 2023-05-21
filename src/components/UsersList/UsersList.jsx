import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import UserItem from "../UserItem/UserItem";
import { CardList, Container } from "./UsersList.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/selectors";
import {
  fetchUsersThunk,
  updateUsersFollowersThunk,
} from "../../redux/users/operations";
import { Button } from "../Button/Button.styled";
// import ellipseAvatar from "../../images/EllipseAvatar.png";

const followedUsersFromLocalStorage = localStorage.getItem("followedUsers");
const initialFollowedUsers = followedUsersFromLocalStorage
  ? JSON.parse(followedUsersFromLocalStorage)
  : [];

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [followedUsers, setFollowedUsers] = useState(initialFollowedUsers);
  const backLinkLocationRef = useRef(location.state?.from ?? "/");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsersThunk(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    localStorage.setItem("followedUsers", JSON.stringify(followedUsers));
  }, [followedUsers]);

  const handleClick = async (id) => {
    const isFollowed = followedUsers.includes(id);
    const user = users.find((user) => user.id === id);
    const newUser = { ...user };
    newUser.followers = isFollowed
      ? newUser.followers - 1
      : newUser.followers + 1;
    setFollowedUsers(
      isFollowed
        ? followedUsers.filter((userId) => userId !== id)
        : [...followedUsers, id]
    );
    dispatch(updateUsersFollowersThunk(newUser));
  };

  const handleClickLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <Link to={backLinkLocationRef.current}>
        <Button>Go back</Button>
      </Link>
      <CardList>
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            followedUsers={followedUsers}
            handleClick={handleClick}
          />
        ))}
      </CardList>
      <div>
        <Button
          type="button"
          onClick={handleClickLoadMore}
          disabled={users.length === 12}
        >
          Load More
        </Button>
      </div>
    </Container>
  );
};
