const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const cors = require('cors');
const bodyParse = require('body-Parse');

const db = require('./config/db');

const