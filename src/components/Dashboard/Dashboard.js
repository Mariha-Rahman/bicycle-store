import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        fetch('bicycle.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const match = data.filter(d => d.name.includes(searchText))
                setSearchResult(match)
            })
    }, [searchText])
    const handleInputbtn = event => {
        setSearchText(event.target.value)
    }
    return (
        <div>
            <h1>Search Result:{searchResult.length}</h1>
            <input onChange={handleInputbtn} className='border p-2 m-5' type="text" placeholder='Search' />
            {searchResult.map(result => <p>{result.name}</p>)
            }
        </div>
    );
};

export default Dashboard;