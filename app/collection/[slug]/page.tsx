import Image from 'next/image'
// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
import Pagination from '../../components/pagination';
import PlpSort from '../../components/plp';
import Link from 'next/link';
import Plp from '../../components/plp';


async function getData(slug: string) {
  const filePath = path.join(process.cwd(), '/app/api/collections_detail.json');
  const jsonData = await fsPromises.readFile(filePath);

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const objectData = JSON.parse(jsonData.toString());

  if (!objectData) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const activeCollection = objectData.find((x: Collection) => x.id == slug)

  if (!activeCollection) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('No active collection')
  }
  return activeCollection
}

export default async function Page({ params }: { params: { slug: string } }) {
  const collection: Collection = await getData(params.slug)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-12 bg-base-100 text-base-content">
      <div>{collection.title}</div>
      <div>{collection.body_html}</div>
      <Image
        src="/img-placeholder.jpg"
        alt={collection?.image?.alt}
        className=""
        width={200}
        height={100}
      />
      <Plp products={collection.products} pageInfo={collection.pageInfo}></Plp>
    </main>
  )
}

