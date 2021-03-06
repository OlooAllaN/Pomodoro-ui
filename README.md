# Pomodoro Timer
 Pomodoro is a productivity hack that allows you to break down wok in intervals of 25 minutes separated by short breaks.
 
## Getting Started 
 Due to .NET Framework deployment issues. The application has been broken out into different git projects one for hosting and the other is the full project.
 Click this [pomodoro](https://olooallan.github.io/Pomodoro-ui/Index.html) link to be directed to the ui
 for the full git hub project repository Go to [Pomodoro Timer](https://github.com/OlooAllaN/Pomodoro-Timer). This repository contains the full project architecture. 

##  Technology Stack
####  Frontend
- [X-tag](https://x-tag.github.io/)

 X-Tag is a small library that wraps the Web Components family of APIs to provide a tight, feature-rich interface that makes development of components even easier.
####  Backend
- [.NET Core](https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet)
 
  .NET Core is a cross platform open source platform for building application a cross all operating systems.

- [Entity Framework](https://docs.microsoft.com/en-us/ef/)

    Entity Framework is a open source ORM for working with data using objects of domain specific classes without focusing on the underlying database tables and columns where this data is stored.
#### Database 
- [Google Cloud SQL](https://cloud.google.com/gcp/?utm_source=google&utm_medium=cpc&utm_campaign=na-US-all-en-dr-skws-all-all-trial-b-dr-1008076&utm_content=text-ad-none-any-DEV_c-CRE_109860919087-ADGP_Hybrid+%7C+AW+SEM+%7C+SKWS+%7C+US+%7C+en+%7C+Multi+~+Cloud-KWID_43700009609890930-kwd-19383198255&utm_term=KW_%2Bcloud-ST_%2Bcloud&gclid=EAIaIQobChMIu5bz2dzb6AIVgp6zCh3iggxsEAAYASAAEgKGUPD_BwE)

 Google SQL cloud is designed for managing data held in a relational database management system
   
## Project Architecture 
My project architecture and technologies was based on my current experience building web based applications. My project was broken down to loosely coupled layers data mapping layer, business logic layer, and ui logic layer. 
  
  
    app
    |-
    |-- wwwroot             # Ui source 
    │   |-- css              
    │   |-- js             
    │   |-- lib             
    │   └──   
    |-- Controllers          # Data transmission
    |-- Migrations           # ORM Integration
    |-- Models               # Ui data representation
    |-- Services             # Business logic 
    |-- TableEntities        # Data Modeling
    |-- UiServices           # Ui logic
    |-- Views                # Ui presentation
    └──
    
    Database Schema          # One to Many relationsip presentation Id primary key and userId as a foreign key constraint
    User Table
    Id  | Name
    --- | ---
    112 | Clark
    
    Task Table
    Id  |Text | Status | UserId |
    --- | --  |  ---   |   ---  |
    112 |Task |   0    |   112  |   
    
    
This architecture loosely couples the application into a MVC architecture pattern. My goal was building an application that is scalable
and seperates concerns into layers. The requirements stated to keep track of the user and their tasks. My architecure meets that requirements in that data is sent through the controller into the services layer and then persisted to a relation database. Not only does this architecture meet the requirements it also simplifies architecure framework changes if needed. Lets say the architects decide to change database from relational to graph. All they would need to do is change the data access layer configuration to point to a graph database system.

I was unable to completely finish the coding challenge due to issues connecting my ORM to my relation database system. If I had achieved this issue I would have built my application this way. The user is presented a form to enter their name and task they wish to accomplish in that time period. My ui would have presented the user with a form modal. The modal would have had validation to ensure required fields are filled before persisting the data into the database. After the user had entered the required information. The data would have then been sent to the application controller actions. CRUD operation services would take place storing the user and their task in a SQL relation database. The modal would have closed by the time the user submitted the form. The clock would have started counting down and the start button would have been disabled. The task would have been appended in the DOM within a task component contained in a div container above the clock. Once the time had stopped the user would have been prompted with a modal confirming the task was finished. If finished the task component would update complete and the start button would be enabled. If not the 5 minute break countdown would start. After the break time, The user would be prompted again to continue working on the task or start a new one and the process would start over. I would have stored the user task in the web browser localstorage and with the current clock state. If the user refreshed or closed the browser, data would not be lost and the clock would still have the current countdown state. The user is given options to stop the clock or take a break. If the user selects either of those options they are prompted with a modal whether or not they have completed the task. If not the time resets depending the on the clicked button. The start button if clicked would present a modal prompting a user whether to continue the current task or start a new one if they currently have a task. There are different form modals that get shown depending whether its a new user, the user has completed a task, or the user has not completed a task. The application would be designed in a way to know which state is the current user in. 

Apart from accomplishing the requirements I believe in test driven development. Unit test is valuable to ensure your application architecture if functioning as intended. I would have written unit tests for my frontend and backend services.

## Authors
- Allan Oloo | Developer

## Acknowledgments 
- [Pomodoro ui inspiration](https://codepen.io/isabellle/pen/dYpGMq)
- [Entity Framework Documenation](https://www.entityframeworktutorial.net/efcore/entity-framework-core.aspx)
- [Stackoverflow](https://stackoverflow.com/)
