@echo off
echo ======================================================
echo   GEEKTION E-DRIVE - One-Click Deployment Script
echo ======================================================
echo.
echo [1/3] Staging changes...
git add .

echo [2/3] Committing files...
git commit -m "Final production-ready B2B site setup"

echo [3/3] Pushing to GitHub (Main Branch)...
echo Note: If a window pops up, please login to your GitHub account.
git push -u origin main --force

echo.
echo ======================================================
echo   PROCESS COMPLETE
echo   If you saw "Everything up-to-date" or "OK", it's live!
echo ======================================================
pause
