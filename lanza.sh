cd /Users/xiencias/code/angular-firestarter
rm -rf dist.tar.gz
tar -czvf dist.tar.gz dist
scp -P 5022 dist.tar.gz root@xiencias.com:/var/www/html/
ssh root@xiencias.com -p 5022
cd /var/www/html
tar -xzvf dist.tar.gz
