- Inventory Stock Manager

 A lightweight, extensible inventory management system built with Vanilla JavaScript, designed as a foundation
 for scaling into a full-stack (MERN) application.
______________________________________________________________________________________________________________________________________________________

- Overview

 The Inventory Stock Manager enables users to efficiently manage product inventory through a clean and interactive
 interface. It supports core inventory operations such as creation, updates, deletion, and real-time valuation.
______________________________________________________________________________________________________________________________________________________

# Key Features

- Product Management
    - Add items with name, quantity, and price
    - Delete existing items

- Stock Control
    - Increment / decrement quantity dynamically
    - Prevent invalid quantity states

- Real-Time Calculations
    - Per-item total value
    - Aggregate inventory value

- Responsive UI
    - Simple and clean table-based layout
______________________________________________________________________________________________________________________________________________________

# Architecture

 - Data Model

Each inventory item follows this structure:

    { 

    id: number,            //  Unique identifier (timestamp-based)
    name: string,          //  Product name
    qty: number,           //  Available quantity
    price: number          //  Unit price
    
    }

- State Management

    - In-memory array (inventory) acts as a single source of truth
    - UI is fully derived from state using a centralized render() function
______________________________________________________________________________________________________________________________________________________

# Core Functions
__________________________________________________________________________
|                              |                                         |    
|     Function	               |            Responsibility               |  
|______________________________|_________________________________________|
|                              |                                         |
|  addItem()	               |         Create and store new product    |
|                              |                                         |
|  render()	                   |         Sync UI with current state      |
|                              |                                         |
|  increase()	               |         Increment product quantity      |
|                              |                                         |
|  decrease()	               |         Decrement product quantity      |
|                              |                                         |
|  removeItem()	               |         Delete product from inventory   |
|______________________________|_________________________________________|                              
 
______________________________________________________________________________________________________________________________________________________

# Tech Stack

- Layer	                  Technology

- Frontend	              HTML5, CSS3

- Logic	                  JavaScript (ES6)

- Storage	              In-memory (Array)

______________________________________________________________________________________________________________________________________________________

# Project Structure

  inventory-manager/
  ├── index.html       # UI structure 
  ├── style.css        # Styling 
  └── script.js        # Application logic

______________________________________________________________________________________________________________________________________________________