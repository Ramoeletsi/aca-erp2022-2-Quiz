import React from "react";
const QuizSummary = () => {
    return (
        <div className="quizSummary">
            <h1>Summary</h1>
            <h2>Anwser and Explanations</h2>
            
            <div className="questionSummary">
                <p>Quistion 1: (B) = (git push) Git command used to upload code and changes to GitHub</p>
                <p>Quistion 2:(D) =  (git) To create a new repository, you will use the “git init” command. “git init” is a command you use
                                        when you first set up a new repository. Running this command will create a new .git subdirectory in your current directory. 
                                        It will also create a new master branch.</p>
                <p>Quistion 3: (A) =  (Forking) Used for getting  code from another repository on GitHub </p>
                <p>Quistion 4: (D) =  (git status) Git cmmand used for checking the status of your local repository since your last commit</p>
                <p>Quistion 5: (C) =  (git add) Git command used to add files to a commit</p>
                <p>Quistion 6: (A) =  (git add fileName) Git command used to add files in repo.</p>
                <p>Quistion 7: (C) =  (git commit) Git command used to stage all the changes made</p>
                <p>Quistion 8: (C) =  ( git stash list) Git command used checking the stored stashes</p>
                <p>Quistion 9: (A) =  (git blame) Git commad that notifies who made the modifications  in a file</p>
                <p>Quistion 10: (A) = ( git commit -m) Git command used for adding a message to a commit</p>
                <p>Quistion 11: (C) = (-amend) Git command used for modifying last  commit message. </p>
                <p>Quistion 12: (B) = (git commit -am) Git commad user for committing all changes with a message </p>
                <p>Quistion 13: (A) = (git add home.html) Git command  will adds  file so that it can  be committed it in git </p>
                <p>Quistion 14: (A) = (git config --list) Git command used to show all parameters in git</p>
                <p>Quistion 15: (C) = (git checkout master) Git commnad used to return to the master branch</p>
                <p>Quistion 16: (B) = (git log -n ) Git command used to show limited number of a commits </p>
                <p>Quistion 17: (A) = (git reset) Git command that cancels commit permanently</p>
                <p>Quistion 18: (C) = (git checkout -b) Git cmmand that create a new branch and switch to it directly. </p>
                <p>Quistion 19: (A) = (A repository) A repository is a file structure where git stores all 
                                        the project-based files. Git can either stores the files on the local or the remote repository.</p>   
                <p>Quistion 20: (B) = (git clone) The command creates a copy (or clone) of an existing git repository. Generally,
                                        it is used to get a copy of the remote repository to the local repository.</p>
                <p>Quistion 21: (D) =  (git config) The git config command is a convenient way to set configuration options for defining the behavior of the repository, 
                                        user information and preferences, git installation-based configurations, and many such things.</p>
                <p>Quistion 22: (C) =  (git pull) This command pulls new changes from the currently working branch located in the remote central repository.</p>
                <p>Quistion 23: (C) =  (git log -p) Git command that dispaly the patch representing each commit. </p>
                <p>Quistion 24: (B) =  (staging area ) The files that can be committed are always present in git staging area </p>
                <p>Quistion 25: (D) =   Git can be used for the the following projects (Java enterprise project, .Net project, File version management and more)</p>
                <p>Quistion 26: (B) =  (git branch -m) Git commnad that renames the current branch. </p>
                <p>Quistion 27: (A) =  (git diff) Git command to compares two spacified branches</p>
                <p>Quistion 28: (B) =  (git fetch) Downloads all objects and references from a specific repository</p>
                <p>Quistion 29: (D) =  (git bash) Git command used for interacting with git.</p>
                <p>Quistion 30: (C) =  (git branch --merged) Git command used to list the branch that have been merged into currently checked-out branch.</p>
                <p>Quistion 31: (B) =  (git log) Git command used to view the commit history and display the necessary information of the git repo.</p>
                <p>Quistion 32: (D) =  (git checkout -b) Git command used for creating a new branch from the currently  checked-out branch.</p>
                <p>Quistion 33: (D) =  (git rest --soft HEAD6) Is uesd to set HEAD to the previous commint and leaves changes form the undone commit in the index.</p>
                <p>Quistion 34: (A) =  (git diff --cached)Is used to review prior to commit after staging a series of changes to the index.</p>
                <p>Quistion 35: (B) =  (git rest myFile.txt) Is used to romove staging from the indeex to exclude it from the next commit</p>
                <p>Quistion 36: (A) =  (git stach drop) Removes the most recent stash entry</p>
                <p>Quistion 37: (C) =  (config git to abort commit) Create a pre-commit hook to trigger the scrpit to configure the Git to abort a commit if a smoke test script fails</p>
                <p>Quistion 38: (C) =  (--global) is used to configurations action across the entire git environment</p>   
                <p>Quistion 39: (D) =  (git checkout) Git command used after modifying some existing files in a repository, you discard the changes.</p>
                <p>Quistion 40: (B) =  (git push) Is used to upload local repository content to a remote repository.</p>
                <p>Quistion 41: (D) =  (%an) Is a command enabling inclusio of author name in the custom log format.</p>
                <p>Quistion 42: (C) =  (git checkout -b beta-test)  Git command used for calling a new  branch called beta-test will be created and switched to.</p>
                <p>Quistion 43: (A) =  (git help reset) is used to review description of git commans.</p>
                <p>Quistion 44: (C) =  (Rebasing ) A git command which is used to squash multiple commits together.</p>
                <p>Quistion 45: (A) =  (--since) A git log commnad used for limmiting output to commit made after a certain data.</p>
                <p>Quistion 46: (A) =  (git clean -f) Is used for removing the untracked files from the working directory.</p>
                <p>Quistion 47: (D) =  (Remote repository) A verison of the repository hosted on the internet or network that is pushed to or pulled from by collaborators.</p>
                <p>Quistion 48: (C) =  (git merge --abort)  A command used to stop the merge and restore the pre-merge state.</p>
                <p>Quistion 49: (B) =  (git --version)  A command  used fpr checking the current git version.</p>
                <p>Quistion 50: (D) =  (git init) Git command used for creating a new git repository.</p>
                <p>Quistion 51: (A) =  (git tag v3.8.1) Git command used for creating a lightweight tag</p>
                <p>Quistion 52: (D) =  (git rebase) A command that deletes all commit history for the new feature branch.</p>
                <p>Quistion 53: (D) =  (create a custom shortcut or command across git environment) Create an alias in the git config file.</p>
                <p>Quistion 54: (A) =  (add) A git command used for tracking of new file</p>
                <p>Quistion 55: (A) =  (git add -A) A command uesd for staging all new and updated files.</p>
                <p>Quistion 56: (B) =  ( pre-receive hook) Is user to execute a script when a remote receives a psuh that is traggered before any refs are updated.</p>
                <p>Quistion 57: (A) =  (git romete -v) A command used for printing a list of remote repositories and their URLs to the Terminal.</p>   
                <p>Quistion 58: (B) =  (version control) A system that shows, tracks, and controls changes to a set of files over time.</p>
                <p>Quistion 59: (C) =  (git config file) Stores local and Global repository </p>
                <p>Quistion 60: (D) =  (gitfatch --all git reset --hard origin/master) Git commands used for forcing an overwrite of local files with the master branch </p>
            </div>  
        </div>
        
    );
}
export default QuizSummary;