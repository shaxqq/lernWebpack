import PostDate from "./PostDate"
import './assets/styles/style.css'
import json from './assets/json'
import WebpackLogo from './assets/logo.jpg'
const post = new PostDate('Lern Webpack', WebpackLogo)
console.log('Date: ', post.toString())
console.log('JSON', json)