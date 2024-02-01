import React, { useState, useEffect } from 'react';
import { Table, Form, Button, InputGroup } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';

function Home() {

    const [search, setSearch] = useState("");
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            const response = await fetch('http://localhost:3000/api/stories');
            const data = await response.json();
            setStories(data);
        };
        fetchStories();
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const filteredStories = stories.filter(story => {
        return story.title.toLowerCase().includes(search.toLowerCase()) ||
            story.author.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="content p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>List Story</h3>
                <div className="d-flex">
                    <InputGroup className="mr-2">
                        <Form.Control
                            placeholder="Search..."
                            value={search}
                            onChange={handleSearch}
                        />
                    </InputGroup>
                    <Button
                        variant="outline-secondary"
                        className="filter-button"
                    >
                        <FaFilter />
                    </Button>
                    <Button variant="primary">Add Story</Button>
                </div>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Writes</th>
                        <th>Category</th>
                        <th>Tags</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStories.map((story, index) => (
                        <tr key={story.id}>
                            <td>{index + 1}</td>
                            <td>{story.title}</td>
                            <td>{story.author}</td>
                            <td>{story.category}</td>
                            <td>{story.tags}</td>
                            <td>{story.status}</td>
                            <td>
                                <Button variant="primary">Edit</Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Home;
