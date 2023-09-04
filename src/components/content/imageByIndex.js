import api from '../../images/api.jpg'
import bootstrap from '../../images/bootstrap.png'
import css from '../../images/css.png'
import deb from '../../images/deb.png'
import express from '../../images/express.png'
import git from '../../images/git.png'
import js from '../../images/js.png'
import mongodb from '../../images/mongodb.png'
import mysql from '../../images/mysql.png'
import php from '../../images/php.png'
import nodejs from '../../images/nodejs.png'
import postgres from '../../images/postgres.png'

export const images = [
  api,
  js,
  mongodb,
  mysql,
  php,
  nodejs,
  postgres,
  bootstrap,
  css,
  deb,
  express,
  git,
]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
