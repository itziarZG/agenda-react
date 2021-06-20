const LOCAL_STORAGE_USER_KEY = 'timekids-user';

const storage = {
  getUser: () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY)),
  setUser: (userData) => {
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
  },
  wipeUser: () => {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  },
};

export default storage;
