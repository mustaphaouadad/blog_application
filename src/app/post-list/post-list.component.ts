import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../post-service.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule,RouterLink, FormsModule],
  templateUrl: './post-list.component.html',
  styleUrl:'./post-list.component.css',
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  selectCategory='';
  searchTitle='';
$: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
