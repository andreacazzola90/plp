
import fsPromises from 'fs/promises';
import path from 'path'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

async function getData() {
    const filePath = path.join(process.cwd(), 'app/api/collections_listing.json');
    const jsonData = await fsPromises.readFile(filePath);

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const objectData = JSON.parse(jsonData.toString());

    if (!objectData) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }


    return objectData.collection_listings
}
export default async function Navbar() {
    const collections = await getData()
    return (
        <div className="navbar bg-base-200 text-base-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-base-content rounded-box w-52">
                        {collections.map((c: Collection, i: number) =>
                            <li key={i} >
                                <Link href={`/collection/${c.collection_id}`} className='flex justify-between'>
                                    <span>{c.title}</span>
                                    <Image
                                        src="/img-placeholder.jpg"
                                        alt={c?.image?.alt}
                                        className=""
                                        width={50}
                                        height={50}
                                    />
                                </Link>
                            </li>)}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <FontAwesomeIcon className="fa-lg" icon={faHeart} />
                        <span className="badge badge-sm badge-primary indicator-item">
                            <span className='absolute'>2</span>
                        </span>
                    </div>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <FontAwesomeIcon className="fa-lg" icon={faUser} />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    )
}