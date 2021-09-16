const mongoose = require('mongoose')

const influencerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: false
  },
  profilephoto: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  // social media platforms
  youtube: {
    type: String,
    required: false
  },
  instagram: {
    type: String,
    required: false
  },
  twitter: {
    type: String,
    required: false
  },
  tiktok: {
    type: String,
    required: false
  },
  twitch: {
    type: String,
    required: false
  },
  // followers aka audience
  youtubeaudiencesize: {
    type: String,
    required: false
  },
  instagramaudiencesize: {
    type: String,
    required: false
  },
  twitteraudeincesize: {
    type: String,
    required: false
  },
  tiktokaudeincesize: {
    type: String,
    required: false
  },
  twitchaudiencesize: {
    type: String,
    required: false
  },
  // tags
  tags: {
    type: String,
    required: false
  },
  // reference the owner
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  packages: []
}, 
{
  timestamps: true
})

// VERY IMPORTANT STEP
module.exports = mongoose.model('influencer', influencerSchema)


/*
influencer
first_name
last_name
username
profilephoto
country
city
Platforms
Youtube
Instagram
twitter
tiktok
twitch
tags
Youtube
Instagram
twitter
tiktok
twitch
*/