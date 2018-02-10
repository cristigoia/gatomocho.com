---
layout: post
title:  Running a Go binary as a systemd service on Ubuntu 16.04
date:   2018-02-09T12:00:00Z
---

This is a quick guide to run a go binary as a systemd service (daemon) on Ubuntu 16.04, which is the latest LTS version available.

This article will not talk about how to create golang services, cloud architecture, etc.

## Creating gatomocho as systemd service

Create `/lib/systemd/system/gatomocho.service` with the content:

```
[Unit]
Description=Gatomocho service
ConditionPathExists=/home/ubuntu/work/src/gatomocho/main
After=network.target

[Service]
Type=simple
User=gatomocho
Group=gatomocho
LimitNOFILE=1024

Restart=on-failure
RestartSec=10
startLimitIntervalSec=60

WorkingDirectory=/home/ubuntu/work/src/gatomocho
ExecStart=/home/ubuntu/work/src/gatomocho/main

# make sure log directory exists and owned by syslog
PermissionsStartOnly=true
ExecStartPre=/bin/mkdir -p /var/log/gatomocho
ExecStartPre=/bin/chown syslog:adm /var/log/gatomocho
ExecStartPre=/bin/chmod 755 /var/log/gatomocho
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=gatomocho

[Install]
WantedBy=multi-user.target
```

The absolute paths in `ConditionPathExists`, `WorkingDirectory`, and `ExecStart` all need to be modified per your environment.  Notice that we have instructed systemd to run the process as the user `gatomocho`, so we need to create that user as well:

```bash
$ cd /tmp
$ sudo useradd gatomocho -s /sbin/nologin -M
$ sudo chmod 755 /lib/systemd/system/gatomocho.service
```

Now, you should be able to enable the service, start it, then monitor the logs by tailing the systemd journal:

```bash
$ sudo systemctl enable gatomocho.service
$ sudo systemctl start gatomocho
$ sudo journalctl -f -u gatomocho
```

The journal is stored as a binary file, so it cannot be tailed directly. But if we configure syslog, we have syslog forwarding enabled so that we can have our log sent to `/var/log/gatomocho/`.

What's next?

The answer depends on how you configured your env. Few bullets to take care of:

- Update firewall rules
- Create a domain server on nginx
- Enable SSL for your domain
