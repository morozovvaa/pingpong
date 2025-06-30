# Простое ping-pong приложение с тремя экземплярами на разных портах.
## Запуск
```
bashgit clone <your-repo-url>
cd ping-pong-app
docker-compose up -d
```

## Тестирование

http://localhost:3001/ping - Instance 1
http://localhost:3002/ping - Instance 2
http://localhost:3003/ping - Instance 3

Или через curl:
```
curl http://localhost:3001/ping
curl http://localhost:3002/ping
curl http://localhost:3003/ping
```

## Структура

app.js - Express приложение  
Dockerfile - образ контейнера  
docker-compose.yml - конфигурация 3 экземпляров  
package.json - зависимости Node.js  

## Остановка
```
docker-compose down
```
## Особенности

Порт и сообщение из переменных окружения  
Каждый экземпляр возвращает уникальный ответ  
JSON API с timestamp и информацией о порте  
