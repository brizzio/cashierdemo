### verify remote

```
git remote -v

```

$ git commit -m "First commit"
# Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.

In the Command prompt, add the URL for the remote repository where your local repository will be pushed.

$ git remote add origin <REMOTE_URL>
# Sets the new remote
$ git remote -v
# Verifies the new remote URL

Push the changes in your local repository to GitHub.com.

$ git push origin main
# Pushes the changes in your local repository up to the remote repository you specified as the origin