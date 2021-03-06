package com.DevCorner.DevCorner.repository;
import java.util.ArrayList;
import java.util.Set;

import com.DevCorner.DevCorner.models.Comment;
import com.DevCorner.DevCorner.models.Post;
import org.springframework.stereotype.Component;

@Component
public interface PostRepository {
    ArrayList<Post> GetAllPosts() ;
    boolean CreatePost(Post post);
    Post GetPost(String category, String slug);
    Set<String> getCategories();
    ArrayList<Post> getPostsByCategory(String category);
    void addComment(String body, String author, String slug, String category);
}
