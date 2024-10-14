describe('Fancode API test automation', () => {
  it('tests the API', () => {
    cy.request('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        expect(response.status).to.eq(200);
        const users = response.body;

        //Filter users based on city Fancode
        const fanCodeUsers = users.filter(user => user.city === 'FanCode');

        fanCodeUsers.forEach(user => {

          const todos = user.todos;
          const completedTodos = todos.filter(todo => todo.completed === true);

        //Calculate completed percentage
          const completedPercentage = (completedTodos.length / todos.length) * 100;

        //Assert that percentage is greater than 50%
          expect(completedPercentage).to.be.greaterThan(50);

        });
      });
  });
});
