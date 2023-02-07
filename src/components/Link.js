import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
    'text-blue-500 cursor-pointer', 
    className,
    currentPath === to && activeClassName // use activeClassName if currentPath === to
    )

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return; // It let us control click to open a new tab, it was disabled by preventdefault
        }
        event.preventDefault(); // It stops the browser from refreshing the page
        navigate(to);
    }
    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;