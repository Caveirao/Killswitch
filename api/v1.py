#!/usr/bin/env python
# -*- coding: utf-8 -*-
# By Allex Lima <allexlima@unn.edu.br> | www.allexlima.com

from flask import request
from flask_restful import Resource
from subprocess import call


class CaveiraoKillSwitchAPI(Resource):
    def __init__(self):
        pass

    def get(self, kill_switch):
        return {}, 405

    def put(self, kill_switch):
        if kill_switch == "off":
            call(["sudo", "poweroff"])
            return {"status": "Robô desligado!"}, 200

    def post(self, kill_switch):
        return {}, 405
