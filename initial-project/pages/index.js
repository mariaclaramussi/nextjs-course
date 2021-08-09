import Link from 'next/link';

function HomePage() {
    return (
        <>
            <h1>home page</h1>
            <ul>
                <li>
                    <Link href="/clients">Clientes</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </>
    )
}

export default HomePage;