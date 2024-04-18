# Первый запуск

- 1 - запустить доккер 
- 2 - ввести в терминал команду <p>`docker-compose up --build`</p>
- 3 - ввести в терминал команду для миграции <p>`npx sequelize-cli db:migrate`</p>
- 4 - ввести в терминал команду для сидов <p>`npx sequelize-cli db:seed:all`</p>
- 5 - ввести в терминал команду для установки всех зависимостей <p>`npm i`</p>
- 6 - ввести в терминал команду для запуска приложения <p>`npm run dev`</p>

```
docker-compose up --build
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm i
npm run dev
```
