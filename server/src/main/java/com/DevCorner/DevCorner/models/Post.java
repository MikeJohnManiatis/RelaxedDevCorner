package com.DevCorner.DevCorner.models;

public class Post {

    public String postId;
    public String category;
    public String title;
    public String slug;
    public String body;
    public String author;
    public String cdDate;

    public Post(){ }

    public Post(String postId, String category, String title, String slug, String body, String author, String cdDate)
    {
        this.postId = postId;
        this.category = category;
        this.title = title;
        this.slug = slug;
        this.body = body;
        this.author = author;
        this.cdDate = cdDate;
    }
}
