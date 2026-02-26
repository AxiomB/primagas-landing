### Phase 1: Prepare your Application (Local)
Before deploying, you must optimize your project for a low-resource server environment.

1.  **Enable Standalone Mode:** In `next.config.mjs` (or `.js`), add:
    ```javascript
    const nextConfig = {
      output: 'standalone', 
    }
    ```
2.  **Database Connection:** Ensure `.env` uses a relative path: `DATABASE_URI=file:./payload.db`.
3. **Build:** Run npm run build and test with npm run start locally

---

### Phase 2: Server Setup (Lightsail)
1.  **Create Instance:** Choose **Ubuntu 22.04 LTS** (or the Bitnami LAMP stack). 
    *   *Note:* If you chose Bitnami, `httpd` is already running. If you chose "OS Only," it is cleaner.
2.  **Kill the Bitnami "httpd" (Apache) Conflict:**
    Bitnami uses Port 80 for Apache. You must kill it to use Nginx:
    ```bash
    sudo /opt/bitnami/ctlscript.sh stop apache
    sudo pkill -9 httpd
    ```
3.  **Install PM2:**
    ```bash
    npm install -g pm2
    ```

---

### Phase 3: Secure Repository Access (SSH)

Deploy standalone over sftp with the instructions on standalonebuild.md

### Phase 4: Configure Web Server (Nginx)
1.  **Install Nginx:** sudo apt install nginx -y
2.  **Configure Proxy:**
    ```bash
    sudo nano /etc/nginx/sites-available/default
    ```
    Replace the `location /` block:
    ```nginx
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    ```
3.  **Test & Restart:**
    ```bash
    sudo rm /etc/nginx/sites-enabled/default
    sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx
    ```

---

### Phase 4: Process Management & SSL
1.  **Start App with PM2:**
    ```bash
    # Run from your main project folder
    pm2 start .next/standalone/server.js --name "payload-app"
    pm2 save
    pm2 startup
    ```
2.  **Install SSL (Certbot):**
    ```bash
    sudo apt-get update
    sudo apt-get install certbot python3-certbot-nginx
    sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
    sudo systemctl status certbot.timer
    ```
3.  **Lightsail Firewall:** Go to the Lightsail Networking tab and ensure Port **80 (HTTP)** and **443 (HTTPS)** are open.

---