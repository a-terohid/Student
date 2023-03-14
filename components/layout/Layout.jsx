import { Container } from '@mui/system';
import Link from 'next/link';
import style from "./layout.module.scss"

const Layout = ({children}) => {
    return (
        <div>
                <navbar className={ style.navbar } >
                    <Container className={ style.navbar } >
                        <Link className={ style.title } href='/' >Students</Link>
                        <Link className={ style.add } href="/add-student" >Add Student</Link>
                    </Container>
                </navbar>
                <div className={ style.main }><Container>{children}</Container></div>
                <footer className={ style.footer } >
                    <p>students | DB project</p>
                </footer>
        </div>
    );
};

export default Layout;