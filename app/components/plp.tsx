import Pagination from "./pagination"
import Link from "next/link"
import Image from "next/image"
import PlpNavbar from "./plp/plpNavbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons"

export default function Plp({ products, pageInfo }: { products: [Product], pageInfo: pageInfo }) {

    return (
        <div className="cmp_plp">
            <PlpNavbar />
            <div className={`plp flex flex justify-between gap-14`}>
                {Object.values(products).map((x: any) =>
                    <div className="card w-96 bg-base-100 shadow-xl" key={x.id}>
                        <figure className="pt-12">
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
                            <div className="card-actions justify-between">
                                <div>
                                    <button className="btn">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                    <button className="btn">
                                        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                                    </button>
                                </div>
                                <Link href={`/product/${x.id}`}>
                                    <button className="btn btn-primary">Buy Now</button>
                                </Link>

                            </div>
                        </div>
                    </div>)}
            </div>
            <Pagination pageInfo={pageInfo}></Pagination>
        </div >

    )
}