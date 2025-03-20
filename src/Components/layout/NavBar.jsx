import { Outlet, Link } from 'react-router-dom'

import style from './NavBar.module.css'

const NavBar = ()=>{
    return(
        <>

            <nav className={style.navbar}>

                <ul className={style.list}>

                    <Link to='/'>
<<<<<<< HEAD
                        <li className={style.item}><img className={style.logo} src="./logo.png" alt="Logotipo" /></li>
=======
                        <li className={style.item}><img className={style.logo} src="./book.png" alt="Logotipo" /></li>
>>>>>>> b5812f35833b33d5a1f9c453d51c44c014f83cc8
                    </Link>
                    

                    <Link to='/'>
                        <li className={style.item}>HOME</li>
                    </Link>
                    
                    <Link to='/newBook'>
                        <li className={style.item}>CADASTRAR LIVROS</li>
                    </Link>
                    

                    <Link to='/listBook'>
                        <li className={style.item}>LISTAR LIVROS</li>
                    </Link>

                </ul>

            </nav>

            <Outlet />

        </>

    )
}

export default NavBar