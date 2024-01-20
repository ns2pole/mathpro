git pull
sudo find ./dist/mathpro -maxdepth 1 -type f -exec mv {} ../ \;
sudo mv ./dist/mathpro/assets/images/* ../assets/images/
# sudo mv ./dist/mathpro/assets/movies/* ../assets/movies/
sudo rmdir ./dist/mathpro/assets/images
# sudo rmdir ./dist/mathpro/assets/movies
sudo rmdir ./dist/mathpro/assets
