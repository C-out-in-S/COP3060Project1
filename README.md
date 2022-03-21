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
* User access to profile pages for other users
* Allow users to send posts through direct messages and third-party messagers 

**Optional Stories**
* Video games get profile pages with ratings, descriptions, and similar games
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
* Messaging Screen - Chat for users to communicate (direct 1-on-1)
   * After creating account, user is able to select profiles to communicate with through their feed or search.
* Notifications Screen 
   * Allows user to view their notifications (direct messages, posts in interest areas, etc.)
  

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
   | username | string | username created by user |
   | password | string | password created by user | 
   | caption       | String   | image caption by author |
   | commentInfo   | String   | conent contained in comments |
   | commentsCount | Number   | number of comments that has been posted to an image |
   | likesCount    | Number   | number of likes for the post |
   | viewCount     | Number   | number of views for the post |
   | createdAt     | DateTime | date when post is created (default field) |
   | updatedAt     | DateTime | date when post is last updated (default field) |
   | comCreatedAt | DateTime | date when comment is created | 
   | messSentAt | DateTime | date and time when message is sent |
   | notifCreatedAt | DateTime | date and time when notification is sent to user |
   | pageRefreshed | Boolean | determines if page is refreshed |
   
  
### Networking
#### List of network requests by screen
   - Login 
      - (Read/GET) Query all accounts to determine if ussername & password match 
   - Register 
      - (Read/GET) Query all accounts to determine if username already created previously 
      - (UPDATE/PUT) Create username and password to database  
   - Home Feed Screen
      - (Read/GET) Query all posts where user is author
      - (Create/POST) Create a new like on a post
      - (Delete) Delete existing like
      - (Create/POST) Create a new comment on a post
      - (Delete) Delete existing comment
      - (UPDATE/PUT) Refresh home feed 
   - Create Post Screen
      - (Create/POST) Create a new post object
      - (Delete) Remove media from post object
   - Profile Screen
      - (Read/GET) Query logged in user object
      - (UPDATE/PUT) Update follower count 
      - (UPDATE/PUT) Update user profile image
      - (UPDATE/PUT) Update user bio
   - Settings Screen 
      - (Read/GET) Query user object's application history
      - (UPDATE/PUT) Update version of application
      - (UPDATE/PUT) Update login information as necessary
   - Messaging Screen 
      - (Create/POST) Create a chat between two users 
      - (Create/POST) Sending media between users 
      - (Delete) Delete the chat between user 
   - Notification Screen
      - (UPDATE/PUT) Add notifications to page as they come


## Milestone 2 - March 8, 2022
### <a href="https://imgur.com/a/fNOT7W7">Link to updated wireframes</a>

## Milestone 3 - March 15, 2022
### <a href="https://imgur.com/a/EnEjMKc">Link to Firebase Database GIF</a>

## Milestone 4 - March 29, 2022
### <a href="">Link to Login Page GIF</a>
### <a href="">Link to Register Page GIF</a>
### <a href="">Link to Video Game Info Page GIF</a>
### <a href="">Link to Settings Page GIF</a>
### <a href="">Link to Profile Page GIF</a>
### <a href="">Link to Notification Page GIF</a>
### <a href="">Link to Home Page GIF</a>

