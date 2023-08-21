"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells, faList } from '@fortawesome/free-solid-svg-icons'


import { useGeneral } from '../../context/generalcontext';

export default function PlpNavbar() {
    const { plpViewCol, setPlpViewCol } = useGeneral();

    return (

        <div className="navbar bg-base-100">
            <div className="flex-1">
                <select className="select" defaultValue={'Pick your favorite Simpson'}>
                    <option disabled >Pick your favorite Simpson</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
            </div>
            <div className="flex-none gap-2">
                <button className="btn btn-square" onClick={() => setPlpViewCol(!plpViewCol)}>
                    {/* TODO: view colomn add icon  */}
                    {plpViewCol ? <FontAwesomeIcon icon={faTableCells} /> : <FontAwesomeIcon icon={faList} />}
                </button>
                <button className="btn btn-square btn-outline">
                    {/* TODO: view row add icon  */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        </div>

    )
}