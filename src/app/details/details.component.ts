import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post-service.service'; 

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  postId: string | null = null;
  post: any;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id'); 
    if (this.postId) {
      this.postService.getPostById(this.postId).subscribe((data) => {
        this.post = data; 
        if (this.post) {
          console.log(this.post.title, this.post.description); 
        }
      });
    }
  }
}
