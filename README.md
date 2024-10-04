Setting Up Redis on Windows Using WSL
Introduction
This guide provides a step-by-step process for installing and setting up Redis on a Windows machine using the Windows Subsystem for Linux (WSL). WSL allows developers to use a Linux distribution (such as Ubuntu) directly on Windows without the overhead of a virtual machine or dual-boot setup. By following these instructions, you will be able to run and manage a Redis server in your WSL environment.

Prerequisites
Windows 10 (version 2004 or higher) or Windows 11.
Administrator access on your Windows machine.
Step 1: Install WSL
Open PowerShell as an Administrator.

Run the following command to install WSL:

bash
Copy code
wsl --install
Restart your system if prompted.

Step 2: Set Up Your Linux Distribution
Open the Start Menu, search for your installed Linux distribution (e.g., Ubuntu), and launch it.

Set up a new UNIX username and password when prompted.

Example:

arduino
Copy code
Enter new UNIX username: myuser
Enter new UNIX password: ********
Once done, you will have a functioning Linux environment on your Windows machine.

Step 3: Update the Linux Packages
After setting up the distribution, it's good practice to update the packages. Run:

bash
Copy code
sudo apt update && sudo apt upgrade
Step 4: Install Redis
Install Redis by using the following command in your WSL terminal:

bash
Copy code
sudo apt-get install redis
Step 5: Start Redis
Start the Redis server using the service command:

bash
Copy code
sudo service redis-server start
Step 6: Verify the Redis Installation
Verify if the Redis server is running correctly by using the redis-cli:

bash
Copy code
redis-cli ping
If Redis is running, it should respond with:

Copy code
PONG
