const questionBankData =[
  {
    "id": 1,
    "topicId": "PY-01",
    "topic": "Python Basics",
    "content": "Python provides simple and powerful features for developing applications.",
    "question": "What are Python decorators?",
    "answer": "Decorators are functions that modify or extend the behavior of another function without changing its source code. They are commonly used for logging, authentication, caching, and validation.",
    "difficulty": "Medium"
  },
  {
    "id": 2,
    "topicId": "PY-01",
    "topic": "Python Basics",
    "content": "Python provides several techniques for working with collections and iterating over data.",
    "question": "Explain list comprehension in Python.",
    "answer": "List comprehension is a concise way to create a new list from an existing iterable. It combines a loop and optional condition into a single expression.",
    "difficulty": "Easy"
  },
  {
    "id": 3,
    "topicId": "PY-01",
    "topic": "Python Basics",
    "content": "Python has several built-in collection types for storing data.",
    "question": "What is the difference between a list and a tuple?",
    "answer": "A list is mutable, which means its elements can be modified after creation. A tuple is immutable, so its elements cannot be changed. Lists use square brackets while tuples use parentheses.",
    "difficulty": "Easy"
  },
  {
    "id": 4,
    "topicId": "PY-01",
    "topic": "Python Basics",
    "content": "Python automatically manages memory using several internal mechanisms.",
    "question": "How does Python handle memory management?",
    "answer": "Python manages memory automatically using a private heap, reference counting, and garbage collection. Objects that are no longer referenced can be removed from memory by the garbage collector.",
    "difficulty": "Medium"
  },
  {
    "id": 5,
    "topicId": "PY-01",
    "topic": "Python Basics",
    "content": "Generators allow Python programs to process data efficiently.",
    "question": "What are generators in Python?",
    "answer": "Generators are special functions that produce values one at a time using the yield keyword. They do not store the complete result in memory, making them useful for processing large datasets.",
    "difficulty": "Hard"
  },
  {
    "id": 6,
    "topicId": "DS-01",
    "topic": "Data Structures",
    "content": "Data structures provide ways to organize and efficiently access data.",
    "question": "What is a stack?",
    "answer": "A stack is a linear data structure that follows the Last In, First Out principle. The most recently added element is removed first. Common operations are push and pop.",
    "difficulty": "Easy"
  },
  {
    "id": 7,
    "topicId": "DS-01",
    "topic": "Data Structures",
    "content": "Queues are commonly used when data needs to be processed in order.",
    "question": "What is a queue?",
    "answer": "A queue is a linear data structure that follows the First In, First Out principle. The first element inserted into the queue is the first element removed.",
    "difficulty": "Easy"
  },
  {
    "id": 8,
    "topicId": "DS-01",
    "topic": "Data Structures",
    "content": "Hash tables provide efficient ways to store and retrieve key-value pairs.",
    "question": "What is a hash table?",
    "answer": "A hash table is a data structure that stores key-value pairs. A hash function is used to determine where a value should be stored, allowing efficient insertion and lookup.",
    "difficulty": "Medium"
  },
  {
    "id": 9,
    "topicId": "OOP-01",
    "topic": "OOP Concepts",
    "content": "Object-oriented programming organizes applications using classes and objects.",
    "question": "What is a class and an object in Python?",
    "answer": "A class is a blueprint used to define attributes and methods. An object is an instance of a class that contains actual data and can use the methods defined by the class.",
    "difficulty": "Easy"
  },
  {
    "id": 10,
    "topicId": "OOP-01",
    "topic": "OOP Concepts",
    "content": "Inheritance allows classes to reuse and extend existing functionality.",
    "question": "What is inheritance in Python?",
    "answer": "Inheritance allows a child class to acquire attributes and methods from a parent class. It promotes code reuse and allows developers to create hierarchical relationships between classes.",
    "difficulty": "Medium"
  },
  {
    "id": 11,
    "topicId": "OOP-01",
    "topic": "OOP Concepts",
    "content": "Polymorphism allows different objects to respond to the same method in different ways.",
    "question": "What is polymorphism?",
    "answer": "Polymorphism means the same interface or method name can have different implementations depending on the object using it. It allows flexible and reusable code.",
    "difficulty": "Medium"
  },
  {
    "id": 12,
    "topicId": "SQL-01",
    "topic": "SQL & Databases",
    "content": "SQL is used to manage and retrieve data from relational databases.",
    "question": "What is a primary key?",
    "answer": "A primary key is a column or combination of columns that uniquely identifies every record in a database table. It cannot contain duplicate or NULL values.",
    "difficulty": "Easy"
  },
  {
    "id": 13,
    "topicId": "SQL-01",
    "topic": "SQL & Databases",
    "content": "Joins allow data to be retrieved from multiple related database tables.",
    "question": "What is the difference between INNER JOIN and LEFT JOIN?",
    "answer": "INNER JOIN returns only records that have matching values in both tables. LEFT JOIN returns all records from the left table and matching records from the right table. Unmatched right-side values are returned as NULL.",
    "difficulty": "Medium"
  },
  {
    "id": 14,
    "topicId": "SQL-01",
    "topic": "SQL & Databases",
    "content": "Database normalization helps organize data and reduce unnecessary duplication.",
    "question": "What is database normalization?",
    "answer": "Normalization is the process of organizing database tables to reduce data redundancy and improve data integrity. It usually involves dividing data into related tables and defining relationships between them.",
    "difficulty": "Hard"
  },
  {
    "id": 15,
    "topicId": "REST-01",
    "topic": "REST APIs",
    "content": "REST APIs allow frontend applications to communicate with backend services.",
    "question": "What is a REST API?",
    "answer": "A REST API is an interface that allows applications to communicate over HTTP using resources and standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
    "difficulty": "Easy"
  },
  {
    "id": 16,
    "topicId": "REST-01",
    "topic": "REST APIs",
    "content": "HTTP status codes communicate the result of an API request.",
    "question": "What are common HTTP status codes?",
    "answer": "200 indicates success, 201 indicates resource creation, 400 indicates a bad request, 401 indicates unauthorized access, 403 indicates forbidden access, 404 indicates that a resource was not found, and 500 indicates a server-side error.",
    "difficulty": "Medium"
  },
  {
    "id": 17,
    "topicId": "REACT-01",
    "topic": "React & Frontend",
    "content": "React is a component-based JavaScript library used for creating user interfaces.",
    "question": "What is React?",
    "answer": "React is a JavaScript library for building user interfaces. It allows developers to create reusable components and efficiently update the UI using a virtual DOM.",
    "difficulty": "Easy"
  },
  {
    "id": 18,
    "topicId": "REACT-01",
    "topic": "React & Frontend",
    "content": "React state allows components to store and update dynamic data.",
    "question": "What is state in React?",
    "answer": "State is data managed by a React component that can change over time. When state changes, React re-renders the component to display the updated information.",
    "difficulty": "Medium"
  },
  {
    "id": 19,
    "topicId": "FAST-01",
    "topic": "FastAPI",
    "content": "FastAPI is a modern Python framework designed for building APIs quickly.",
    "question": "What is FastAPI?",
    "answer": "FastAPI is a modern Python web framework used for building high-performance APIs. It provides automatic API documentation, type validation, asynchronous support, and is based on Starlette and Pydantic.",
    "difficulty": "Easy"
  },
  {
    "id": 20,
    "topicId": "FAST-01",
    "topic": "FastAPI",
    "content": "FastAPI uses Python type hints for request validation and API documentation.",
    "question": "Why is FastAPI considered fast?",
    "answer": "FastAPI is designed around ASGI and supports asynchronous programming. It uses modern Python type hints and efficient libraries such as Starlette and Pydantic, allowing it to provide high performance.",
    "difficulty": "Hard"
  }
]

export default questionBankData;