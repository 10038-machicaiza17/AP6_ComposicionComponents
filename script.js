class ExternalDataComponent extends HTMLElement {
    connectedCallback() {
      this.getDataFromAPI();
    }
  
    getDataFromAPI() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => this.displayData(data))
        .catch(error => console.error(error));
    }
  
    displayData(data) {
      // Lógica para mostrar los datos en el componente
      const container = document.createElement('div');
      container.classList.add('data-container');
  
      data.forEach(todo => {
        const todoElement = document.createElement('p');
        todoElement.textContent = todo.title;
        container.appendChild(todoElement);
      });
  
      // Agregar el contenedor al componente
      this.appendChild(container);
    }
  }
  
  customElements.define('external-data-component', ExternalDataComponent);
  