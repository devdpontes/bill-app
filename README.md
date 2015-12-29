# bill-app
Example of a ReactJS/Flux app that displays a user bill

##How to run the App
- Clone the repo to your machine;
- Make sure you have nodeJS installed, and if possible updated to the latest stable version;
- On your command line, run the following command, `npm start`;

This will install all the necessary dependencies, build the app bundle and start a local server on http://localhost:4000.

Just open this url in your browser and you should be able to see the app running.

##Imp notes
###ReactJS and Flux
I've decided to build this using ReactJS and Flux. Initially it might sound overkill, and thinking on the functionality on its own, it actually is, but the objective is to be able to showcase ReactJS and Flux skills. Also, I imagine this being part of a bigger piece, and not a standalone thing.

### UI
The presented UI is very simple, and as well the CSS used for it. This is due to many factors, being the main factor time. Ideally this would be much more elaborated, with SASS variables, broken into separate files. There's much more that can be done to improve it, but in this case, the objective is to be readable and quick.

### Unit Testing
I've decided to keep the ReactJS/Flux theme, and go with what Facebook uses and recommends, which is Jest.
Unfortunately I couldn't get this to work. I'm sure this is lack of experience, but since the documentation says it's dropping support for nodeJS in favor of ioJS, that might be the source of the problem.

Anyway, I've tried to write a simple test file for the only store available.

###Overall improvements
There's much more that could be done here to improve the app, like the UI, adding more comments to the code, testing... But I believe it's a good starting point to showcase a bit of my skills with the time available. There was no time constraints to begin with, but I assume that this test isn't supposed to take days to perfect, in spite of my will to do it.
