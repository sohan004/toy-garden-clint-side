import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <h4><span className='fw-bolder'>1:</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
            <p>An access token and a refresh token are both used in authentication and authorization systems, typically in the context of web applications or APIs. They serve different purposes in the authentication flow.</p>

            <h4><span className='fw-bolder'>2:</span> Compare SQL and NoSQL databases?</h4>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

            <h4><span className='fw-bolder'>3:</span> What is express js? What is Next JS</h4>
            <p>Express.js is a popular web application framework for Node.js. It provides a simple and minimalistic approach to building web applications and APIs. Express.js is known for its flexibility and ease of use, making it a preferred choice for developers when creating server-side applications.</p>

            <h4><span className='fw-bolder'>4:</span> What is MongoDB aggregate and how does it work </h4>
            <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
        </div>
    );
};

export default Blog;