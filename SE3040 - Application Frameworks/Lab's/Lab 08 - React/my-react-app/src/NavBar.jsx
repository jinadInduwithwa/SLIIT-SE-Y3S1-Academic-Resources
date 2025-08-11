function NavBar() {
    return(
        <nav style={{ backgroundColor: '#f0f0f0', padding: '10px'}}>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', margin: 0 }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Contact</a></li>
            </ul>

        </nav>
    )
}

export default NavBar;