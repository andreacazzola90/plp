import Image from 'next/image'
import fsPromises from 'fs/promises';
import path from 'path'
import Pagination from '../components/pagination';
import Link from 'next/link';


async function getData() {
    const filePath = path.join(process.cwd(), 'app/api/posts.json');
    const jsonData = await fsPromises.readFile(filePath);

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const objectData = JSON.parse(jsonData.toString());

    if (!objectData) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return objectData.posts
}

export default async function Plp() {
    //const { data, error } = useSWR('/app/api/posts', fetcher);
    const data = await getData()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-base-100">
            <div>My Post:</div>
            <div className="plp flex justify-between gap-14">
                {Object.values(data).map((x: any) =>
                    <div className="card w-96 bg-base-100 shadow-xl" key={x.id}>
                        <figure>
                            <Image
                                src="/img-placeholder.jpg"
                                alt="Vercel Logo"
                                className=""
                                width={300}
                                height={100}
                                priority
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{x.title}</h2>
                            <p>{x.content}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/product/${x.id}`}>
                                    <button className="btn btn-primary">Buy Now</button>
                                </Link>

                            </div>
                        </div>
                    </div>)}
            </div>
        </main>
    )
}

