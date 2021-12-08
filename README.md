# Welcome to Bulletproof React
Every Node.js developer has read at least 5 to 6 different guides on writing Express applications. How to make it work is not really a problem nowadays. However, have you ever asked yourself what is the **right way** to do it? This repository has the goal of not only answering this question but actively providing the source code for a clean, easy-to-use, reliable and maintainable structure. Below you can find what this boilerplate provides and what we are actively working on:

 - [x] Security (HTTP Parameter Pollution, Fingerprint, XSS...)
 - [x] Support to Prisma DB (Easily Swappable)
 - [x] Error Management
 - [x] Logging (Using Sentry)
 - [x] Component Structure (Features)
 - [x] Queries and Mutators
 - [x] Testing (Using Jest)
 - [x] Permissions
 - [x] TypeScript
 - [x] Multi-Auth Support (JWT Implemented)
 - [x] Cookie Parsing Supported
 - [x] Environment Variable Parsing
 - [x] Node.js Best Practices Compliant
 - [x] Fully Asynchronous Controllers
 - [ ] Seeding
 - [ ] Testing via Docker
 - [ ] Auto-Documentation (Swagger?)

# MVC into Components
This boilerplate implements a slightly modified version of Model-View-Controller Pattern. Instead of having a single file storing every endpoint of a controller, every controller is broken down into Queries and Mutators. Inside Queries, you will find operations that retrieve data (usually GET methods). Inside Mutators, you will find operations that change data (usually POST, DELETE, and PUT methods).
Queries and Mutators are joined together inside the controller-specific `routes.ts`, which in turn are joined by the upper-level router at `/routes/index.ts`.

# Node.js Best Practices
This repository is compliant with Node.js Best Practices ([Click Here](https://github.com/goldbergyoni/nodebestpractices) to access their repository). Security standards are put above any decision. Testing is easy to implement and broken into individual feature, integrating it with the rest of the code as it should be. If you feel like there is any violation of those best practices, feel free to open an issue.

# Special Thanks
Special thanks to the Spectrum Project ([Here](https://github.com/withspectrum/spectrum)) for laying the foundations to Bulletproof Express. Also, many thanks to Node.js Best Practices ([Here](https://github.com/goldbergyoni/nodebestpractices)) and Bulletproof React ([Here](https://github.com/alan2207/bulletproof-react)) for providing guidance on how Enterprise-Level Software should be written.