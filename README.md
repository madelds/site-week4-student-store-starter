## Unit Assignment: Student Store

Submitted by: **Madel Sibal**

Deployed Application (optional): [Student Store Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES


- [x] **Database Creation**: Set up a Postgres database to store information about products and orders.
  - [x] Use the provided schema to create tables for `products`, `orders`, and `order_items`.
- [x] **Products Model**: Develop a model to represent individual items available in the store. 
  - [x] This model should include attributes such as `id`, `name`, `description`, `price`, `image_url`, and `category`.
  - [x] Implement methods for CRUD operations on products.
  - [x] Ensure transaction handling for the deletion of products to also delete related `order_items`
- [x]**Orders Model**: Develop a model to manage orders. 
  - [x] This model should include attributes such as `order_id`, `customer_id`, `total_price`, `status`, and `created_at`.
  - [x] Implement methods for creating, fetching, updating, and deleting orders.
  - [x] Ensure transaction handling for the deletion of orders to also delete related `order_items`
- [x] **Order Items Model**: Develop a model to represent the items within an order. 
  - [x] This model should include attributes such as `order_item_id`, `order_id`, `product_id`, `quantity`, and `price`.
  - [x] Implement methods for fetching and creating order items.
- [x] **API Endpoints**
  - [x] **Product Endpoints**:
    - [x] `GET /products`: Fetch a list of all products.
    - [x] `GET /products/:id`: Fetch details of a specific product by its ID.
    - [x] `POST /products`: Add a new product to the database.
    - [x] `PUT /products/:id`: Update the details of an existing product.
    - [x] `DELETE /products/:id`: Remove a product from the database.
  - [x] **Order Endpoints**:
    - [x] `GET /orders`: Fetch a list of all orders.
    - [x] `GET /orders/:order_id`: Fetch details of a specific order by its ID, including the order items.
    - [x] `POST /orders`: Create a new order with order items.
    - [x] `PUT /orders/:order_id`: Update the details of an existing order (e.g., change status).
    - [x] `DELETE /orders/:order_id`: Remove an order from the database.
- [ ] **Frontend Integration**
  - [ ] Connect the backend API to the provided frontend interface, ensuring dynamic interaction for product browsing, cart management, and order placement. Adjust the frontend as necessary to work with your API.


#### STRETCH FEATURES

- [x] **Added Endpoints**
  - [x] Create an endpoint for fetching all orders in the database.
  - [x] Create an endpoint for serving an individual order based on its ID.
- [ ] **Filter Orders**
  - [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ ] **Implement Your Own Frontend**
  - [ ] Build your own user interface for browsing products, managing the shopping cart, and placing orders. This will involve integrating the frontend you create with the backend API you developed during the project.
- [ ] **Past Orders Page**
  - [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.


### Walkthrough Video

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/d2c43887970b47f6b93c565cfc9ad359?sid=57e04614-0fde-4d84-a905-4319f2afb8ec" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

`ADD_EMBEDDED_CODE_HERE`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, the topics discussed in my labs prepared me to complete this assignment. I felt unprepared to complete Milestone 6, which required me to connect to the back end to the front end.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would have spent more time customizing the front end, which is one of the additional stretch features. I spent most of my time working with the back end, but it would have been nice to work with the front end as well.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Working with my peers went well, as they were very helpful in the steps where I was implementing Milestones 2-4. Something that did not go as planned was that this project definitely took longer than expected, as there were many errors that kept occurring and things that I needed to debug. Something I would want to try next time that my peers do would be taking better notes in class.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Shout out to Andy, Sam, Karina, Julia, Roxana, Devarsh, and Alex for helping me out with my code and debugging my errors with me!