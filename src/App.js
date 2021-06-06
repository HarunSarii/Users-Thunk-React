import { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { getUserInfos } from "./redux/actions/actions";
import UserCard from "./components/UserCard";

function App({ users, loading, getUserInfos }) {
  useEffect(() => {
    getUserInfos();
  }, [getUserInfos]);

  return (
    <div className="App">
      <h1>Clarusway Students</h1>
      <UserCard users={users} loading={loading} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfos: () => dispatch(getUserInfos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
