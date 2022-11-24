import axios from "axios";
export default {
  actions: {
    fetchUser(ctx, token) {
      return new Promise((resolve, reject) => {
        axios
          .get("user", {
            headers: {
              authorization: token,
            },
          })
          .then((response) => {
            if (response.status === 200)
              ctx.commit("updateUser", response.data);
            else localStorage.removeItem("token");
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
      state.changingUser = false;
    },
    deleteUserResult(state, index) {
      state.changingUser = true;
      state.user.results.splice(index, 1);
    },
    async savingChanges(state) {
      if (state.changingUser)
        await axios.post("changeUser", {
          user: state.user,
        });
    },
  },
  state: {
    user: null,
    changingUser: false,
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    analytics: (state) => {
      const analytic = [];
      state.user.results.forEach((result) => {
        result.userResponses.forEach((userResponse) => {
          let found = analytic.find(
            (item) => item.indexTopic === userResponse.indexTopic
          );
          if (!found) {
            found = {
              indexTopic: userResponse.indexTopic,
              questionsCounter: 0,
              correctCounter: 0,
              rate: 0,
            };
            analytic.push(found);
          }
          if (userResponse.correct) found.correctCounter++;
          found.questionsCounter++;
        });
      });
      analytic.forEach((item) => {
        item.rate = (item.correctCounter / item.questionsCounter) * 100;
      });
      analytic.sort((a, b) => (a.indexTopic < b.indexTopic ? 1 : -1));
      analytic.sort((a, b) => (a.rate > b.rate ? 1 : -1));
      return analytic;
    },
  },
};
