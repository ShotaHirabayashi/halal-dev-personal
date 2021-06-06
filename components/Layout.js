import Head from 'next/head'
import Link from 'next/link'

export default function Layout({children, title="HP by bayashi"}) {
    return(
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <nav className="bg-gray-800 w-screen">
                    <div className="flex items-center pl-8 h-14">
                        <div className="flex sapace-x-4">
                            <Link href="/">
                                <a className="text-gray-300 hover:gb-gray-700 px-3 py-2 rounded">
                                    Home
                                </a>
                            </Link>
                            <Link href="/blog-page">
                                <a className="text-gray-300 hover:gb-gray-700 px-3 py-2 rounded">
                                    BLOG
                                </a>
                            </Link>
                            <Link href="/pref-page">
                                <a className="text-gray-300 hover:gb-gray-700 px-3 py-2 rounded">
                                    PREF
                                </a>
                            </Link>
                        </div>
                    </div>

                </nav>
            </header>
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>
        </div>
    )
}