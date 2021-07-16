import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link href='/'><img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/05/attachment_98891896-e1557890804541.jpg?auto=format&q=60&fit=max&w=930' alt='Logo' /></Link></div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Todas las Salidas</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Añadir Salida</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
