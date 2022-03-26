# replit_awminer

```
git init & git remote add origin https:// xxx @github.com/ xxx/xxx.git & git pull origin main
git checkout main
```

# ubuntu
```
sudo update-alternatives --config x-terminal-emulator




https://www.geeksforgeeks.org/installation-of-node-js-on-linux/
sudo apt install nodejs


https://www.itsupportwale.com/blog/how-to-upgrade-to-python-3-9-0-on-ubuntu-18-04-lts/
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt-get update
...

apt-get update
sudo apt-get install python3.8

sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 1
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 2
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.9 3
sudo update-alternatives --config python3

sudo apt-get install python3-pip
sudo pip3 install virtualenv

virtualenv venv
source venv/bin/activate
sudo pip3 install -r requirements.txt
pip install -r requirements.txt


lsof -i :*port*
sudo kill <pid>
```



# windows
```
virtualenv -p c:\python38\python.exe venv
```

```
python -m py_compile app.py & move __pycache__\app.cpython-38.pyc app.pyc & copy app.py __pycache__\app.py
```

```
python3 -m poetry init --no-interaction
python3 -m poetry add Flask Flask-Cors Cloudscraper Psutil Aioeos
```