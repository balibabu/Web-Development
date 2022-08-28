@ECHO OFF
ECHO ==== Timeline =====
ECHO Auto pulling, adding, commiting and pushing on Github.
ECHO ===================================================================================

git pull
git status
git add .
git status
set /p msg="? changes: "
git commit -m"%msg%"
git push


ECHO ===================================================================================
ECHO Don't Have a Good Day, Have a Great Day
PAUSE