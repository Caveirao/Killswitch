<img src="https://image.flaticon.com/icons/svg/139/139767.svg" width="48">

# Caveirão KillSwitch
Emergency function to stop robot control services and turn off RaspberryPi remotely

### Requirements

1. **Python 2.7 or 3.6** 
    Download Python interpreter [here](https://www.python.org/).

2. **Raspberry Pi 3 Model B** 
    Learn more about [RasberryPi project](https://www.raspberrypi.org/).

### Setup in your RaspberryPi

1. Clone the repo

    ```bash
	$ git clone https://github.com/Caveirao/Killswitch.git
	$ cd Killswitch/
	```

2. Create Python Virtual Environment

    ```
	$ virtualenv env --system-site-packages
	```
	
	The `–system-site-packages` flag is optional, but by adding it, it allows you isolated environment to access your globally installed packages on your root install, so thing’s like the RPi.GPIO library and such so I find it’s a good idea to add it.

3. Enable Python Virtual Environment 

    ```bash
    $ source env/bin/activate
    ```

4. Install the pip-installable dependencies

    ```bash
	$ pip install -r requirements.txt
    ```

5. Run the **Killswitch**

    ```bash
	$ python app.py
    ```

6. Locally, navigate to [http://localhost:80](http://localhost:80) or remotely [http://your_raspberrypi_ipaddress:80](http://your_raspberrypi_ipaddress:80) to access the service; click in the red button to turn off RaspberryPi.

---
###### Copyright © 2017 [Caveirão KillSwitch](https://github.com/Caveirao/Killswitch) - Licensed by MIT LICENSE.
