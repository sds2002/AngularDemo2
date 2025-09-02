import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  posts: any[] = [];
  errorMessage: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Normal GET all posts
    this.loadPosts();

    // Test GET single post (404)
    this.dataService.getPost(9999).subscribe({
      next: (data) => console.log(data),
      error: (err) => this.errorMessage = err.message
    });
  }

  loadPosts() {
    this.dataService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (err) => {
        this.errorMessage = err.message;
      }
    });
  }

  addPost() {
    const newPost = { title: 'New Post', body: 'Content here', userId: 1 };
    this.dataService.createPost(newPost).subscribe({
      next: (data) => {
        this.posts.unshift(data);
      },
      error: (err) => {
        this.errorMessage = err.message;
      }
    });
  }
}
