import React from 'react'
import './navbar.css'
import UnStockedLogo from '../../atoms/unstockedLogo/UnStockedLogo'

function Navbar(): React.JSX.Element {
    // const [cartquantity, setcartquantity] = useState(0)

    return (
        <nav className="nav">
            <div className="s1">
                <UnStockedLogo />

                <div className="searchbar">
                    <input
                        type="text"
                        placeholder="Buscar Productos y Categorias"
                        className="search"
                    ></input>

                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="searchclick"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </div>

                <div className="right">
                    <div className="userpic">
                        <span className="quantity">{}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="userclick"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="s2">{/* DropdownMenu */}</div>
        </nav>
    )
}

export default Navbar
