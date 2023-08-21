import Image from 'next/image'
// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
import Link from 'next/link';

async function getData() {
  const filePath = path.join(process.cwd(), 'app/api/product.json');
  const jsonData = await fsPromises.readFile(filePath);

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const objectData = JSON.parse(jsonData.toString());

  if (!objectData) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return objectData
}


export default async function Product({ params }: { params: { slug: string } }) {
  const product: Product = await getData()

  return (
    <main className="pdp   p-24 bg-base-100">
      <div className="card  bg-base-100 shadow-xl flex flex-row w-100 text-base-content">
        <figure className="card-image ">
          <Image
            src="/img-placeholder.jpg"
            alt="Vercel Logo"
            className="img-fluid"
            width={500}
            height={300}
            priority
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.body_html}</p>
          <div className="card-actions ">
            <button>wishlist</button>
            <Link href={`/product/${params.slug}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )

}