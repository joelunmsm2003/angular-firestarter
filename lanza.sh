cd /home/andy/fire
nvm install 9
ng build
rm -rf dist.tar.gz
tar -czvf dist.tar.gz dist
scp -P 5022 dist.tar.gz root@xiencias.com:/var/www/
ssh root@xiencias.com -p 5022
cd /var/www/html
tar -xzvf dist.tar.gz
