
# Stage 0 Backend - Public API

## Overview

This project is a simple public API that returns basic information in JSON format, including:

-   Registered email address.
-   The current datetime in ISO 8601 format (UTC).
-   The GitHub URL of the project's codebase.

## API Endpoint

**GET** [hng-production.up.railway.app](https://hng-production.up.railway.app/)

### Response Format

```json
{
  "email": "glagogideonelorm2006@gmail.com",
  "current_datetime": "2025-01-29T12:12:55.308491Z",
  "github_url": "https://github.com/glaogideonelorm/HNG/tree/26d86fe93eed7ea0785ed8ca62cd7d170057339b/stage%200/backend"
}

```

## Setup Instructions

1.  Clone the repository:
    
    ```sh
    git clone https://github.com/glaogideonelorm/HNG/
    
    ```
    
2.  Navigate to the project folder:
    
    ```sh
    cd HNG12/stage0/backend
    
    ```
    
3.  Install dependencies:
    
    ```sh
    npm init -y
    npm install .
    
    ```
    
4.  Run the API locally:
    
    ```sh
    node .
    
    ```
    

## Deployment

This API is deployed and publicly accessible at: [hng-production.up.railway.app](https://hng-production.up.railway.app)

## Additional Resources

Looking to hire a Node.js developer? Check out:  
[https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)