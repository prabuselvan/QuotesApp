import React from 'react';
import _ from 'lodash';
const Pagination = ({count, perPageCount, onPageChange, currentPage})=> {
    const avgCount = Math.floor(count / perPageCount);
    const finalPageCount=_.range(1, avgCount+1);
    if (finalPageCount === 1 ) return null;
    return (
        <div>
                <nav className='Page navigation'>
                    <ul className='pagination mt-5'>
                        {finalPageCount.map((page, index)=> {
                            return <li className= {currentPage === page ? 'page-item active': 'page-item'} key={index}> <a href='#' className='page-link' onClick={()=> onPageChange(page)}>  {page} </a></li>
                        })} 
                    </ul>
                </nav>
        </div>
    )
}

export default Pagination;