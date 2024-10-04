# 🚀 Setting Up Redis on Windows Using WSL 🛠️

> Steps to install and run Redis on Windows using the Windows Subsystem for Linux (WSL)

## 1. Install WSL

1. Open **PowerShell** as an Administrator.
2. Run the following command to install WSL:

   ```bash
   wsl --install
   ```

3. Restart your system if prompted.

## 2. Set Up Your Linux Distribution

1. Open the **Start Menu**, search for your installed Linux distribution (e.g., **Ubuntu**), and launch it.
2. Set up a new UNIX username and password when prompted:

   ```
   Enter new UNIX username: myuser
   Enter new UNIX password: ********
   ```

3. Once done, you will have a functioning Linux environment on your Windows machine.

## 3. Update Package Lists

```bash
sudo apt update && sudo apt upgrade
```

## 4. Install Redis

```bash
sudo apt-get install redis
```

## 5. Start Redis Server

To start the Redis server, run the following command in your WSL terminal:

```bash
redis-server
```

## 6. Connect to Redis CLI

Open another terminal tab or window and run:

```bash
redis-cli
```

## 7. Verify Installation

To check if Redis is running, you can ping the server:

```bash
ping
```

If the response is `PONG`, Redis is running successfully!

## 8. Configure Redis (Optional)

You can configure Redis settings by editing the configuration file:

```bash
sudo nano /etc/redis/redis.conf
```

After making changes, restart Redis:

```bash
sudo systemctl restart redis
```

## EXTRAS 🎁

### Common Redis Commands

- **Start Redis Server**: 
  ```bash
  redis-server
  ```

- **Stop Redis Server**: 
  ```bash
  redis-cli shutdown
  ```

- **Check Redis Status**: 
  ```bash
  sudo systemctl status redis
  ```

### Troubleshooting

If you encounter issues, here are some commands you can use:

- **Check if Redis is running**:
  ```bash
  ps aux | grep redis
  ```

- **View Redis logs**:
  ```bash
  tail -f /var/log/redis/redis-server.log
  ```

### Linux Commands

- **List files**: 
  ```bash
  ls
  ```

- **Change directory**: 
  ```bash
  cd <directory>
  ```

- **Create directory**: 
  ```bash
  mkdir <directory>
  ```

- **Update package lists**: 
  ```bash
  sudo apt-get update
  ```

- **Upgrade packages**: 
  ```bash
  sudo apt-get upgrade
  ```
