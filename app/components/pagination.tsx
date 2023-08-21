import fsPromises from 'fs/promises';
import path from 'path'
import Link from 'next/link';



export default async function Pagination({ pageInfo }: { pageInfo: pageInfo }) {

    return (
        <>
            <div className="pagination pt-10">
                <div className="join flex justify-center">
                    <Link href={`/${pageInfo.startCursor}`}><button className="join-item btn">«</button></Link>
                    <button className="join-item btn">{pageInfo.current_page}</button>
                    <Link href={`/${pageInfo.endCursor}`}><button className="join-item btn">»</button></Link>
                </div>
            </div >
        </>
    )
}