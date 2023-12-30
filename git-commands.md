## to check your configuration - name and email
git config --list

## The first step is to make the local folder on your PC a git repository
git init

## As of now, Git doesn’t know where the remote repository is located. Hence we need to instruct Git to link it with the remote repository
git remote add origin repo-url

### ' repo-url ' refers to the remote repository URL we copied earlier.
### ' origin ' is a short name for this long URL which comes in handy whenever we have to push some code to the remote repository.
### 'repo-url' is the link to your git repository

## If your remote repository already contains some code files, then you need to pull them inside your local repository.
git pull

## You can verify if a local repository is tracking the remote repository using 
git remote -v

## You can replace the remote URL by using the command below.
git remote set-url origin repo-url

## you can check the status of the changed files using
git status

## if you want some file/folder should be commited
### create a .gitignore file
### write the name of the file/folder you want git to ignore inside .gitignore

## taking untracked files to the staging area

### stages all changes
git add -A 

### stages new files and modifications, without deletions (on the current directory and its subdirectories).
git add . 

### stages modifications and deletions, without new files
git add -u

## If you added some files in the staging area by mistake, then you can use the following command to unstage them.
git reset fileName.js

### this will unstage all the files
git reset

## to commit the changes to remote repository
git commit -m "describe your commit in comprehensive manner so other devs can get the clear idea of WTF have you done"

## To see all the commits in the repository (made by all the developers), use following command.
git log

### To see file that was changed or added in a commit, use --stat argument with git log like this 
git log --stat

### To change the message of the previous commit, use the following command.
git commit --amend -m "your message"

## when you create a new file or make some changes to the existing file you can either create a new commit or add these file(s) to old commit. We know how to create a commit, so let’s add some changes to the old commit.

### add that file to the staging area
git add fileName.js

### type this command
git commit --amend => It will open vim editor or whatever terminal editor is at your disposal like below.
### there you will see your staged file is commited, if yes, simply save the file and git will automatically commit your file to the previous commit.

## So far, out first commit is located in the local repository and the remote repository has no idea of its existence. Hence we need to push that commit to the remote repository. That can be done using the command below.
git push -u origin master

=> 'origin' means push commits to remote repository URL with short name origin. 
=> 'master' means master branch. There can be many branches of a repository.
=> '-u' combined with origin master sets the default remote repository and branch to origin and master respectively for the current branch. Next time, when we need to push some commits, we just have to use 'git push'. The -u is a shortcut for the --set-upstream-to flag which should be used while pushing the very first commit.
