import { factory } from "typescript";

const QuestionList = [
    {
        questionText: "  What command is used to upload your code and changes to GitHub?",
        answerOptions: [
            {id:0, answerText: " git add", isCorrect: false},
            {id:1, answerText: " git push", isCorrect: true},
            {id:2, answerText: " git upload", isCorrect: false},
            {id:3, answerText: " git status", isCorrect: false},
        ],
    },
    {
        questionText: " How to initialize the local repository with git?",
        answerOptions: [
            {id:0, answerText: " git start", isCorrect: false},
            {id:1, answerText: " git pull", isCorrect: false},
            {id:2, answerText: " git clean", isCorrect: false},
            {id:3, answerText: " git init", isCorrect: true},
        
        ],
    },
    {
        questionText: "How do I get code from another repository on GitHub?",
        answerOptions: [
            {id:0, answerText: " Forking through the GitHub interface", isCorrect: true},
            {id:1, answerText: " git pull-request", isCorrect: false},
            {id:2, answerText: " git fork", isCorrect: false},
            {id:3, answerText: " git clone", isCorrect: false},
        
        ],
    },
    {
        questionText: "How to check the status of your local repository since your last commit?",
        answerOptions: [
            {id:0, answerText: " git check", isCorrect: false},
            {id:1, answerText: " git commit", isCorrect: false},
            {id:2, answerText: " git diff", isCorrect: false},
            {id:3, answerText: " git status", isCorrect: true},
        
        ],
    },
    {
        questionText: "How do I add files to a commit?",
        answerOptions: [
            {id:0, answerText: " git stage", isCorrect: false},
            {id:1, answerText: " git commit", isCorrect: false},
            {id:2, answerText: " git add", isCorrect: true},
            {id:3, answerText: " git reset", isCorrect: false},
        
        ],
    },
    {
        questionText: "Which is the correct git command to add files to the repo?",
        answerOptions: [
            {id:0, answerText: " git add fileName", isCorrect: true},
            {id:1, answerText: " git add", isCorrect: false},
            {id:2, answerText: " Both of above", isCorrect: false},
            {id:3, answerText: " None", isCorrect: false},
        
        ],
    },
    {
        questionText: " What shortcut to stage all the changes you have?",
        answerOptions: [
          {id:0, answerText: "  git push -am “Message”", isCorrect: false},
          {id:1, answerText: "  git commit add ", isCorrect: false},
          {id:2, answerText: "  git commit", isCorrect: true},
          {id:3, answerText: "  git add", isCorrect: false},
        
        ],
    },
    {
        questionText: "Which of the following git command can be used to check the stored stashes?",
        answerOptions: [
            {id:0, answerText: " git stash", isCorrect: false},
            {id:1, answerText: " git stash map", isCorrect: false},
            {id:2, answerText: " git stash list", isCorrect: true},
            {id:3, answerText: " git stash set", isCorrect: false},
        
        ],
    },
    {
        questionText: " Which command will let you know who modified a file?",
        answerOptions: [
            {id:0, answerText: " git blame", isCorrect: true},
            {id:1, answerText: " git diff", isCorrect: false},
            {id:2, answerText: " git log", isCorrect: false},
            {id:3, answerText: " git log –source", isCorrect: false},
        
        ],
    },
    {
        questionText: "How do I add a message to a commit?",
        answerOptions: [
            {id:0, answerText: " git commit -m", isCorrect: true},
            {id:1, answerText: " git commit", isCorrect: false},
            {id:2, answerText: " git add", isCorrect: false},
            {id:3, answerText: " git message", isCorrect: false},
        
        ],
    },
    {
        questionText: "Which option to git commit,will modify last commit message",
        answerOptions: [
            {id:0, answerText: " -replace", isCorrect: false},
            {id:1, answerText: " -change", isCorrect: false},
            {id:2, answerText: " -amend", isCorrect: true},
            {id:3, answerText: " -update", isCorrect: false},
        
        ],
    },
    {
        questionText: "What is the correct syntax for committing all changes with a message?",
        answerOptions: [
            {id:0, answerText: "  git message -am", isCorrect: false},
            {id:1, answerText: " git commit -am", isCorrect: true},
            {id:2, answerText: " git commit -a", isCorrect: false},
            {id:3, answerText: " git add -a", isCorrect: false},
        
        ],
    },
    {
        questionText: "We have just created a new file called “home.html”. Which of the following will add this file so that we can commit it in git?",
        answerOptions: [
            {id:0, answerText: " git add home.html", isCorrect: true},
            {id:1, answerText: " git add new", isCorrect: false},
            {id:2, answerText: " git add -a home.html", isCorrect: false},
            {id:3, answerText: " git git commit home.html", isCorrect: false},
        
        ],
    },
    {
        questionText: " Which of the following commands used to show all parameters in git?",
        answerOptions: [
            {id:0, answerText: " git config --list", isCorrect: true},
            {id:1, answerText: " git config -a", isCorrect: false},
            {id:2, answerText: " git config --all", isCorrect: false},
            {id:3, answerText: " git config --parameters --list", isCorrect: false},
        
        ],
    },
    {
        questionText: " Which of the following commands used to return to the master branch?",
        answerOptions: [
            {id:0, answerText: " git checkout origin", isCorrect: false},
            {id:1, answerText: " git checkout -b master", isCorrect: false},
            {id:2, answerText: " git checkout master", isCorrect: true},
            {id:3, answerText: " git checkout branche", isCorrect: false},
        
        ],
    },
    {
        questionText: "Which command is used to show limited number of a commits?",
        answerOptions: [
            {id:0, answerText: " git fetch <remote>", isCorrect: false},
            {id:1, answerText: " git log -n <limit>" , isCorrect: true},
            {id:2, answerText: " git config <limit> ", isCorrect: false},
            {id:3, answerText: " git status", isCorrect: false},
        
        ],
    },
    {
        questionText: "Which of the following commands used to permanently cancel a commit?",
        answerOptions: [
            {id:0, answerText: " git reset <commit>", isCorrect: true},
            {id:1, answerText: " git revert <commit>rate", isCorrect: false},
            {id:2, answerText: " git reset --hard origin/master", isCorrect: false},
            {id:3, answerText: " git init", isCorrect: false},
        
        ],
    },
    {
        questionText: "How to create a new branch and switch to it directly?",
        answerOptions: [
            {id:0, answerText: " git checkout <branch-name>", isCorrect: false},
            {id:1, answerText: " git branch <branch-name>", isCorrect: false},
            {id:2, answerText: " git checkout -b <branch-name>", isCorrect: true},
            {id:3, answerText: " git branch -new <branch-name>", isCorrect: false},
        
        ],
    },
    {
        questionText: "A repository is a file structure where git stores all the project-based files.?",
        answerOptions: [
            {id:0, answerText: " TRUE", isCorrect: true},
            {id:1, answerText: " FALSE", isCorrect: false},
            {id:2, answerText: " Can be true or false", isCorrect: false},
            {id:3, answerText: " Can not say", isCorrect: false},
        
        ],
    },
    {
        questionText: "Which command creates a copy of an existing git repository?",
        answerOptions: [
            {id:0, answerText: " git copy", isCorrect: false},
            {id:1, answerText: " git clone", isCorrect: true},
            {id:2, answerText: " git replace", isCorrect: false},
            {id:3, answerText: " git move", isCorrect: false},
        
        ],
    },
    {
        questionText: "The _________ command is a convenient way to set configuration options for defining the behavior of the repository, user information and preferences, git installation-based configurations, and many such things",
        answerOptions: [
            {id:0, answerText: " git head", isCorrect: false},
            {id:1, answerText: " git conflict", isCorrect: false},
            {id:2, answerText: " git status", isCorrect: false},
            {id:3, answerText: " git config", isCorrect: true},
        
        ],
    },
    {
        questionText: " git fetch + git merge equal to?",
        answerOptions: [
            {id:0, answerText: " git push", isCorrect: false},
            {id:1, answerText: " git branch", isCorrect: false},
            {id:2, answerText: " git pull", isCorrect: true},
            {id:3, answerText: " None of the above", isCorrect: false},
        
        ],
    },
    {
        questionText: "Which Git command dispaly the patch representing each commit?",
        answerOptions: [
            {id:0, answerText: " git branch", isCorrect: false},
            {id:1, answerText: " git remote -v", isCorrect: false},
            {id:2, answerText: " git log -p", isCorrect: true},
            {id:3, answerText: " git log", isCorrect: false},
        
        ],
    },
    {
        questionText: "The files that can be committed are always present in git ",
        answerOptions: [
            {id:0, answerText: " Borking directory", isCorrect: false},
            {id:1, answerText: " Staging area", isCorrect: true},
            {id:2, answerText: " unstaged area", isCorrect: false},
            {id:3, answerText: " Anywhere, there is no barrier", isCorrect: false},
        
        ],
    },
    {
        questionText: "Git can be used for which project?",
        answerOptions: [
            {id:0, answerText: " Java enterprise project", isCorrect: false},
            {id:1, answerText: ".Net project", isCorrect: false},
            {id:2, answerText: " File version management", isCorrect: false},
            {id:3, answerText: " All of the above", isCorrect: true},
        
        ],
    },
    {
        questionText: "Which command renames the current branch to <branch>",
        answerOptions: [
            {id:0, answerText: " git remote rm", isCorrect: false},
            {id:1, answerText: " git branch -m", isCorrect: true},
            {id:2, answerText: " git branch -D (CAPS)", isCorrect: false},
            {id:3, answerText: " git rebase", isCorrect: false},
        
        ],
    },
    {
        questionText: "Which git command to compare two spacified branches ?",
        answerOptions: [
            {id:0, answerText: " git diif", isCorrect: false},
            {id:1, answerText: " git merge", isCorrect: false},
            {id:2, answerText: " git blame -L", isCorrect: true},
            {id:3, answerText: " git push -tags", isCorrect: false},
        
        ],
    },
    {
        questionText: "Which command to download all the objects and references from a specific repository?",
        answerOptions: [
            {id:0, answerText: " git log -n", isCorrect: false},
            {id:1, answerText: " git fetch", isCorrect: true},
            {id:2, answerText: " git help", isCorrect: false},
            {id:3, answerText: " git config --list", isCorrect: false},
        
        ],
    },
    {
        questionText: "Command line environment is used for interacting with git",
        answerOptions: [
            {id:0, answerText: " git Lab", isCorrect: false},
            {id:1, answerText: " gitHub", isCorrect: false},
            {id:2, answerText: " git Boot", isCorrect: false},
            {id:3, answerText: " git Bash", isCorrect: true},
        
        ],
    },
    {
        questionText: " Which command can be used to list the branch that have been merged into currently checked-out branch?",
        answerOptions: [
            {id:0, answerText: " git master --status", isCorrect: false},
            {id:1, answerText: " git branch --status", isCorrect: false},
            {id:2, answerText: " git branch --merged", isCorrect: true},
            {id:3, answerText: " git status --merged", isCorrect: false},
        
        ],
    },
    {
        questionText: "What command do you run to view the commit history of your repository?",
        answerOptions: [
            {id:0, answerText: " git history", isCorrect: false},
            {id:1, answerText: " git log ", isCorrect: true},
            {id:2, answerText: " git commit -h", isCorrect: false},
            {id:3, answerText: " git past", isCorrect: false},
        
        ],
    },
    {
        questionText: "What command creates a new branch from the currently  checked-out branch?",
        answerOptions: [
            {id:0, answerText: " git -b checkout", isCorrect: false},
            {id:1, answerText: " git branch", isCorrect: false},
            {id:2, answerText: " git checkout ", isCorrect: false},
            {id:3, answerText: " git checkout -b", isCorrect: true},
        
        ],
    },
    {

        questionText: "What does the following commond do to the git repository git rest --soft HEAD^?",
         answerOptions: [
            {id:0, answerText: " Deletes all previous commints and reset the repository history back to its inotial state", isCorrect: false},
            {id:1, answerText: " Resets the working branch to the first commit", isCorrect: false},
            {id:2, answerText: " It keeps the HEAD at the current, but clears all previous commits ", isCorrect: false},
            {id:3, answerText: " It sets HEAD to the previous commint and leaves changes form the undone commit in the index ", isCorrect: true},
        ]
    },

    {
        questionText: "Which command is used to review them prior to a commit?",
         answerOptions: [
            {id:0, answerText: " git diff --cached", isCorrect: true},
            {id:1, answerText: " git diff", isCorrect: false},
            {id:2, answerText: " git diff --HEAD ", isCorrect: false},
            {id:3, answerText: " git status -v-v ", isCorrect: false},
        ]
    },

    {
        questionText: "After mistakely staging a file named myFile to the index, how would you romove it from the index to exclude it from your next commit?",
         answerOptions: [
            {id:0, answerText: " Use git reset HEAD^", isCorrect: false},
            {id:1, answerText: " Use git reset myFile.txt", isCorrect: true},
            {id:2, answerText: " Use git -rm myFile.txt", isCorrect: false},
            {id:3, answerText: " Use git reset ", isCorrect: false},
    ]
    },
    {
        questionText: "What does the git stash drop command do?",
         answerOptions: [
            {id:0, answerText: " Removes the most recent stash entry", isCorrect: true},
            {id:1, answerText: " Deletes the stash", isCorrect: false},
            {id:2, answerText: " Lits everything in the stash", isCorrect: false},
            {id:3, answerText: " Throws away the olderst entry", isCorrect: false},
        ]
    },
    {
        questionText: "How would you configure the Git to abort a commit if a smoke test script fails?",
         answerOptions: [
            {id:0, answerText: " Create a post-commit shell script that triggers the action", isCorrect: false},
            {id:1, answerText: " Create a post-commit hook to trigger the script", isCorrect: false},
            {id:2, answerText: " Create a pre-commit hook to trigger the scrpit   ", isCorrect: true},
            {id:3, answerText: " Create a pre-commit shell script that triggers the action", isCorrect: false},
        ]
    },
    {
        questionText: "Which option can you use to aplly git configurations action across your entire git environment?",
         answerOptions: [
            {id:0, answerText: " --all", isCorrect: false},
            {id:1, answerText: " --master", isCorrect: false},
            {id:2, answerText: " --global ", isCorrect: true},
            {id:3, answerText: " --update ", isCorrect: false},
        ]
    },
    {
        questionText: "After modifying some existing files in a repository, you discard the changes.Which command can be used",
         answerOptions: [
            {id:0, answerText: " git restore", isCorrect: false},
            {id:1, answerText: " git undo", isCorrect: false},
            {id:2, answerText: " git clean", isCorrect: false},
            {id:3, answerText: " git checkout", isCorrect: true},
        ]
    },
    {
        questionText: "Which statement is true of the git push command?",
         answerOptions: [
            {id:0, answerText: " Commits can be tagged only when they are created", isCorrect: false},
            {id:1, answerText: " By default a push does not send tags to the remote repository ", isCorrect: true},
            {id:2, answerText: " Only annotated tages are autometically pushed to the remote repository", isCorrect: false},
            {id:3, answerText: " Tags are pushed to the repository with their respective commits", isCorrect: false},
        ]
    },
    {
        questionText: "Which option enables inclusion of author name in custom log format?",
         answerOptions: [
            {id:0, answerText: " %am", isCorrect: false},
            {id:1, answerText: " %ad", isCorrect: false},
            {id:2, answerText: " %ae", isCorrect: false},
            {id:3, answerText: " %an", isCorrect: true},
        ]
    },
    {
        questionText: "What happens if you run this command from your master branch? (git checkout -b beta-test)",
         answerOptions: [
            {id:0, answerText: " The beta-test branch will be checked out of the current commit", isCorrect: false},
            {id:1, answerText: " The beta-test branch will be chacked our and deleted", isCorrect: false},
            {id:2, answerText: " A new branch called beta-test will be created and switched to.", isCorrect: true},
            {id:3, answerText: " The beta-test branch will be managed with the master branch", isCorrect: false},
        ]
    },
    {
        questionText: "What command is used to see a description of git rest options?",
         answerOptions: [
            {id:0, answerText: " git help reset", isCorrect: true},
            {id:1, answerText: " git -h reset", isCorrect: false},
            {id:2, answerText: " git options reset", isCorrect: false},
            {id:3, answerText: " git reset help", isCorrect: false},
        ]
    },
    {
        questionText: "How could you squash multiple commits together without using git marge --squash?",
         answerOptions: [
            {id:0, answerText: " Caching", isCorrect: false},
            {id:1, answerText: " You can't. git marge --squash is the only git command fro that opeation", isCorrect: false},
            {id:2, answerText: " Rebasing ", isCorrect: true},
            {id:3, answerText: " Reflogging", isCorrect: false},
        ]
    },
    {
        questionText: "Which option on the git log command allows you to limit output to commit made after certain data?",
         answerOptions: [
            {id:0, answerText: " --since", isCorrect: true},
            {id:1, answerText: " --sinceWhen", isCorrect: false},
            {id:2, answerText: " -", isCorrect: false},
            {id:3, answerText: " afterDate", isCorrect: false},
        ]
    },
    {
        questionText: "Which command can be used to remove the untracked files from the working directory?",
         answerOptions: [
            {id:0, answerText: " git clean -f", isCorrect: false},
            {id:1, answerText: " git rm", isCorrect: false},
            {id:2, answerText: " git reset HEAD", isCorrect: false},
            {id:3, answerText: " git checkout ", isCorrect: true},
        ]
    },
    {
        questionText: "What is the remote repository?",
         answerOptions: [
            {id:0, answerText: " A verison of the repository that mirrors changes made in the local repository's matser branch for open-source collabration efforts", isCorrect: false},
            {id:1, answerText: " The lead repository elected by the Git arbitrator found within local respositories of collaborating team members", isCorrect: false},
            {id:2, answerText: " A read-only version of the repository stored on a backup server in a case local repositories become lost or corrupt", isCorrect: false},
            {id:3, answerText: " A verison of the repository hosted on the internet or network that is pushed to or pulled from by collaborators", isCorrect: true},
        ]
    },
    {
        questionText: "Which command is used to stop the merge and restore the pre-merge state?",
         answerOptions: [
            {id:0, answerText: " git restore p", isCorrect: false},
            {id:1, answerText: " se git merge -u", isCorrect: false},
            {id:2, answerText: " git merge --abort", isCorrect: true},
            {id:3, answerText: " git merge --undo", isCorrect: false},
        ]
    },
    {
        questionText: "How can you check your current git version?",
         answerOptions: [
            {id:0, answerText: " git -v", isCorrect: false},
            {id:1, answerText: " git --version", isCorrect: true},
            {id:2, answerText: " git --option", isCorrect: false},
            {id:3, answerText: " git current", isCorrect: false},
        ]
    },
    {
        questionText: "Which command is used to create a new git repository?",
         answerOptions: [
            {id:0, answerText: " git add", isCorrect: false},
            {id:1, answerText: " git start", isCorrect: false},
            {id:2, answerText: " git new", isCorrect: false},
            {id:3, answerText: " git init ", isCorrect: true},
        ]
    },
    {
        questionText: "Which command currently creates a lightweight tag?",
         answerOptions: [
            {id:0, answerText: " git tag v3.8.1", isCorrect: true},
            {id:1, answerText: " git tag --light v3.8.1", isCorrect: false},
            {id:2, answerText: " git tag v3.8.1 --annotate -m", isCorrect: false},
            {id:3, answerText: " git tag -lv3.8.1", isCorrect: false},
        ]
    },
    {
        questionText: "What is the main issue with using git rebase when working multiple devlopers?",
         answerOptions: [
            {id:0, answerText: " Rebase affacts only your repository and creates a diff in the master branch", isCorrect: false},
            {id:1, answerText: " Rebase creates a temporary copy of the master branch in the remote repo", isCorrect: false},
            {id:2, answerText: " Rebase moves the HEAD of the remote master branch one commit forward", isCorrect: false},
            {id:3, answerText: " Rebase deletes all commit history for the new feature branch", isCorrect: true},
        ]
    },
    {
        questionText: "How would you create a custom shortcut or command across git environment?",
         answerOptions: [
            {id:0, answerText: " Run git hotfix with  the shortcut name", isCorrect: false},
            {id:1, answerText: " Assign a shortcut or command using git option file", isCorrect: false},
            {id:2, answerText: " Use the git custom-key command", isCorrect: false},
            {id:3, answerText: " Create an alias in the git config file", isCorrect: true},
        ]
    },
    {
        questionText: "Which Git command begings tracking of new file?",
         answerOptions: [
            {id:0, answerText: " add", isCorrect: true},
            {id:1, answerText: " addfile", isCorrect: false},
            {id:2, answerText: " begin", isCorrect: false},
            {id:3, answerText: " track", isCorrect: false},
        ]
    },
    {
        questionText: "Which of the following is true about when you use the following command? (git add -A)",
         answerOptions: [
            {id:0, answerText: " xAll new and updated files are staged", isCorrect: true},
            {id:1, answerText: " Files are staged in alphabetical order", isCorrect: false},
            {id:2, answerText: " All new files are staged", isCorrect: false},
            {id:3, answerText: " Only updated files are staged", isCorrect: false},
        ]
    },
    {
        questionText: "Why would you use pre-receive hook in your remote repository?",
         answerOptions: [
            {id:0, answerText: " You wouldn't use it in the local repository", isCorrect: false},
            {id:1, answerText: " To execute a script when a remote receives a psuh that is traggered before any refs are updated", isCorrect: true},
            {id:2, answerText: " To fire  a script after updates are made on the remote repository", isCorrect: false},
            {id:3, answerText: " To debug all commit tags and release version", isCorrect: false},
        ]
    },
    {
        questionText: "What will the following command print to the Terminal? (git romete -v)",
         answerOptions: [
            {id:0, answerText: " A list of remote repositories and their URLs", isCorrect: true},
            {id:1, answerText: " The cuurent virsion you are running", isCorrect: false},
            {id:2, answerText: " An inline editor for modifying remote repository ", isCorrect: false},
            {id:3, answerText: " The last git installed", isCorrect: false},
        ]
    },
    {
        questionText: "What is version control?",
         answerOptions: [
            {id:0, answerText: " A type of architecture used to manage large databases", isCorrect: false},
            {id:1, answerText: " A system that shows, tracks, and controls changes to a set of files over time", isCorrect: true},
            {id:2, answerText: " A programmatic design pattern used to manage code between multiple engineering teams", isCorrect: false},
            {id:3, answerText: " A type of software that links a project with a GitHub repository ", isCorrect: false},
    ]
    },
    {
        questionText: "What information does the git config file store?",
         answerOptions: [
            {id:0, answerText: " Shell script and flags", isCorrect: false},
            {id:1, answerText: " Keychain and account information", isCorrect: false},
            {id:2, answerText: " Local and Global repository", isCorrect: true},
            {id:3, answerText: " Pre-compile scripts and settings", isCorrect: false},
        ]
    },
    {
        questionText: "What commands would you use to force an overwrite of your local files with the master branch?",
         answerOptions: [
            {id:0, answerText: " git pull--all git reset -- hard origin/master", isCorrect: false},
            {id:1, answerText: " git pull -u origin master git reset --hard master", isCorrect: false},
            {id:2, answerText: " git pull origin master reset --hard origin/myCurrentBranch", isCorrect: false},
            {id:3, answerText: " gitfatch --all git reset --hard origin/master", isCorrect: true},
        ]
    },

  ];

  export default QuestionList;