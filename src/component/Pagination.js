import React from 'react'

function Pagination({postPerPage, totalPosts, handleChangePage}) {
    const pageNumbers = [];
    for(let i = 1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pageNumbers.push(i);
    }
    console.log('hehe');
    console.log(totalPosts);
    console.log(pageNumbers);
    
    return (
        <nav>
            <ul className= "pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" onClick={() => handleChangePage(number)}>
                        
                            {number}
                        
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
