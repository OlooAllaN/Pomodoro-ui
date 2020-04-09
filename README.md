# Pomodoro Timer
 Pomodoro is a productivity hack that allows you to break down wok in intervals of 25 minutes, separated by short breaks.
 
## Getting Started 
 Due to .NET Framework deployment issues. The ui has been broken out into a different git project in order to show case the ui.
 Click this [pomodoro](https://olooallan.github.io/Pomodoro-ui/Index.html) link to be directed to the ui
 For the full git hub project repository Go to [Pomodoro Timer](https://github.com/OlooAllaN/Pomodoro-Timer).This repository contains the full project architecture. 

##  Technology Stack
####  Frontend
- [X-tag](https://x-tag.github.io/)

 X-Tag is a small library that wraps the Web Components family of APIs to provide a tight, feature-rich interface that makes development of components even easier.
####  Backend
- [.NET Core](https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet)
 
  .NET Core is a cross platform open source platform for building application a cross all operating systems.

- [Entity Framework](https://docs.microsoft.com/en-us/ef/)

    Entity Framework is a open source ORM for working with data using objects of domain specific classes without focusing on the underlying database tables and columns where this data is stored.
## Project Architecture 
My project architecture and technologies was based on my current experience building web based applications. My project was broken down loosely coupled layers data mapping layer, business logic layer, and ui logic layer. 
  
  
    app
    |-
    |-- wwwroot             # Ui source 
    │   |-- css              
    │   |-- js             
    │   |-- lib             
    │   └── ...   
    |-- Controllers          # Data transmission
    |-- Migrations           # ORM Integration
    |-- Models               # Ui data represenation
    |-- Services             # Business logic 
    |-- TableEntities        # Data Modeling
    |-- UiServices           # Ui logic
    |-- Views                # Ui presentation
    └── 


This architecture loosely couples the application into a MVC architecture pattern. My goal was building an application that is scalable
and seperates concerns into layers. The requirements stated to keep track of the user and their tasks. My architecure meets that requirements in that data is sent through the controller into the services layer and then persisted to a relation database. Not only does this architecture meet the requirements it also allows you change technologies if needed. Lets say the architects decide to change database from relational to a graph database. All they would need to do is change the data access layer configuration to point to a graph database system. 

I was unable to completely finish the coding challenge due to issues connecting my ORM to my relation database system. If I had achieved this issue I would have built my application this way. The user is presented a form to enter their name and task they wish to accomplish in that time period. My Ui would have presented the user with a modal. The modal would have had validation to ensure required fields are field before persisting the data into the database. After the user had entered the required information. The would have then been sent t to my controller actions. services would then handled CRUD operations storing the user and their task in my relation database. The modal would have closed by the time the user hit submit. The clock would then have started counting down. I would have stored the user task in localstorage and with the current clock state. So if the user refreshed or closed the browser that data would not have been lost and the clock would still have the current countdown state. 

Apart from accomplishing the requirements I believe in test driven development. Unit test is valuable to ensure your application architecture if functioning as intended. I would have written unit tests for my frontend and backend services.

## Authors
- Allan Oloo - Developer -

## Acknowledgments 
- [Pomodoro Clock Ui inspiration](https://codepen.io/isabellle/pen/dYpGMq)
- [Entity Framework Documenation](https://www.entityframeworktutorial.net/efcore/entity-framework-core.aspx)
- [Stackoverflow](https://stackoverflow.com/)
