const Blog = () => {
  return (
    <div className="my-20 w-6/12 mx-auto">
      <div>
        <h1 className="text-4xl mb-6">What is One way data binding?</h1>
        <p>One-way data binding in Angular is a way to bind data from the component to the view (DOM) or vice versa - from view to the component. It is used to display information to the end-user which automatically stays synchronized with each change of the underlying data.</p>
      </div>
      <div className="my-10">
        <h1 className="text-4xl mb-6">What is NPM in node.js?</h1>
        <p>To build an application with JavaScript or any other frameworks like Angular, React, Express or Node.js, we rely on a Package Manager to install its dependencies. This package manager is called as NPM. 
        </p>
        <p>
        NPM comes with Node.js and is pre-installed with Node. Package.json is the file containing the details of your project such as who created it, and what is the version of node and packages that your project is dependent on. 
        </p>
      </div>
      <div>
        <h1 className="text-4xl mb-6">Different between Mongodb database vs mySQL database?
        </h1>
        <p className="my-5">MySQL is a relational database system that stores data in columns, rows, and tables. You store data in rows, with each column representing a different type of data. You then define relationships between data by using foreign keys and primary keys. Each table has a primary key that you use to identify it, with the foreign key creating a relationship.</p>

        <p>MongoDB is a document-oriented database that stores all of its data as Binary JSON (BSON) documents. BSON allows you to serialize many forms of data. Using BSON documents allows you to store unstructured, semi-structured, and structured data. Instead of a database schema, MongoDB uses a flexible approach, storing documents in collections</p>
      </div>
    </div>
  );
};

export default Blog;