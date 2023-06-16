import { link } from "fs"


export default () => {
    return (
        <header className="flex items-center justify-between p-6" role="banner">
            <nav className="flex gap-6">
                <a href="/blog">Blog</a>
                <a href="/community">Community</a>
                <a href="/about">About</a>
            </nav>
            <div className="flex items-center gap-6">
                <a href="/login">Sign in</a>
                <a href="/register" className="inline-block border border-black rounded py-1 px-3">Sign up</a>
            </div>
        </header>
    )
}
