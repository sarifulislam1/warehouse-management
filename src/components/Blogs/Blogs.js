import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div>
                <div>
                    <Card border="success w-50 mx-auto p-2 m-3" >
                        <Card.Title>Difference between javascript and nodejs?</Card.Title>

                        <Card.Body>

                            <Card.Text>
                                JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card border="success w-50 mx-auto p-2 m-3" >
                        <Card.Title>When should you use nodejs and when should you use mongodb?</Card.Title>

                        <Card.Body>

                            <Card.Text>
                                Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.

                                MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card border="success w-50 mx-auto p-2 m-3" >
                        <Card.Title>Differences between sql and nosql databases?</Card.Title>

                        <Card.Body>

                            <Card.Text>
                                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card border="success w-50 mx-auto p-2 m-3" >
                        <Card.Title>What is the purpose of jwt and how does it work?</Card.Title>

                        <Card.Body>

                            <Card.Text>
                                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Blogs;