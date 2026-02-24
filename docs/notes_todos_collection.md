Notes:

REFACTOR:
* Docs folder is holding doicuments which should be in the .agents
* the master prompt seems to be replacable with maybe a command, which assemles the project from all of the available skills and rules. still I would like to keep it as a final result which can be easy copied to replicate this project or a very similar one - the evolved master feed should make it possible to generate a new portfolio project for another human. I. want to make it sallable as a framework to be able to replicate such a web page within minutes
* should we make the /public/assets folder more granular, with subfolders, ask the AI if this can make sense or just increasing the complexity
* the ZOD approach is missing from the readme


TODO:
* add github link and with the possibility of rendering the Readme
* Agent Rules ahs to be rewritten, it is not following the `.agent` structure
* need to add designer rule, to help me to maintain the design and in the future make it oroject agnostic
* Create all of the social media account for gabor.seboek
    Facebook
    Tiktok
    Youtube
    instagram
    X
* Start to shape the CV together with AI
* Aether & Brass Brewign compani, rename it to gabor.seboek Brewing company, in the generated image - GaborPortfolio/public/assets/thumb-brewing.webp
* Beekeper - replace the face of the gux with the face of mine - GaborPortfolio/public/assets/thumb-beekeeping.webp
* To each of the project we would need to havea rule, for the purpose, if we want to rebuild it, we have already the structure, means the GaborPortfolio/src/data/projects.ts is generated based on the rules and is keeping the data integrity with ZOD
* Add story to the QA Profession, this should be taken from the rule and it is genrating than it n the GaborPortfolio/src/data
* add GaborPortfolio/src/data/kpis.ts to the GaborPortfolio/src/data/types.ts
* Add stories to the projects - we have already basic stories, But not good
* Make the not yet published stories black and white to signalise, these are still in making and not published yet, we alredy have the status `enabled`, but we also need a to extend it with `published`, since we wanted to make projects already published, but maybe not enabled

QUESTION:
* is the GaborPortfolio/src/components/ProjectSection/ProjectCard.tsx using the GaborPortfolio/src/data/types.ts?
* why do we have the GaborPortfolio/src/components/Guide, and we also have the GaborPortfolio/docs/DEBUGGING_GUIDE.md, or is this the generated so to say function out of the MD file, if yes, we should move the md file as well to the .agent structure



# 
* DONE - go with AI and discuss how it will be possible to have this example project as a business model for a new freelancing project. how can I make it scayable, and make this project easy to copy and set up for other persons who wants to generate them very own portfolio webb page
* DONE - how much does it cost to get a reletivelly big antigravity prompt contingent, keeping the investment return ratio very closelly in mind
* DONE - test-results should be in .gitignore
* DONE - create es-lint rule to make naming of files and folders unified
* DONE - AI should explain why following folders are existen and what are thay doing, for a junior programer in pedagogical tone
    * explain the connection between the two listed root folders
        * what is the dist folder for?
            * explain all subfolders and files in detail
            * why do we have a index.html in the root and in the dist folder?
        * in src
            * App.tsx
            * index.css
            * main.tsx
            * setupTests.ts



    
