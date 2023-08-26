'use client'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faGem, faHeart, faSeedling, faShirt, faUser } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { categories } from '../utils';
import { useGeneral } from '../context/generalcontext';


export default function SideMenu() {

    const { cart, wishlist } = useGeneral();


    return (
        <>
            <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <FontAwesomeIcon className="fa-lg" icon={faHeart} />
                    <span className="badge badge-sm badge-primary indicator-item">
                        <span className='absolute'>{wishlist}</span>
                    </span>
                </div>
            </button>
            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <FontAwesomeIcon className="fa-lg" icon={faCartShopping} />
                    <span className="badge badge-sm badge-primary indicator-item">
                        <span className='absolute'>{cart}</span>
                    </span>
                </div>
            </button>
        </>

    )
}