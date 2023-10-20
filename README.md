
API backend bionbe search

## Getting Started

### Prerequisites

- Nodejs 16.x or later
- npm or yarn
- your prefer database: mysql, mariadb, postgres, sqlite, mssql, oracle

### Installation

1. Clone this repository

   ```bash
   git clone https://git.pic.digital/jimmy/bionbe-search-back.git <your-project-name>
   ```

2. Install the dependencies
   ```bash
   cd <your-project-name>
   npm install or yarn install
   ```
3. Database Configuration

   Create an `.env` file base on the `.env.example` file

   ```bash
   cp .env.example .env
   ```

## Usage

1. Start Application

   ```cmd
   npm start
   ```
   Or
   ```cmd
   npm run dev
   ```

2. Go to https://localhost:9000/

### Project structure

```bash
.
├── src/
|   |--application/         #
|   |   |--dtos/            #
|   |   |--helpers/         #
|   |   |--interfaces/      #
|   |   |--services/        #
|   |--config/              #
|   |--domain/              #
|   |   |--entities/        #
|   |--error-handling/      #
|   |--infrastructure/      #
|   |   |--repositories/    #
|   |   |--typeorm.config.ts    #
|   |--interfaces/      #
|   |   |--controllers/     #
|   |   |--middlewares/     #
|   |   |--routes/     #
```

##### This project was made with TypeORM and Express

&nbsp;
&nbsp;
&nbsp;

##### Made with ❤ by Jimmy Ganci
