# Editor KazNIISA

Веб приложение для редактирования документов и создание документов на основе шаблонов.

## Run Locally

Clone the project

```bash
  git clone https://github.com/ArmanKalmakhambetov/editor_back_kazniisa.git
```

Go to the project directory

```bash
  cd editor_back_kazniisa
```

Install dependencies

```bash
  npm i
```

Build Docker

```bash
  docker-compose up --build
```

Run migrations

```bash
  npx sequelize-cli db:migrate
```

Run seeds

```bash
  npx sequelize-cli db:seed:all
```

Start the server

```bash
  npm run dev
```

