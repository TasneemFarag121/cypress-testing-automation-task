# cypress-testing-automation-task

## Introduction
This document outlines the test cases implemented for the search functionality of the Profile Listing screen. Each test case is designed to ensure the search functionality works as expected under various conditions.

## Test Cases

### 1. Search by Name
- **Test Case**: Search by Name
- **Objective**: Ensure that the search returns profiles based on a valid name input.
- **Steps**:
  1. Navigate to the Profile Listing screen.
  2. Enter the name "John Doe" in the search field.
  3. Click the search button.
  4. Observe the search results.
- **Expected Outcome**: Profiles with the name "John Doe" should be listed.

### 2. Search by Multiple Criteria
- **Test Case**: Search by Name and Country
- **Objective**: Verify that the search can handle multiple criteria and return accurate results.
- **Steps**:
  1. Navigate to the Profile Listing screen.
  2. Enter the following values:
     - Name: "Alice Brown"
     - Country: "UK"
  3. Click the search button.
  4. Observe the search results.
- **Expected Outcome**: Profiles that match both the name "Alice Brown" and the country "UK" should be displayed.

### 3. Search with Empty Fields
- **Test Case**: Search with All Fields Empty
- **Objective**: Verify that the system handles searches with no criteria entered.
- **Steps**:
  1. Navigate to the Profile Listing screen.
  2. Leave all search fields empty.
  3. Click the search button.
  4. Observe the results or system behavior.
- **Expected Outcome**: The system should either list all profiles or display a message indicating that no criteria were provided.

## Project Framework Design

### Page Object Model (POM)

The project follows the Page Object Model (POM) design pattern, including the following pages:

- **Login Page**: Handles user authentication.
- **New Guest Page**: Manages the addition of new guest profiles.
- **Search Guest Page**: Facilitates searching for guest profiles.

### UI Steps

UI flakiness is present in the tests, which may affect the stability of UI interactions during test execution.

### Test Data

Faker is used to generate test data, providing a diverse and realistic set of input values for the tests.

### Cypress Configuration

The base URL for the application has been added to the Cypress configuration file to simplify test execution and avoid hardcoding URLs.

## Challenges

### API Steps

There was a significant challenge with setting authentication cookie headers. Despite spending over three hours, setting these headers was problematic and led to forbidden user errors. Further review and discussion are necessary to resolve this issue effectively.

## Not Covered

- **Allure Report**: Integration of Allure Report was not included in this task.

