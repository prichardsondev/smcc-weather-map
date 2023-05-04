### SMCC Student Weather Map  
App will push data to mongodb database that feeds iot.smccme.edu/weather  

Please email me if you need a mongodb username and password

#### Parts Necessary - we'll be adding a full weather station soon
- Raspberry PI 3 or 4
- DHT 11 or 22 temp sensor

#### Setup
Install Nodejs
```
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

Clone Repo  
```
git clone https://github.com/prichardsondev/smcc-weather-map.git
```

Switch Directories
```
cd smcc-weather-map
```

Install node packages 
```
npm i
```

Create .env file 
```
sudo mv .env.example .env
```

Modify .env file
```
sudo nano .env
```

Save and exit  
ctrl + x  
y   

Attach DHT 11 or 22 Temp Sensor

| Sensor Pin   | PI  Pin  |
|--------------|----------|
|      -       | Ground   |
|      +       | 5V       |
|     out      | GPIO 4   |


Start App
```
pm2 app.js  &&\
pm2 save
```

Add to startup
```
pm2 startup
```

Run script in output from pm2 statup

Save
```
pm2 save
```

#### Notes:
- Data is pushed every 15 minutes  
- Change DATA_INTERVAl_MINUTES in .env for testing  
- Waiting .5 minutes for results is better the 15 minutes -)  
- Change back to 15 when done testing so we don't clog up the database
- Check for your apple at:  
https://iot.smccme.edu/weather