# Alurapic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## API

descompacte o arquivo "api.zip" em sua área de trabalho e logo em seguida apague o arquivo .zip. No terminal, vá até a pasta "api", e certifique-se que dentro da pasta há o arquivo package.json. Ainda dentro da pasta, execute o comando:

npm installCOPIAR CÓDIGO
Aguarde o processo até o final, e quando terminar, execute o seguinte comando dentro da pasta:

npm startCOPIAR CÓDIGO
Você verá a seguinte mensagem exibida no console após o servidor ter sido iniciado:

Servidor escutando na porta: 3000
Users
{ user_id: 1,
  user_name: 'flavio',
  user_email: 'flavio@alurapic.com.br',
  user_password: 123,
  user_full_name: 'Flávio',
  user_join_date: '2018-04-12 20:24:19' }
Users
{ user_id: 2,
  user_name: 'almeida',
  user_email: 'almeida@alurapic.com.br',
  user_password: 123,
  user_full_name: 'Almeida',
  user_join_date: '2018-04-12 20:24:19' }COPIAR CÓDIGO
No seu navegador, verifique o resultado da API acessando o endereço:

http://localhost:3000/flavio/photosCOPIAR CÓDIGO
Um JSON será exibo na janela do navegador.
