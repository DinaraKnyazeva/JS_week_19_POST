# JS_week_19_POST
Вам нужно написать функцию для создания постов, в ней должен быть вызов `fetch`, с двумя обработчиками then, который:

- делает POST-запрос по адресу https://jsonplaceholder.typicode.com/posts ;
- с телом — JSON с двумя свойствами `title` и `body` ;
- со свойством `headers` с единственным заголовком: `'Content-Type': 'application/json; charset=UTF-8'` ;
- добавляет созданный пост в DOM.
