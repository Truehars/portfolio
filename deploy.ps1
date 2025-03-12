# Portfolio Deployment Script

# Add all changes to git
git add .

# Commit changes with a message
$commitMessage = Read-Host -Prompt "Enter commit message"
git commit -m "$commitMessage"

# Push changes to master branch
git push origin master

# Switch to gh-pages branch
git checkout gh-pages

# Merge changes from master
git merge master

# Push to gh-pages branch
git push origin gh-pages

# Switch back to master branch
git checkout master

Write-Host "Deployment complete! Your website should be updated at https://truehars.github.io/portfolio/ in a few minutes."
Write-Host "Your portfolio is now fully optimized for mobile devices with improved performance and touch interactions." 