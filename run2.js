#!/bin/sh
UUID=${UUID:-'2c859205-0f77-445a-afe2-5228bd4eaa53'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
