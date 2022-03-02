# G-Info to You

## Table of Contents
1. [Overview](#Overview)
1. [Product Spec](#Product-Spec)
1. [Wireframes](#Wireframes)
1. [Schema](#Schema) 

## Overview
### Description
Allows users to post gaming related media (pictures, videos, text), learn information about gaming/video games, and communicate with others about gaming. Intended to allow users to learn information about gaming/video games and get their questions answered. 

### App Evaluation
- **Category:** Social Networking / Gaming
- **Story:** Collects the users interest areas and then presents posts made by other users that have that tag or similar content. 
- **Market:** Any individual that is 13 years or older can use this application. 
- **Habit:** This app could be used as often or unoften as the user wanted depending on how deep their social life is, and what exactly they're looking for.
- **Scope:** First we would start by asking the user about their interest areas for games along with games they are interested in. The potential growth of this app will most likely be related to the number of users or features presented.

## Product Spec
### 1. User Stories (Required and Optional)

**Required Stories**

* Users can register and log in 
* Users can choose the interest areas for video games/choose games they are interested in
* Users can post multiple forms of media with tags and comment on others' posts
* Users have the ability to thumbs up/thumbs down posts and report posts/users
* Profile pages for each user
* Settings (Accesibility, Notification, General, etc.)

**Optional Stories**

* User access to profile pages for other users
* Video games get profile pages with ratings, descriptions, and similar games
* Allow users to send posts through direct messages and third-party messagers 
* Representatives of games can serve as professional respondents to questions 

### 2. Screens

* Login 
* Register - User signs up or logs into their account
   * Upon Download/Reopening of the application, the user is prompted to log in to gain access to their profile information to select their interest areas and view their post feed. 
* Profile Screen 
   * Allows user to upload a photo and fill in information that is interesting to them and others.
   * Also shows the users selected interest areas and video games.
* Home Screen.
   * Allows user to view posts that are categorized under their followed tags, interest areas, and related. 
* Post Creation Screen
   * Allows user to create posts with a combination of media (text, video, picture) and add tags to it 
* Search Screen 
   * Allows user to search tags for their interest areas or games and search for other users 
* Settings Screen
   * Lets people change language, and app notification settings.

### 3. Navigation

**Tab Navigation** (Tab to Screen)

* Music selection
* Profile
* Settings

Optional:
* Music/Encounter Queue
* Discover (Top Choices)

**Flow Navigation** (Screen to Screen)
* Forced Log-in -> Account creation if no log in is available
* Music Selection (Or Queue if Optional) -> Jumps to Chat
* Profile -> Text field to be modified. 
* Settings -> Toggle settings

## Wireframes
<a href="https://imgur.com/a/BXzX8rY">Link to wireframes</a>

### Digital Wireframes & Mockups
<a href="https://imgur.com/a/Zwnvszf">Link to digital wireframes</a>

### [BONUS] Interactive Prototype
<a href="https://imgur.com/a/aYRAUgq">Link to prototype</a>

## Schema 
### Models
#### Post

   | Property      | Type     | Description |
   | ------------- | -------- | ------------|
   | objectId      | String   | unique id for the user post (default field) |
   | author        | Pointer to User| user that posted |
   | image         | File     | image that user posts |
   | caption       | String   | image caption by author |
   | commentsCount | Number   | number of comments that has been posted to an image |
   | likesCount    | Number   | number of likes for the post |
   | viewCount     | Number   | number of views for the post |
   | createdAt     | DateTime | date when post is created (default field) |
   | updatedAt     | DateTime | date when post is last updated (default field) |
   | comCreatedAt | DateTime | date when comment is created | 
   
  
### Networking
#### List of network requests by screen
   - Home Feed Screen
      - (Read/GET) Query all posts where user is author
      - (Create/POST) Create a new like on a post
      - (Delete) Delete existing like
      - (Create/POST) Create a new comment on a post
      - (Delete) Delete existing comment
   - Create Post Screen
      - (Create/POST) Create a new post object
   - Profile Screen
      - (Read/GET) Query logged in user object
      - (Update/PUT) Update user profile image
