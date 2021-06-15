export const isAdmin = ({ currentUser }) => currentUser?.roles?.includes('admin');
export const isAuth = ({ isAuth }) => isAuth;
export const currentUser = ({ currentUser }) => currentUser;
export const books = ({ books }) => books;