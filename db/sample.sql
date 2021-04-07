

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE IF NOT EXISTS `users` (
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    PRIMARY KEY (username))
    ENGINE=INNODB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `posts` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `post_date` DATE NOT NULL,
    `username`  VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (username) 
    REFERENCES `users` (username)  )
    ENGINE=INNODB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

  -- CREATE TABLE IF NOT EXISTS `comments` (
  --   `id` INT(11) NOT NULL AUTO_INCREMENT,
  --   `content` VARCHAR(255) NOT NULL,
  --   `postId`  int(11) NOT NULL,
  --   PRIMARY KEY (id),
  --   FOREIGN KEY (postId) 
  --   REFERENCES `posts` (postId)  )
  --   ENGINE=INNODB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;



