import MainNavigation from './MainNavigation';
import MainFooter from './MainFooter';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <MainFooter />
    </div>
  );
}

export default Layout;
