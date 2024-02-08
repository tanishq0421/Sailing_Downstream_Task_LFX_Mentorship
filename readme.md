# SAILING DOWNSTREAM TASK

## Overview
This project provides a JavaScript function `filterList` that filters a list of integers, removing items at positions that are multiples of both 2 and 3. Additionally, it ensures that the input list's length is a multiple of 10. The project includes unit tests to validate the functionality of the `filterList` function.

## Project Setup
To get started with this project, follow these steps:

### Prerequisites
- Node.js installed on your machine

### Installation
1. Clone this repository to your local machine.
    ```shell
    git clone git@github.com:tanishq0421/Sailing_Downstream_Task_LFX_Mentorship.git

2. Navigate to the project directory.
    ```shell
    cd Sailing_Downstream_Task_LFX_Mentorship

### Project Structure
The project structure is as follows:

    Sailing_Downstream_Task_LFX_Mentorship/
    ├── src/
    │ └── filterList.js
    ├── tests/
    │ └── filterList.test.js
    ├── package.json
    ├── README.md
    └── index.js

- `src/`: Contains the implementation of the `filterList` function.
- `tests/`: Includes unit tests for the `filterList` function.
- `package.json`: Manages project dependencies and scripts.
- `README.md`: Provides an overview of the project and instructions for setup, execution, and testing.
- `index.js`: Serves as the entry point for the application.

## How to Run the Code
1. Navigate to the project directory in your terminal.
2. Run the following command to execute the code with an example input list:
    ```shell
    node index.js 1,2,3,4,5,6,7,8,9,10
3. Replace 1,2,3,4,5,6,7,8,9,10 with your desired input list of integers, separated by commas.

## How to test the Code
To run the unit tests for the filterList function, follow these steps:

1. Navigate to the project directory in your terminal.
    ```shell
    cd Sailing_Downstream_Task_LFX_Mentorship

2. Run the following command:
    ```shell
    yarn test

This command executes the Jest test suite, which validates the functionality and edge cases of the filterList function.

