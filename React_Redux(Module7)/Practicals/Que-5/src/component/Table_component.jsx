
import React, { useState } from 'react';

const Table_component = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const data = [
        { id: 1, name: 'Janvi Panchal', age: 20, city: 'Ahmedabad' },
        { id: 2, name: 'Payal Panchal', age: 14, city:'Kansa' },
        { id: 3, name: 'Aparna rani', age: 25, city: 'Goa' },
        { id: 4, name: 'Aksh ', age: 22, city: 'Patan' },
        { id: 5, name: 'Arpan Kumar', age: 32, city: 'Bendra' },
        { id: 6, name: 'Hetal Panchal', age: 20, city: 'Ahmedabad' },
        { id: 7, name: 'Ajay Kumare', age: 14, city: 'Kansa' },
        { id: 8, name: 'Niyati Bhatt', age: 25, city: 'Goa' },
        { id: 9, name: 'Kajal Asodiya', age: 22, city: 'Patan' },
        { id: 10, name: 'Priya Sood', age: 32, city: 'Bendra' },
        { id: 11, name: 'shweta Rani', age: 20, city: 'Ahmedabad' },
        { id: 12, name: 'Nikita Panchal', age: 14, city: 'Kansa' },
        { id: 13, name: 'Niyati Bhatt', age: 25, city: 'Goa' },
        { id: 14, name: 'Kajal Asodiya', age: 22, city: 'Patan' },
        { id: 15, name: 'Priya Sood', age: 32, city: 'Bendra' },
    ];

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <div>
            <h1>Data Table</h1>
            <input
                type="text"
                placeholder="Search by name or city"
                value={searchTerm}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Table_component