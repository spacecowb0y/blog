---
title: "About MongoDB and many-to-many associations"
path: "/about-mongodb-and-many-to-many-associations"
date: "2014-06-11"
author: "Diego"
excerpt: "In a relational database, you might model a many-to-many relationship by creating a “join table.” MongoDB doesn’t have joins. But because arrays are first class citizens in MongoDB, you can simply store an array of ObjectId’s."
tags: ["mongodb", "nosql", "databases"]
---

> In a relational database, you might model a many-to-many relationship by creating a “join table.” MongoDB doesn’t have joins. But because arrays are first class citizens in MongoDB, you can simply store an array of ObjectId’s.

This little fragment from `mongo_mappers` gem documentation made my day.